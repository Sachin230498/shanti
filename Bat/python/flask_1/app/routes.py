from flask import Blueprint, render_template, request, redirect, url_for
from bson.objectid import ObjectId
from .models import books_collection

main = Blueprint('main', __name__)

# Home route - Read all books
@main.route('/')
def index():
    books = list(books_collection.find())
    return render_template('index.html', books=books)

# Add a new book - Create
@main.route('/add', methods=('GET', 'POST'))
def add():
    if request.method == 'POST':
        title = request.form['title']
        author = request.form['author']

        books_collection.insert_one({'title': title, 'author': author})
        return redirect(url_for('main.index'))

    return render_template('add.html')

# Update book - Update
@main.route('/edit/<book_id>', methods=('GET', 'POST'))
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
def delete(book_id):
    books_collection.delete_one({'_id': ObjectId(book_id)})
    return redirect(url_for('main.index'))
