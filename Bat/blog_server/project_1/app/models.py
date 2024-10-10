from bson import ObjectId
from flask_login import UserMixin
from . import mongo, bcrypt


# User Model
class User(UserMixin):
    def __init__(self, user_data):
        self.id = str(user_data['_id'])
        self.email = user_data['email']
        self.password = user_data['password']

    @staticmethod
    def create_user(data):
        hashed_password = bcrypt.generate_password_hash(data['password']).decode('utf-8')
        data['password'] = hashed_password
        return mongo.db.users.insert_one(data)

    @staticmethod
    def get_user_by_email(email):
        user_data = mongo.db.users.find_one({"email": email})
        if user_data:
            return User(user_data)
        return None

    @staticmethod
    def get_user_by_id(user_id):
        user_data = mongo.db.users.find_one({"_id": ObjectId(user_id)})
        if user_data:
            return User(user_data)
        return None


# Blog Model

class Blog:
    @staticmethod
    def create_blog(data):
        return mongo.db.blogs.insert_one(data)

    @staticmethod
    def get_all_blogs():
        return list(mongo.db.blogs.find())

    @staticmethod
    def get_blog_by_id(blog_id):
        return mongo.db.blogs.find_one({"_id": ObjectId(blog_id)})

    @staticmethod
    def update_blog(blog_id, data):
        return mongo.db.blogs.update_one({"_id": ObjectId(blog_id)}, {"$set": data})

    @staticmethod
    def delete_blog(blog_id):
        return mongo.db.blogs.delete_one({"_id": ObjectId(blog_id)})