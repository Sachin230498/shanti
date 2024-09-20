from flask import Blueprint, request, jsonify
from flask_login import login_required, current_user
from .models import User, Product
from .auth import login_user_function, logout_current_user

main = Blueprint('main', __name__)

# Signup API
@main.route('/signup', methods=['POST'])
def signup():
    data = request.json
    if User.get_user_by_email(data['email']):
        return jsonify({"error": "Email already exists"}), 400
    User.create_user(data)
    return jsonify({"message": "User created successfully"}), 201

# Login API
@main.route('/login', methods=['POST'])
def login():
    data = request.json
    if login_user_function(data):
        return jsonify({"message": "Logged in successfully"}), 200
    return jsonify({"error": "Invalid credentials"}), 401

# Logout API
@main.route('/logout', methods=['POST'])
@login_required
def logout():
    logout_current_user()
    return jsonify({"message": "Logged out successfully"}), 200

# Get All Products (Protected Route)
@main.route('/products', methods=['GET'])
@login_required
def get_products():
    products = Product.get_all_products()
    return jsonify(products), 200

# Create Product (Protected Route)
@main.route('/products', methods=['POST'])
@login_required
def create_product():
    data = request.json
    Product.create_product(data)
    return jsonify({"message": "Product created successfully"}), 201

# Update Product (Protected Route)
@main.route('/products/<product_id>', methods=['PUT'])
@login_required
def update_product(product_id):
    data = request.json
    Product.update_product(product_id, data)
    return jsonify({"message": "Product updated successfully"}), 200

# Delete Product (Protected Route)
@main.route('/products/<product_id>', methods=['DELETE'])
@login_required
def delete_product(product_id):
    Product.delete_product(product_id)
    return jsonify({"message": "Product deleted successfully"}), 200

# Protected Route Example
@main.route('/protected', methods=['GET'])
@login_required
def protected_route():
    return jsonify({"message": "You are logged in and accessing a protected route"}), 200
