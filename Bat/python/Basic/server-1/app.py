from flask import Flask, jsonify, request

app = Flask(__name__)

# Sample data
data = [
    {"id": 1, "name": "John Doe", "email": "john@example.com"},
    {"id": 2, "name": "Jane Doe", "email": "jane@example.com"}
]

# Route to get all users
@app.route('/users', methods=['GET'])
def get_users():
    return jsonify(data)

# Route to get a single user by ID
@app.route('/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user = next((user for user in data if user["id"] == user_id), None)
    if user:
        return jsonify(user)
    else:
        return jsonify({"message": "User not found"}), 404

# Route to create a new user
@app.route('/users', methods=['POST'])
def create_user():
    new_user = request.get_json()
    data.append(new_user)
    return jsonify(new_user), 201

# Route to update a user
@app.route('/users/<int:user_id>', methods=['PUT'])
def update_user(user_id):
    user = next((user for user in data if user["id"] == user_id), None)
    if user:
        updated_data = request.get_json()
        user.update(updated_data)
        return jsonify(user)
    else:
        return jsonify({"message": "User not found"}), 404

# Route to delete a user
@app.route('/users/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    global data
    data = [user for user in data if user["id"] != user_id]
    return jsonify({"message": "User deleted"}), 204

if __name__ == '__main__':
    app.run(debug=True)
