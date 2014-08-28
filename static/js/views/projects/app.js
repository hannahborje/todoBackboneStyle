/**
 * Created by hannah on 8/26/14.
 */

console.log("Views/projects/app.js");
define([
  'jquery',
  'underscore',
  'backbone',
  'static/js/collections/todos',
  'static/js/views/projects/todos',
  'text!templates/stats.html'
  ], function($, _, Backbone, Todos, TodoView, statsTemplate){
  var AppView = Backbone.View.extend({

    el: $("#todoapp"),

    statsTemplate: _.template(statsTemplate),

    events: {
        "click #addBtn": "add",
      "keypress #new-todo":  "createOnEnter"
    },

   
    initialize: function() {
      _.bindAll(this, 'addOne', 'add', 'render');

      this.input    = this.$("#new-todo");

      Todos.bind('add',     this.addOne);
      Todos.bind('all',     this.render);

      Todos.fetch();
    },

    // Re-rendering the App just means refreshing the statistics -- the rest
    // of the app doesn't change.
    render: function() {
        console.log("views/app.js: render function");
      var done = Todos.done().length;
      this.$('#todo-stats').html(this.statsTemplate({
        total:      Todos.length,
        done:       Todos.done().length,
        remaining:  Todos.remaining().length
      }));
    },

    addOne: function(todo) {
        console.log("views/app.js: addOne function");
        var view = new TodoView({model: todo});
        this.$("#todo-list").append(view.render().el);
    },

      add: function(e) {
          console.log("views/app.js: add function");
          e.preventDefault();
        console.log('YOLO');
          return this;
      }

  });
  return AppView;
});
