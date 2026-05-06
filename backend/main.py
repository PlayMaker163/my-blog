from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient
import certifi
import uvicorn  # <--- ဒါလေး ပါရပါမယ်

app = FastAPI()

# --- CORS Settings ---
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- MongoDB Atlas Connection ---
ca = certifi.where()

ATLAS_URI = "mongodb+srv://aungsandar1410_db_user:A74zKtXJ6nBPAvE9@cluster0.mg0qgnc.mongodb.net/?appName=Cluster0"


client = MongoClient(ATLAS_URI, tlsAllowInvalidCertificates=True)

db = client.blog_database
posts_collection = db.posts


@app.get("/api/posts")
async def get_all_posts():
    posts = []
    # Database ထဲက data တွေကို ရှာမယ်
    for post in posts_collection.find():
        post["_id"] = str(post["_id"])
        posts.append(post)
    return posts


if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
