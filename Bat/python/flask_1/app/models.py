from pymongo import MongoClient

client = None
books_collection = None

def initialize_db(app):
    global client, books_collection
    # Replace with your MongoDB URI
    client = MongoClient("mongodb://localhost:27017/")  # Local MongoDB
    # client = MongoClient("<your MongoDB Atlas connection string>")  # MongoDB Atlas

    db = client["bookstore"]  # Database name
    books_collection = db["books"]  # Collection name
