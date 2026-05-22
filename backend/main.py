import os
from datetime import datetime, timezone
from fastapi import (
    FastAPI,
    HTTPException,
    WebSocket,
    WebSocketDisconnect,
)
from pydantic import BaseModel
from google.oauth2 import id_token
from google.auth.transport import requests
from fastapi.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

MONGO_DETAILS = os.getenv("MONGO_DETAILS")
GOOGLE_CLIENT_ID = os.getenv("GOOGLE_CLIENT_ID")

client = AsyncIOMotorClient(MONGO_DETAILS)
database = client.ai_digital_db

# Collections များကို ကြေညာခြင်း
user_collection = database.get_collection("users")
contact_collection = database.get_collection(
    "contacts"
)  # Contact Form အတွက် Collection အသစ်

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


# --- Models ---
class AuthData(BaseModel):
    token: str


class ContactMessage(BaseModel):  # Contact Form မှ Data လက်ခံရန် Model
    name: str
    email: str
    message: str


# --- Endpoints ---
@app.post("/auth/google")
async def verify_google_token(data: AuthData):
    try:
        idinfo = id_token.verify_oauth2_token(
            data.token, requests.Request(), GOOGLE_CLIENT_ID
        )
        user_data = {
            "google_id": idinfo["sub"],
            "email": idinfo["email"],
            "name": idinfo["name"],
            "picture": idinfo.get("picture"),
            "last_login": datetime.now(timezone.utc),
        }
        await user_collection.update_one(
            {"google_id": idinfo["sub"]}, {"$set": user_data}, upsert=True
        )
        return {"message": "Login successful", "user": user_data}
    except ValueError:
        raise HTTPException(status_code=400, detail="Invalid Google token")


@app.post("/api/contact")
async def submit_contact(msg: ContactMessage):
    try:
        # Pydantic model မှ dictionary သို့ပြောင်းခြင်း (Pydantic v2 အတွက် model_dump ကိုသုံးသည်)
        contact_data = msg.model_dump() if hasattr(msg, "model_dump") else msg.dict()

        # စာပို့သည့် အချိန်ကို ထည့်သွင်းခြင်း
        contact_data["created_at"] = datetime.now(timezone.utc)

        # MongoDB သို့ သိမ်းဆည်းခြင်း
        result = await contact_collection.insert_one(contact_data)

        if result.inserted_id:
            return {"success": True, "message": "Message saved successfully!"}
        else:
            raise HTTPException(status_code=500, detail="Failed to save message")

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


# --- WebSocket / Active Users Tracking ---
class ConnectionManager:
    def __init__(self):
        self.active_connections: list[WebSocket] = []

    async def connect(self, websocket: WebSocket):
        await websocket.accept()
        self.active_connections.append(websocket)

    def disconnect(self, websocket: WebSocket):
        self.active_connections.remove(websocket)

    async def broadcast_active_users(self):
        count = len(self.active_connections)
        for connection in self.active_connections:
            await connection.send_text(str(count))


manager = ConnectionManager()


@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await manager.connect(websocket)
    await manager.broadcast_active_users()
    try:
        while True:
            data = await websocket.receive_text()
    except WebSocketDisconnect:
        manager.disconnect(websocket)
        await manager.broadcast_active_users()
