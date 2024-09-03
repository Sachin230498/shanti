from flask import Flask
from .models import initialize_db

def create_app():
    app = Flask(__name__, template_folder='../templates')
    

    initialize_db(app)

   
    from .routes import main
    app.register_blueprint(main)

    return app
