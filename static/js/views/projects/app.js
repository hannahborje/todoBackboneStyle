/**
 * Created by hannah on 8/26/14.
 */
var completed = true;

define([
  'jquery',
  'underscore',
  'backbone',
  'static/js/collections/todoCollection',
  'static/js/views/projects/todos',
  'text!templates/countTodos.html'
  ], function($, _, Backbone, TodoList, TodoView, countTodosTemplate){
  var AppView = Backbone.View.extend({

      // Bind to existing HTML
      el: $("#myTodoApp"),

      // Template for stats at the bottom
      countTodosTemplate: _.template(countTodosTemplate),

      events: {
          "click #addBtn": "addOneBtn",
          "click #markAllBtn" : "markAll"
      },

      // When a new model is created (in addOneBtn) it will init and bind
      initialize: function() {
          _.bindAll(this, 'addOne', 'addAll', 'render');

          this.input    = this.$("#inputTodo");

          TodoList.bind('add',     this.addOne);
          TodoList.bind('reset',   this.addAll);
          TodoList.bind('all',     this.render);

          // Load todos from localstorage
          TodoList.fetch();
      },

      // Refreshing the counting, rest of app not changing
      render: function() {
          var done = TodoList.done().length;
          this.$('#todoCount').html(this.countTodosTemplate({
              theRemains:  TodoList.theRemains().length
          }));
      },

      // Add todo to list by creating a view and append it to div
      addOne: function(todo) {
          var view = new TodoView({model: todo});
          this.$("#theTodos").append(view.render().el);
      },

      // Add all items in the todos collection
      addAll: function() {
          TodoList.each(this.addOne);
      },
      // Add attributes for a new todo
      newAttr: function() {
          return {
              content: this.input.val(),
              done:    false
          };
      },
      // Creates new model for todo item
      addOneBtn: function(e) {
      //    if(this.input.val() == '') return; //Trying to not have to have default attr
          TodoList.create(this.newAttr());
          this.input.val('');
      },
      // Mark all as completed
      markAll: function() {
           if (completed) {
              TodoList.each(function (todo) {
                  todo.save({
                      done: completed
                  });
              });
              completed = false;
          } else {
              TodoList.each(function (todo) {
                  todo.save({
                      done: ''
                  });
              });
              completed = true;
          }
      }
  });
    return AppView;
});
