from flask import Blueprint,render_template,url_for

main  = Blueprint('main', __name__)

# Blueprint is way that organize your file in flask project

@main.route('/')
def index():
    return render_template("index.html")



@main.route('/profile')
def login():
    return render_template("navbar.html")