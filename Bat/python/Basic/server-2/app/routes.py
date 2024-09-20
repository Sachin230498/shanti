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
    data = request.get_json()
    
    # Validate that both name and email are provided
    if not data.get('name') or not data.get('email'):
        return jsonify({'message': 'Name and Email are required'}), 400

    # Check if a user with the same email already exists
    existing_user =  users_collection.find_one({'email': data['email']})
    if existing_user:
        return jsonify({'message': 'Email already exists'}), 409  # 409 Conflict

    # Insert the new user into the database
    user_id =  users_collection.insert_one(data).inserted_id
    new_user =  users_collection.find_one({'_id': user_id})
    
    return jsonify({
        '_id': str(new_user['_id']),
        'name': new_user['name'],
        'email': new_user['email']
    }), 201

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
