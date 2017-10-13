from flask import Flask

app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'Say hello to the future, BOTinder is here!'

