from pymongo import MongoClient

client = None
book_collection = None

def initialize_db(app):
    global client, book_collection
   
    # client = MongoClient("mongodb://localhost:27017/")  # Local MongoDB
    client = MongoClient("mongodb+srv://sachinpathe123b:xHZ08F1SzgPdLlqo@test-1.ufl4u.mongodb.net/?retryWrites=true&w=majority&appName=test-1")  # Local MongoDB
   
    db = client["bookstore"]  
    book_collection = db["books"] 

