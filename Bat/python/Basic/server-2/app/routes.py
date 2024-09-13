from flask import request, jsonify
from app import app
from app.models import users_collection, serialize_user
from bson import ObjectId  

# Get all users
@app.route('/', methods=['GET'])
def common():
    users = "hello"
    return jsonify(users)

# Get all users
@app.route('/users', methods=['GET'])
def get_users():
    users = list(users_collection.find())
    return jsonify([serialize_user(user) for user in users])

# Get a single user by ID
@app.route('/users/<user_id>', methods=['GET'])
def get_user(user_id):
    user = users_collection.find_one({"_id": ObjectId(user_id)})
    if user:
        return jsonify(serialize_user(user))
    return jsonify({"message": "User not found"}), 404

# Create a new user
@app.route('/users', methods=['POST'])
def create_user():
    new_user = request.get_json()
    user_id = users_collection.insert_one(new_user).inserted_id
    user = users_collection.find_one({"_id": user_id})
    return jsonify(serialize_user(user)), 201

# Update an existing user by ID
@app.route('/users/<user_id>', methods=['PUT'])
def update_user(user_id):
    updated_data = request.get_json()
    result = users_collection.update_one({"_id": ObjectId(user_id)}, {"$set": updated_data})
    if result.matched_count:
        user = users_collection.find_one({"_id": ObjectId(user_id)})
        return jsonify(serialize_user(user))
    return jsonify({"message": "User not found"}), 404

# Delete a user by ID
@app.route('/users/<user_id>', methods=['DELETE'])
def delete_user(user_id):
    result = users_collection.delete_one({"_id": ObjectId(user_id)})
    if result.deleted_count:
        return jsonify({"message": "User deleted"}), 204
    return jsonify({"message": "User not found"}), 404
