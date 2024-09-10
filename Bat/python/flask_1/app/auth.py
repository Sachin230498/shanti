from flask import Blueprint, render_template, request, redirect, url_for, session, flash
from werkzeug.security import generate_password_hash, check_password_hash
from .models import users_collection

auth = Blueprint('auth', __name__)

# Signup route
@auth.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        hashed_password = generate_password_hash(password)

        if users_collection.find_one({'username': username}):
            flash('Username already exists.')
            return redirect(url_for('auth.signup'))

        users_collection.insert_one({'username': username, 'password': hashed_password})
        flash('Signup successful! Please log in.')
        return redirect(url_for('auth.login'))

    return render_template('signup.html')

# Login route
@auth.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        user = users_collection.find_one({'username': username})

        if user and check_password_hash(user['password'], password):
            session['username'] = username
            flash('Login successful!')
            return redirect(url_for('main.index'))
        else:
            flash('Invalid credentials. Please try again.')
            return redirect(url_for('auth.login'))

    return render_template('login.html')

# Logout route
@auth.route('/logout')
def logout():
    session.pop('username', None)
    flash('You have been logged out.')
    return redirect(url_for('main.index'))
