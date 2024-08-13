from flask import Blueprint,render_template

auth  = Blueprint('auth', __name__)

# Blueprint is way that organize your file in flask project

@auth.route('/signup')
def signup():
    return "this is signed up page"



@auth.route('/login')
def login():
    return "this is login up page"