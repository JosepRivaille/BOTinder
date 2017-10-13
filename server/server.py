import requests
import json

from flask import Flask

from headers import headers
from user import User

app = Flask(__name__)

fb_id = '{ your fb user id here }'
fb_auth_token = '{ your fb auth token here }'


@app.route('/')
def hello_world():
    return 'Say hello to the future, BOTinder is here!'


@app.route('/auth', methods=['POST'])
def auth_token():
    h = headers
    h.update({'content-type': 'application/json'})
    req = requests.post(
        'https://api.gotinder.com/auth',
        headers=h,
        data=json.dumps({'facebook_token': fb_auth_token, 'facebook_id': fb_id})
    )
    req.json().get('token', None)


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
