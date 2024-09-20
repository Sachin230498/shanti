import jwt
from datetime import datetime, timedelta
from flask import request, jsonify
from .models import User
from functools import wraps
from . import app

# Generate JWT Token
def generate_token(user):
    token = jwt.encode({
        'user_id': user.id,
        'exp': datetime.utcnow() + timedelta(hours=24)  # Token valid for 24 hours
    }, app.config['SECRET_KEY'], algorithm='HS256')
    return token

def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None
        if 'Authorization' in request.headers:
            token = request.headers['Authorization'].split(" ")[1]  # Extract token
        
        if not token:
            return jsonify({'message': 'Token is missing!'}), 401

        try:
            data = jwt.decode(token, app.config['SECRET_KEY'], algorithms=['HS256'])
            current_user = User.get_user_by_id(data['user_id'])
            if not current_user:
                return jsonify({'message': 'User not found!'}), 401
        except jwt.ExpiredSignatureError:
            return jsonify({'message': 'Token has expired!'}), 401
        except jwt.InvalidTokenError:
            return jsonify({'message': 'Invalid token!'}), 401

        return f(current_user, *args, **kwargs)
    return decorated
