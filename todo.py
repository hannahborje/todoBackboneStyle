__author__ = 'hannah'
from flask import Flask, send_from_directory, url_for
import os

from todoView import TodoView, TodoAdd, TodoRetrieve, TodoAddValue

print("Todo.py: Creating routes")

app = Flask(__name__,static_folder='static', static_url_path='')

@app.route('/static/css/style.css')
def style():
    return send_from_directory(app.static_folder, 'css/style.css')

@app.route('/static/js/libs/require/require.js')
def req():
    return send_from_directory(app.static_folder, 'js/libs/require/require.js')

@app.route('/static/js/app.js')
def theApp():
    return send_from_directory(app.static_folder, 'js/app.js')

@app.route('/static/js/libs/jquery/jquery.js')
def jquery():
    return send_from_directory(app.static_folder, 'js/libs/jquery/jquery.js')

@app.route('/static/js/libs/underscore/underscore.js')
def underscore():
    return send_from_directory(app.static_folder, 'js/libs/underscore/underscore.js')

@app.route('/static/js/libs/backbone/backbone.js')
def backbone():
    return send_from_directory(app.static_folder, 'js/libs/backbone/backbone.js')

@app.route('/static/js/router.js')
def router():
    return send_from_directory(app.static_folder, 'js/router.js')

@app.route('/static/js/collections/projects.js')
def collProj():
    return send_from_directory(app.static_folder, 'js/collections/projects.js')

@app.route('/static/js/text.js')
def text():
    return send_from_directory(app.static_folder, 'js/text.js')

@app.route('/static/js/models/projects.js')
def models():
    return send_from_directory(app.static_folder, 'js/models/projects.js')



@app.route('/js/todo.js')
def main():
    return send_from_directory(app.static_folder, 'todo.js')


#This is what happens first in the application. The url http://127.0.0.1:5000 matches the / endpoint
app.add_url_rule('/', view_func=TodoView.as_view('todo_view'),
    methods=['GET'])

app.add_url_rule('/todoAdd', view_func=TodoAdd.as_view('todo_add'),
    methods=['POST'])

app.add_url_rule('/addValue', view_func=TodoAddValue.as_view('todo_add_value'),
    methods=['POST'])

app.add_url_rule('/todoRetrieve/<int:n>',
    view_func=TodoRetrieve.as_view('todo_retrieve'), methods=['GET'])


if __name__ == '__main__':
    app.run(debug=True)
