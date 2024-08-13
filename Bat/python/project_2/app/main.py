from flask import Blueprint,render_template

main  = Blueprint('main', __name__)

# Blueprint is way that organize your file in flask project

@main.route('/')
def index():
    return "this is homepage"



@main.route('/profile')
def login():
    return "this is profile page"