from flask import Blueprint, render_template, request, redirect, url_for
from .models import book_collection

main = Blueprint('main', __name__)

# Home route - Read all books
@main.route('/')
def index():
    books = list(book_collection.find())
    return render_template('index.html', books=books)

# Add a new book - Create
@main.route('/add', methods=('GET', 'POST'))
def add():
    if request.method == 'POST':
        title = request.form['title']
        author = request.form['author']

        book_collection.insert_one({'title': title, 'author': author})
        return redirect(url_for('main.index'))

    return render_template('add.html')






