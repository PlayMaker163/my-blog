from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient
import os
import certifi

app = FastAPI()

# --- CORS Settings ---
# ဒါက Frontend ကနေ လှမ်းခေါ်ရင် Error မတက်အောင် ကာကွယ်ပေးတယ်
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- MongoDB Atlas Connection ---
ca = certifi.where()

# Render ရဲ့ Environment ထဲက DATABASE_URL ကို ယူသုံးမယ်
# တကယ်လို့ ရှာမတွေ့ရင် မင်းပေးထားတဲ့ link ကို သုံးမယ်
ATLAS_URI = os.getenv(
    "DATABASE_URL",
    "mongodb+srv://aungsandar1410_db_user:A74zKtXJ6nBPAvE9@cluster0.mg0qgnc.mongodb.net/?appName=Cluster0",
)

client = MongoClient(ATLAS_URI, tlsCAFile=ca)
db = client.blog_database
posts_collection = db.posts


@app.get("/")
async def root():
    return {"message": "Backend is running!"}


@app.get("/posts")  # လမ်းကြောင်းကို /posts လို့ပဲ ထားလိုက်မယ်
async def get_all_posts():
    posts = []
    for post in posts_collection.find():
        post["_id"] = str(post["_id"])
        posts.append(post)
    return posts
