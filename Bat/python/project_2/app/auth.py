from flask import Blueprint, render_template, url_for

auth = Blueprint('auth', __name__)


@auth.route('/signup')
def signup():
    return "<h1>Hello</h1>"


@auth.route('/login')
def login():
    return render_template('login.html')


@auth.route('/logout')
def logout():
    return "Use this to log out."
