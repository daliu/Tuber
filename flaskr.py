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

@app.route('/search')
def search_page():
    return render_template('search.html')

# Edit this
@app.route('/sign_up', methods=["POST"])
def sign_up():
    print(request.form)
    db_add_person(request.form['name'], request.form['cheep'])
    return render_template('sign_up.html')

@app.route('/user/<username>')
def show_user_profile(username):
    # show the user profile for that user
    return 'User %s' % username




#Data Manipulation
def db_read_people():
    cur = get_db().cursor();
    cur.execute("SELECT * FROM people")
    return cur.fetchall()

# Edit this
def db_add_person(name, people):
    cur = get_db().cursor()
    person = (name, people)
    cur.execute("INSERT INTO people VALUES (?, ?, ?)", person)
    get_db().commit()

# Check this
@app.route("/")
def print_people():
    people = db_read_people()
    print(people)
    return render_template('index.html', people=people)

# process people
@app.route("/api/people", methods=["POST"])
def receive_people():
    print(request.form)
    db_add_person(request.form['name'], request.form['people'])
    return redirect("/")


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