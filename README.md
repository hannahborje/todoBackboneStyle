Author: Hannah Börjesson, 2014 Linköping

This is a Todo Application created with a little help from Backbone js, Require js, Flask, Jinja2, Python, HTML, CSS and Bootstrap.

*** You need:

- Linux/UNIX like operating system
- Python 2.7
- virtualenv (for Python 2.7)

There is a setup file that will help you to:

- create a virtualenv folder
- install the Python dependencies

*** To run the setup file:

    ./setup.sh

*** To run the application:

1. Run the setup file (you only need to do this the first time)

2. Open a terminal window and write 

    .  venv/bin/activate

(yes, there is a space between the dot (.) and venv...)

3. and then

    python todo.py

This will start the server application. Now you can go to http://127.0.0.1:5000
and for the best view of the application, please run it in Chrome


*** When you are getting tired of the Todo Application (how can you ever?) you stop it by:

In terminal window

    use Ctrl-C.

To get out of the virtualenv, write:

    deactivate

*** The application flows like this:

We fire it up in the todo.py-file where the url http://127.0.0.1:5000 matches the / endpoint. We then moves on to todoView.py and class TodoView that render the template for index.html. Index.html extends layout.html where for require.js and its data-main main.js is loaded. In main.js the paths for require.js is created and the app module is loaded and passed to the definition function in views/projects/app.js. 

Adding a todo what a flow! 
As soon as the user clicks enter or hit the add todo-button the AppView (who has patiently been waiting for the event) makes a function call to addOneBtn where a new model for the todo is created. When it is created it is initialized and it binds to addOne, addAll and render. AddOne adds the todo to the list by creating a view and appending it to the div (#theTodos). AddAll adds the todos in the todos collection. 

What are you - Backbone js?
Backbone is a small library for Javascript. It is designed to make your code easier to maintain and to improve the user experience by creating single page applications. 

The MVC (Model-view-controller) looks a little bit like this in Backbone: 
view -> controller -> model, where the view listens to changes made in the model.

Read more on www.backbonetutorials.com

