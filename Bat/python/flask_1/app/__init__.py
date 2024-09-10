from flask import Flask
from .models import initialize_db

def create_app():
    app = Flask(__name__, template_folder='../templates')
    app.secret_key = 'your_secret_key'  # Required for session management

    # Initialize MongoDB connection
    initialize_db(app)

    # Import and register blueprints (routes)
    from .routes import main
    from .auth import auth

    app.register_blueprint(main)
    app.register_blueprint(auth, url_prefix='/auth')  # Register auth blueprint with a URL prefix

    return app
