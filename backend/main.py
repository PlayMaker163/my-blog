from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from google.oauth2 import id_token
from google.auth.transport import requests
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS ခွင့်ပြုပေးရန် (Frontend နဲ့ Backend port မတူရင် လိုအပ်ပါတယ်)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Render link အတိအကျ ပြောင်းထည့်နိုင်ပါတယ်
    allow_methods=["*"],
    allow_headers=["*"],
)

GOOGLE_CLIENT_ID = (
    "995318351629-vqhshj2i1h54g2gtdqkr62bdkuf9lgk4.apps.googleusercontent.com"
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

        # User ရဲ့ အချက်အလက်များကို ထုတ်ယူခြင်း
        userid = idinfo["sub"]
        email = idinfo.get("email")
        name = idinfo.get("name")
        picture = idinfo.get("picture")

        print(f"User Logged In: {name} ({email})")

        return {
            "status": "success",
            "user": {"id": userid, "email": email, "name": name, "picture": picture},
        }
    except ValueError:
        # Token မမှန်ကန်လျှင်
        raise HTTPException(status_code=400, detail="Invalid Google Token")
