__author__ = 'hannah'
from flask import Flask, send_from_directory, url_for
import os

from todoView import TodoView

print("Todo.py: Creating routes")

app = Flask(__name__,static_folder='static', static_url_path='')

@app.route('/static/css/style.css')
def style():
    return send_from_directory(app.static_folder, 'css/style.css')

@app.route('/static/js/views/projects/app.js')
def theApp():
    return send_from_directory(app.static_folder, 'js/views/projects/app.js')

@app.route('/static/js/libs/require/require.js')
def req():
    return send_from_directory(app.static_folder, 'js/libs/require/require.js')

@app.route('/static/js/views/projects/todos.js')
def viewsTodo():
    return send_from_directory(app.static_folder, 'js/views/projects/todos.js')

@app.route('/static/js/libs/jquery/jquery.js')
def jquery():
    return send_from_directory(app.static_folder, 'js/libs/jquery/jquery.js')

@app.route('/static/js/libs/underscore/underscore.js')
def underscore():
    return send_from_directory(app.static_folder, 'js/libs/underscore/underscore.js')

@app.route('/static/js/libs/backbone/backbone.js')
def backbone():
    return send_from_directory(app.static_folder, 'js/libs/backbone/backbone.js')

@app.route('/static/js/models/todo.js')
def models():
    return send_from_directory(app.static_folder, 'js/models/todo.js')

@app.route('/static/js/collections/todoCollection.js')
def collections():
    return send_from_directory(app.static_folder, 'js/collections/todoCollection.js')

@app.route('/static/js/text.js')
def text():
    return send_from_directory(app.static_folder, 'js/text.js')

#This is what happens first in the application. The url http://127.0.0.1:5000 matches the / endpoint
app.add_url_rule('/', view_func=TodoView.as_view('todo_view'),
    methods=['GET'])

if __name__ == '__main__':
    app.run(debug=True)
