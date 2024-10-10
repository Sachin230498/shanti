from flask import Blueprint, render_template, request, redirect, url_for, session, flash
from flask import current_app  # Use current_app to access app context

crud_bp = Blueprint('crud', __name__)

@crud_bp.route('/')
def index():
    if 'username' not in session:
        return redirect(url_for('auth.login'))

    # Access mongo from current_app context
    mongo = current_app.config['MONGO_CLIENT']
    items = mongo.db.items.find()
    return render_template('index.html', items=items)

@crud_bp.route('/create', methods=['GET', 'POST'])
def create_item():
    if 'username' not in session:
        return redirect(url_for('auth.login'))

    if request.method == 'POST':
        title = request.form['title']

        # Access mongo from current_app context
        mongo = current_app.config['MONGO_CLIENT']
        mongo.db.items.insert_one({"title": title})

        flash('Item created successfully!')
        return redirect(url_for('crud.index'))
    return render_template('create.html')

@crud_bp.route('/update/<item_id>', methods=['GET', 'POST'])
def update_item(item_id):
    if 'username' not in session:
        return redirect(url_for('auth.login'))

    # Access mongo from current_app context
    mongo = current_app.config['MONGO_CLIENT']
    item = mongo.db.items.find_one({"_id": ObjectId(item_id)})

    if request.method == 'POST':
        new_title = request.form['title']
        mongo.db.items.update_one({"_id": ObjectId(item_id)}, {"$set": {"title": new_title}})
        flash('Item updated successfully!')
        return redirect(url_for('crud.index'))

    return render_template('update.html', item=item)

@crud_bp.route('/delete/<item_id>')
def delete_item(item_id):
    if 'username' not in session:
        return redirect(url_for('auth.login'))

    # Access mongo from current_app context
    mongo = current_app.config['MONGO_CLIENT']
    mongo.db.items.delete_one({"_id": ObjectId(item_id)})
    flash('Item deleted successfully!')
    return redirect(url_for('crud.index'))
