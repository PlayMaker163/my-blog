import os
from datetime import datetime
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from google.oauth2 import id_token
from google.auth.transport import requests
from fastapi.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient  # MongoDB အတွက်
from dotenv import load_dotenv

# .env ဖိုင်ကို ဖတ်ခိုင်းခြင်း
load_dotenv()

app = FastAPI()

# Environment Variables များ ရယူခြင်း
MONGO_DETAILS = os.getenv("MONGO_DETAILS")
GOOGLE_CLIENT_ID = os.getenv("GOOGLE_CLIENT_ID")

# MongoDB ချိတ်ဆက်ခြင်း
client = AsyncIOMotorClient(MONGO_DETAILS)
database = client.ai_digital_db  # Database နာမည် (ကြိုက်တာပေးလို့ရပါတယ်)
user_collection = database.get_collection("users")  # Collection နာမည်

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
    try:
        # Google Token ကို Verify လုပ်ခြင်း
        idinfo = id_token.verify_oauth2_token(
            data.token, requests.Request(), GOOGLE_CLIENT_ID
        )

        # User အချက်အလက်များ စုစည်းခြင်း
        user_data = {
            "google_id": idinfo["sub"],
            "email": idinfo.get("email"),
            "name": idinfo.get("name"),
            "picture": idinfo.get("picture"),
            "last_login": datetime.utcnow(),
        }

        # MongoDB မှာ သိမ်းခြင်း (Upsert: ရှိရင် update လုပ်၊ မရှိရင် အသစ်ထည့်)
        await user_collection.update_one(
            {"google_id": user_data["google_id"]}, {"$set": user_data}, upsert=True
        )

        print(f"User synced to MongoDB: {user_data['name']}")

        return {"status": "success", "user": user_data}
    except Exception as e:
        print(f"Error: {e}")
        raise HTTPException(status_code=400, detail="Authentication failed")
