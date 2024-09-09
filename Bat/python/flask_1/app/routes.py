from flask import Blueprint, render_template, request, redirect, url_for
from bson.objectid import ObjectId
from .models import books_collection, user_collection

main = Blueprint('main', __name__)
auth = Blueprint('auth', __name__)

# Home route - Read all books
@main.route('/')
@login_required
def index():
    books = list(books_collection.find())
    return render_template('index.html', books=books)

# Add a new book - Create
@main.route('/add', methods=('GET', 'POST'))
@login_required
def add():
    if request.method == 'POST':
        title = request.form['title']
        author = request.form['author']

        books_collection.insert_one({'title': title, 'author': author})
        return redirect(url_for('main.index'))

    return render_template('add.html')

# Update book - Update
@main.route('/edit/<book_id>', methods=('GET', 'POST'))
@login_required
def edit(book_id):
    book = books_collection.find_one({'_id': ObjectId(book_id)})

    if request.method == 'POST':
        title = request.form['title']
        author = request.form['author']

        books_collection.update_one({'_id': ObjectId(book_id)}, {'$set': {'title': title, 'author': author}})
        return redirect(url_for('main.index'))

    return render_template('edit.html', book=book)

# Delete book - Delete
@main.route('/delete/<book_id>')
@login_required
def delete(book_id):
    books_collection.delete_one({'_id': ObjectId(book_id)})
    return redirect(url_for('main.index'))

# Register route
@auth.route("/register", methods=["GET", "POST"])
def register():
    if request.method == "POST":
        email = request.form.get("email")
        password = request.form.get("password")

        # Create a new user
        hashed_password = generate_password_hash(password, method="sha256")
        user_collection.insert_one({"email": email, "password": hashed_password})

        flash("Registration successful")
        return redirect(url_for("auth.login"))

    return render_template("register.html")

# Login route
@auth.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        email = request.form.get("email")
        password = request.form.get("password")

        # Find user by email
        user = user_collection.find_one({"email": email})

        if not user or not check_password_hash(user["password"], password):
            flash("Please check your login details")
            return redirect(url_for("auth.login"))

        # Create a user instance
        user_obj = User(email=user["email"])
        login_user(user_obj)
        return redirect(url_for("main.index"))

    return render_template("login.html")