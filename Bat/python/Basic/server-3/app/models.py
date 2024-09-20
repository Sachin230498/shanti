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

# Product Model
class Product:
    @staticmethod
    def create_product(data):
        return mongo.db.products.insert_one(data)

    @staticmethod
    def get_all_products():
        return list(mongo.db.products.find())

    @staticmethod
    def get_product_by_id(product_id):
        return mongo.db.products.find_one({"_id": ObjectId(product_id)})

    @staticmethod
    def update_product(product_id, data):
        return mongo.db.products.update_one({"_id": ObjectId(product_id)}, {"$set": data})

    @staticmethod
    def delete_product(product_id):
        return mongo.db.products.delete_one({"_id": ObjectId(product_id)})
