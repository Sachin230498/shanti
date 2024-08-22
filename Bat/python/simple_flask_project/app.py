# import all important pakages


from flask import Flask,render_template,request


#intialization the flask application

app = Flask(__name__)


# Routes

@app.route('/', methods=['GET'])
def home(): 
    return "hello"


@app.route('/about')
def about(): 
    return render_template("about.html")


    


if __name__ == '__main__':
    app.run(debug=True)



# crud  creat read update delete








