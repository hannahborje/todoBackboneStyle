/**
 * Created by hannah on 8/26/14.
 */
var completed = true;

define([
  'jquery',
  'underscore',
  'backbone',
  'static/js/collections/todos',
  'static/js/views/projects/todos',
  'text!templates/stats.html'
  ], function($, _, Backbone, TodoList, TodoView, statsTemplate){
  var AppView = Backbone.View.extend({

      // Bind to existing HTML
      el: $("#myTodoApp"),

      // Template for stats at the bottom
      statsTemplate: _.template(statsTemplate),

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
          // Loading todos from localstorage
          TodoList.fetch();
      },

      // Refreshing the stats, rest of app not changing
      render: function() {
          var done = TodoList.done().length;
          this.$('#todoStats').html(this.statsTemplate({
              total:      TodoList.length,
              done:       TodoList.done().length,
              remaining:  TodoList.theRemains().length
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
          if(this.input.val() == '') return; //Trying to not have to have default attr
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
