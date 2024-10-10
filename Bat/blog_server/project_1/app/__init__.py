from flask import Flask
from flask_pymongo import PyMongo
from flask_bcrypt import Bcrypt
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

app.config['MONGO_URI']='mongodb://localhost:27017/mydatabase2'
app.config['SECRET_KEY']='this_is_secret'

mongo = PyMongo(app)
bcrypt = Bcrypt(app)

from .routes import main
app.register_blueprint(main)