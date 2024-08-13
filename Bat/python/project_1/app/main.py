from flask import Blueprint, render_template

main = Blueprint('main', __name__)


# Blueprint is way that organize your file in flask project



@main.route('/')
def index():
    return "hello world"


@main.route('/profile')
def profile():
    return "profile Here!"
