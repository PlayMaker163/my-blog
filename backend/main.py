import os
from datetime import datetime
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
user_collection = database.get_collection("users")

# --- (က) Contact အတွက် MongoDB Collection သတ်မှတ်ခြင်း ---
contact_collection = database.get_collection("contacts")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


class AuthData(BaseModel):
    token: str


# --- (ခ) Contact Form အတွက် လက်ခံမည့် Data Model ---
class ContactMessage(BaseModel):
    name: str
    email: str
    message: str


@app.post("/auth/google")
async def verify_google_token(data: AuthData):
    try:
        idinfo = id_token.verify_oauth2_token(
            data.token, requests.Request(), GOOGLE_CLIENT_ID
        )
        user_data = {
            "google_id": idinfo["sub"],
            "email": idinfo.get("email"),
            "name": idinfo.get("name"),
            "picture": idinfo.get("picture"),
            "last_login": datetime.utcnow(),
        }
        await user_collection.update_one(
            {"google_id": user_data["google_id"]}, {"$set": user_data}, upsert=True
        )
        return {"status": "success", "user": user_data}
    except Exception as e:
        raise HTTPException(status_code=400, detail="Authentication failed")


# --- (ဂ) အသစ်ထည့်သွင်းထားသော Contact API Endpoint ---
@app.post("/api/contact")
async def save_contact_message(data: ContactMessage):
    try:
        contact_data = {
            "name": data.name,
            "email": data.email,
            "message": data.message,
            "submitted_at": datetime.utcnow(),
        }
        # MongoDB ထဲသို့ Data လှမ်းသွင်းခြင်း (contacts collection မရှိသေးပါက အလိုအလျောက် ဆောက်သွားမည်)
        await contact_collection.insert_one(contact_data)
        return {"status": "success", "message": "Message saved successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


# ==========================================
# Real-time Active User Tracking (WebSocket)
# ==========================================
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


if __name__ == "__main__":
    import uvicorn

    port = int(os.environ.get("PORT", 8000))
    uvicorn.run(app, host="0.0.0.0", port=port)
