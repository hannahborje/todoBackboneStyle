__author__ = 'hannah'
from flask import request, jsonify, render_template
from todoModel import TodoModel

import flask.views
import json

RETRIEVE_DEFAULT_NR = 5

# Render template for index.html
class TodoView(flask.views.MethodView):
    def get(self):
        return render_template('index.html')
