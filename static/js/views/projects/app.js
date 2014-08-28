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

      // Bind to existing HTML
      el: $("#todoapp"),

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

          Todos.bind('add',     this.addOne);
          Todos.bind('reset',   this.addAll);
          Todos.bind('all',     this.render);
          // Loading todos from localstorage
          Todos.fetch();
      },

      // Refreshing the stats, rest of app not changing
      render: function() {
          var done = Todos.done().length;
          this.$('#todoStats').html(this.statsTemplate({
              total:      Todos.length,
              done:       Todos.done().length,
              remaining:  Todos.remaining().length
          }));
      },

      // Add todo to list by creating a view and append it to div
      addOne: function(todo) {
          var view = new TodoView({model: todo});
          this.$("#theTodos").append(view.render().el);
      },

      // Add all items in the todos collection
      addAll: function() {
          Todos.each(this.addOne);
      },
      // Add attributes for a new todo
      newAttributes: function() {
          return {
              content: this.input.val(),
              order:   Todos.nextOrder(),
              done:    false
          };
      },
      // Creates new model for todo item
      addOneBtn: function(e) {
          Todos.create(this.newAttributes());
          this.input.val('');
      },
      // Mark all as completed
      markAll: function() {
          var completed = 'true';
          Todos.each(function (todo) {
              todo.save({
                  done: completed
              });
          });
      }
  });
    return AppView;
});
