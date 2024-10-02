from flask import Blueprint, render_template

home_route = Blueprint('home', __name__)

@home_route.route('/')
def login():

    return render_template('login.html')

@home_route.route('/Home')
def home():

    return render_template('index.html')

@home_route.route('/Users')
def users():

    return render_template('users.html')