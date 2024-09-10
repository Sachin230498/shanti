from flask import Blueprint, render_template, request, redirect, url_for, session
from bson.objectid import ObjectId
from .models import books_collection

main = Blueprint('main', __name__)

@main.route('/')
def index():
    books = list(books_collection.find())
    return render_template('index.html', books=books)

@main.route('/add', methods=('GET', 'POST'))
def add():
    if 'username' not in session:
        return redirect(url_for('auth.login'))

    if request.method == 'POST':
        title = request.form['title']
        author = request.form['author']
        books_collection.insert_one({'title': title, 'author': author})
        return redirect(url_for('main.index'))

    return render_template('add.html')

@main.route('/edit/<book_id>', methods=('GET', 'POST'))
def edit(book_id):
    if 'username' not in session:
        return redirect(url_for('auth.login'))

    book = books_collection.find_one({'_id': ObjectId(book_id)})

    if request.method == 'POST':
        title = request.form['title']
        author = request.form['author']
        books_collection.update_one({'_id': ObjectId(book_id)}, {'$set': {'title': title, 'author': author}})
        return redirect(url_for('main.index'))

    return render_template('edit.html', book=book)

@main.route('/delete/<book_id>')
def delete(book_id):
    if 'username' not in session:
        return redirect(url_for('auth.login'))

    books_collection.delete_one({'_id': ObjectId(book_id)})
    return redirect(url_for('main.index'))
