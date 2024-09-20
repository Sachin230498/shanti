from flask_login import current_user, login_user, logout_user
from .models import User
from . import bcrypt

# Login Function
def login_user_function(data):
    user = User.get_user_by_email(data['email'])
    if user and bcrypt.check_password_hash(user.password, data['password']):
        login_user(user)
        return True
    return False

# Logout Function
def logout_current_user():
    logout_user()
