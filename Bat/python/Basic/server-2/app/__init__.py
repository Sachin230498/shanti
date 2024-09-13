from flask import Flask
from pymongo import MongoClient
from app.config import MONGODB_URI

app = Flask(__name__)

# Set up MongoDB connection
client = MongoClient(MONGODB_URI)
db = client["flaskdb"]

# Import the routes
from app.routes import *

def create_app():
    app = Flask(__name__)
    return app
