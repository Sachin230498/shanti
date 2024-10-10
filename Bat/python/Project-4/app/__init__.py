from flask import Flask
from pymongo import MongoClient
from flask_bcrypt import Bcrypt

def create_app():
    # Specify the custom path for templates
    app = Flask(__name__, template_folder='custom_templates')  # Replace 'custom_templates' with your folder name
    app.config['SECRET_KEY'] = 'your_secret_key_here'
    app.config['MONGO_URI'] = 'mongodb://localhost:27017/flaskdb'

    # Initialize extensions
    app.config['MONGO_CLIENT'] = MongoClient(app.config['MONGO_URI'])
    app.config['BCRYPT'] = Bcrypt(app)

    # Register blueprints
    from app.auth import auth_bp
    from app.crud import crud_bp
    app.register_blueprint(auth_bp)
    app.register_blueprint(crud_bp)

    return app
