from flask import Blueprint, render_template, request, redirect, url_for, flash, session
from werkzeug.security import generate_password_hash, check_password_hash
from flask import current_app  # Use current_app to access app context

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']

        # Use current_app to access bcrypt and mongo
        mongo = current_app.config['MONGO_CLIENT']
        bcrypt = current_app.config['BCRYPT']

        # Check if user exists
        user = mongo.db.users.find_one({"username": username})
        if user:
            flash('Username already exists!')
            return redirect(url_for('auth.signup'))

        # Create new user
        hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
        mongo.db.users.insert_one({"username": username, "password": hashed_password})

        flash('Registration successful! Please login.')
        return redirect(url_for('auth.login'))
    return render_template('signup.html')

@auth_bp.route('/login', methods=['GET', 'POST'])
def login():
    print("Entered the login route")
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        print(f"Email: {email}, Password: {password}")
        # Additional logic
        return redirect(url_for('crud.index'))

    return render_template('login.html')


   
@auth_bp.route('/logout')
def logout():
    session.pop('username', None)
    flash('You have been logged out.')
    return redirect(url_for('auth.login'))
