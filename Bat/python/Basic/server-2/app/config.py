import os

MONGODB_URI = os.environ.get("MONGODB_URI", "mongodb://localhost:27017/flaskdb")
