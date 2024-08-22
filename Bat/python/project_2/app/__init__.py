from flask import Flask
from .auth import auth as auth_blueprint
from .main import main as main_blueprint

def creat_app():
    app = Flask(__name__, template_folder="../templates")

 
    app.register_blueprint(auth_blueprint)
    app.register_blueprint(main_blueprint)


    
    

    return app


if __name__ == '__main__':
    app = creat_app()
    app.run(debug=True)