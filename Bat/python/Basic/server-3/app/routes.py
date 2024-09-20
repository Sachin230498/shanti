from flask import Blueprint, request, jsonify
from .models import User, Product
from .auth import generate_token, token_required
from . import bcrypt

main = Blueprint('main', __name__)

# Signup API
@main.route('/signup', methods=['POST'])
def signup():
    data = request.json
    if User.get_user_by_email(data['email']):
        return jsonify({"error": "Email already exists"}), 400
    User.create_user(data)
    return jsonify({"message": "User created successfully"}), 201

# Login API (Returns Token)
@main.route('/login', methods=['POST'])
def login():
    data = request.json
    user = User.get_user_by_email(data['email'])
    if user and bcrypt.check_password_hash(user.password, data['password']):
        token = generate_token(user)
        return jsonify({'token': token}), 200
    return jsonify({"error": "Invalid credentials"}), 401

from bson import ObjectId

@main.route('/products', methods=['GET'])
@token_required
def get_products(current_user):
    products = Product.get_all_products()  # Assuming this returns a list of products
    # Convert ObjectId to string
    products_list = [{**product, "_id": str(product["_id"])} for product in products]

    return jsonify(products_list), 200
# bearer

# Create Product (Protected Route with JWT)
@main.route('/products', methods=['POST'])
@token_required
def create_product(current_user):
    data = request.json
    Product.create_product(data)
    return jsonify({"message": "Product created successfully"}), 201

# Update Product (Protected Route with JWT)
@main.route('/products/<product_id>', methods=['PUT'])
@token_required
def update_product(current_user, product_id):
    data = request.json
    Product.update_product(product_id, data)
    return jsonify({"message": "Product updated successfully"}), 200

# Delete Product (Protected Route with JWT)
@main.route('/products/<product_id>', methods=['DELETE'])
@token_required
def delete_product(current_user, product_id):
    Product.delete_product(product_id)
    return jsonify({"message": "Product deleted successfully"}), 200
