from flask import Flask
from .models import initialize_db

def create_app():
    app = Flask(__name__, template_folder='../templates')

    # Initialize MongoDB connection
    initialize_db(app)

    # Import and register blueprints (routes)
    from .routes import main, auth
    app.register_blueprint(main)
    app.register_blueprint(auth)

    return app