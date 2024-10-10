from flask import Blueprint, request, jsonify
from .models import User, Blog
from .auth import generate_token, token_required
from . import bcrypt
from bson import ObjectId

main = Blueprint('main', __name__)

@main.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    if(User.get_user_by_email(data['email'])):
        return jsonify({"message": "Email already exists"}), 400
    # hashed_password = bcrypt.generate_password_hash(data['password']).decode('utf-8')
    # user = User(data["email"],hashed_password)
    User.create_user(data)

    # user.save()
    return jsonify({"message": "User created successfully"}), 201
    # return jsonify(data)

# @main.route('/login', methods=['POST'])
# def login():
#     data = request.get_json()
#     user = User.get_user_by_email(data['email'])
#     # if user and bcrypt.check_password_hash(user.password, data['password']):
#     #     access_token = generate_token(user)
#     #     return jsonify({"access_token": access_token}), 200
#     # return jsonify({"error": "Invalid email or password"}), 401
#     return jsonify(User)

@main.route('/login', methods=['POST'])
def login():
    try:
        data = request.json
        print(data)  # Debugging line
        user = User.get_user_by_email(data['email'])
        if user and bcrypt.check_password_hash(user['password'], data['password']):
            token = generate_token(user)
            return jsonify({'token': token}), 200
        return jsonify({"error": "Invalid credentials"}), 401
    except Exception as e:
        print(f"Error during login: {e}")
        return jsonify({"error": "Something went wrong"}), 500
l

@main.route('/blogs', methods=['GET'])
@token_required
def get_blogs(current_user):
    blogs = Blog.get_all_blogs()
    blogs_list = [{**blog, "id": str(blog["_id"])} for blog in blogs]
    return jsonify(blogs_list), 200

@main.route('/blogs/<blog_id>', methods=['GET'])
@token_required
def get_blog(current_user, blog_id):
    blog = Blog.get_blog_by_id(blog_id)
    if not blog:
        return jsonify({"message": "Blog not found"}), 404
    blog['_id'] = str(blog['_id'])
    return jsonify(blog), 200

@main.route('/blogs', methods=['POST'])
@token_required
def create_blog(current_user):
    data = request.json
    Blog.create_blog(data)
    return jsonify({"message": "Blog created successfully"}), 201

@main.route('/blogs/<blog_id>', methods=['PUT'])
@token_required
def update_blog(current_user, blog_id):
    data = request.json
    Blog.update_blog(blog_id, data)
    return jsonify({"message": "Blog updated successfully"}), 200

@main.route('/blogs/<blog_id>', methods=['DELETE'])
@token_required
def delete_blog(current_user, blog_id):
    Blog.delete_blog(blog_id)
    return jsonify({"message": "Blog deleted successfully"}), 200