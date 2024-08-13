from  flask import Blueprint,render_template

auth = Blueprint('auth', __name__)

@auth.route('/signup')
def signup():
    return "this page will be used to sign up"


@auth.route('/login')
def login():
    return "this page will be used to login"

@auth.route('/logout')
def logout():
    return "this page will be used to logout"