from . import db

class UserModel(db.Model):
    id = db.Column(db.Integer, primary_key=True , unique=True),
    name = db.Column(db.String(80), unique=False, nullable=False),
    email = db.Column(db.String(120), unique=True, nullable=False),
    password = db.Column(db.String(120), unique=False, nullable=False)

