import requests
import json

from flask import Flask
from flask import Response
from flask import request

from headers import headers
from user import User

app = Flask(__name__)

fb_id = '100005624716711'
fb_auth_token = '464891386855067'


@app.route('/')
def hello_world():
    return 'Say hello to the future, BOTinder is here!'


@app.route('/auth', methods=['POST'])
def auth_token():
    h = headers
    h.update({'content-type': 'application/json'})
    response = requests.post(
        'https://api.gotinder.com/auth',
        headers=h,
        data=json.dumps({
            'facebook_token': fb_auth_token,
            'facebook_id': fb_id
        })
    )
    payload = response.json()
    print(payload)
    status_code = payload['code']
    data = payload.get('data', 'error')
    return Response(data, status=status_code)


@app.route('/recommendations')
def recommendations(token):
    h = headers
    h.update({'X-Auth-Token': token})
    response = requests.get('https://api.gotinder.com/user/recs', headers=h)

    if response.status_code == 401 or response.status_code == 504:
        raise Exception('Invalid code')

    if 'results' not in response.json():
        return response.json()

    return {
        User(user) for user in response
    }


@app.route('/train', methods=['GET', 'POST'])
def train():
    if request.method == 'GET':
        get_train_data()
    elif request.method == 'POST':
        add_train_data()


def get_train_data():
    pass


def add_train_data():
    pass
