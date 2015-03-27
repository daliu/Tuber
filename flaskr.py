# all the imports
import sqlite3
from flask import Flask, request, g, redirect, render_template
from contextlib import closing


app = Flask(__name__)

@app.route('/')
@app.route('/index')
def front_page():
    return render_template('index.html')

@app.route('/about')
def about_page():
		return render_template('about.html')

# configuration
DATABASE = '/db/flaskr.db'
DEBUG = True
SECRET_KEY = 'secret'
USERNAME = 'admin'
PASSWORD = 'default'

def connect_db():
	return sqlite3.connect(app.config['DATABASE'])

def get_db():
    db = getattr(g, '_database', None)
    if db is None:
         db = g._database = sqlite3.connect(DATABASE)
    return db

@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()

if __name__ == '__main__':
	app.run()