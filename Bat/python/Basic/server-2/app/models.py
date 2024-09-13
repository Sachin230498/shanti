from bson.objectid import ObjectId
from app import db

# MongoDB collection
users_collection = db["users"]

# Function to serialize user data
def serialize_user(user):
    return {
        "id": str(user["_id"]),
        "name": user["name"],
        "email": user["email"]
    }
