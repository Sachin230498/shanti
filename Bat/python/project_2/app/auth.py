from flask import Blueprint,render_template

auth  = Blueprint('auth', __name__)

# Blueprint is way that organize your file in flask project

@auth.route('/signup')
def signup():
    return render_template('signup.html')



@auth.route('/login')
def login():
    return render_template('login.html')