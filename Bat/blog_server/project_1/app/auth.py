import jwt
from datetime import datetime, timedelta
from flask import request, jsonify
from .models import User
from functools import wraps
from . import app


def generate_token(user_id):
    try:
        token = jwt.encode({
            'user_id': user_id,
            'exp': datetime.utcnow() + timedelta(hours=24)
        }, app.config['SECRET_KEY'], algorithm='HS256')
        return token
    except Exception as e:
        return jsonify({"error": str(e)}), 500


def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None

        if 'Authorization' in request.headers:
            try:
                token = request.headers['Authorization'].split(" ")[1]
            except IndexError:
                return jsonify({'message': 'Bearer token malformed!'}), 401

        if not token:
            return jsonify({'message': 'Token is missing!'}), 401

        try:
            jwt_data = jwt.decode(token, app.config['SECRET_KEY'], algorithms=['HS256'])
            current_user = User.get_by_id(jwt_data['user_id'])
            if not current_user:
                return jsonify({'message': 'User not found!'}), 401

        except jwt.ExpiredSignatureError:
            return jsonify({'message': 'Token has expired!'}), 401
        except jwt.InvalidTokenError:
            return jsonify({'message': 'Invalid token!'}), 401
        except Exception as e:
            return jsonify({'message': f"An error occurred: {str(e)}"}), 500

        return f(current_user, *args, **kwargs)
    return decorated