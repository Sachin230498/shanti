from flask import Flask
from flask_pymongo import PyMongo
from flask_bcrypt import Bcrypt
from flask_login import LoginManager

app = Flask(__name__)
app.config['MONGO_URI'] = 'mongodb://localhost:27017/mydatabase'
app.config['SECRET_KEY'] = 'mysecretkey'

mongo = PyMongo(app)
bcrypt = Bcrypt(app)
login_manager = LoginManager(app)
login_manager.login_view = 'login'  # Redirect to login if not authenticated

from .routes import main
app.register_blueprint(main)

# Load user from user_id in session
from .models import User
@login_manager.user_loader
def load_user(user_id):
    return User.get_user_by_id(user_id)
