from pymongo import MongoClient

client = None
book_collection = None

def initialize_db(app):
    global client, book_collection
   
    client = MongoClient("mongodb://localhost:27017/")  # Local MongoDB
   

    db = client["bookstore"]  
    book_collection = db["books"] 
