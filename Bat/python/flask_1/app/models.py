from flask_pymongo import PyMongo
from flask_login import UserMixin

mongo = PyMongo()

# Collection
books_collection = mongo.db.books
user_collection = mongo.db.user


def initialize_db(app):
    app.config["MONGO_URI"] = "mongodb://localhost:27017/BOOK_TEST"
    mongo.init_app(app)

    # Ensure the "books" collection exists
    db = mongo.db
    db.create_collection("books")

# user class
class User(UserMixin):
    def __init__(self,email):
        self.email = email

    def get_it(self):
        return self.email

# user loader callback
@login_manager.user_loader
def load_user(email):
    user = user_collection.find_one({"email":email})
    if user:
        return User(email=user["email"])
    return None