from flask import Flask
from flask_pymongo import PyMongo
from flask_bcrypt import Bcrypt

app = Flask(__name__)
app.config['MONGO_URI'] = 'mongodb://localhost:27017/mydatabase'
app.config['SECRET_KEY'] = 'mysecretkey'  # Secret key for JWT

mongo = PyMongo(app)
bcrypt = Bcrypt(app)

from .routes import main
app.register_blueprint(main)
