import os
from datetime import datetime
from fastapi import (
    FastAPI,
    HTTPException,
    WebSocket,
    WebSocketDisconnect,
)  # WebSocket များကို Import ထပ်လုပ်ထားသည်
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

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


class AuthData(BaseModel):
    token: str


@app.post("/auth/google")
async def verify_google_token(data: AuthData):
    # (သင်၏ မူလ Google Auth ကုဒ်များအတိုင်းပါပဲ)
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


# ==========================================
# Real-time Active User Tracking (WebSocket)
# ==========================================
class ConnectionManager:
    def __init__(self):
        # ဝင်လာသမျှ Connection များကို သိမ်းထားမည့် List
        self.active_connections: list[WebSocket] = []

    async def connect(self, websocket: WebSocket):
        await websocket.accept()
        self.active_connections.append(websocket)

    def disconnect(self, websocket: WebSocket):
        self.active_connections.remove(websocket)

    async def broadcast_active_users(self):
        # လက်ရှိ ချိတ်ဆက်ထားသူ အရေအတွက်ကို ယူပြီး အားလုံးဆီလှမ်းပို့ပေးမည်
        count = len(self.active_connections)
        for connection in self.active_connections:
            await connection.send_text(str(count))


manager = ConnectionManager()


@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    # User တစ်ယောက် Webpage ထဲဝင်လာတိုင်း ဒီကိုရောက်မည်
    await manager.connect(websocket)
    await manager.broadcast_active_users()  # လူအရေအတွက် အပြောင်းအလဲကို အားလုံးဆီပို့မည်
    try:
        while True:
            # Connection မပြတ်သွားအောင် စောင့်နေမည်
            data = await websocket.receive_text()
    except WebSocketDisconnect:
        # User က Webpage ကို ပိတ်သွားလျှင် သို့မဟုတ် ထွက်သွားလျှင်
        manager.disconnect(websocket)
        await manager.broadcast_active_users()  # လူလျော့သွားကြောင်း အားလုံးဆီ ပြန်ပို့မည်


if __name__ == "__main__":
    import uvicorn

    port = int(os.environ.get("PORT", 8000))
    uvicorn.run(app, host="0.0.0.0", port=8000)
