from flask import Flask

def create_app():
    app = Flask(__name__)
    app.secret_key = 'your_secret_key_here'
    
    # Initialize MongoDB connection
    initialize_db(app)

    # Register authentication blueprint
    app.register_blueprint(auth)

    return app
