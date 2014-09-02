/**
 * Created by hannah on 8/25/14.
 */

define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/todos.html'
  ], function($, _, Backbone, todoTemplate){
  var TodoView = Backbone.View.extend({

     tagName:  "div",

    // Cache the template function for a single item.
    template: _.template(todoTemplate),

    // Events to a specific todo
    events: {
        "click .check" : "done"
    },

      initialize: function() {
          _.bindAll(this, 'render');
          this.model.bind('change', this.render); // Needs for checked/unchecked
          this.model.view = this;
      },

      // Re-render the contents of the todo item
      render: function() {
          $(this.el).html(this.template(this.model.toJSON()));
          this.addContent();
          return this;
      },
      // Adds content to singel todo item
      addContent: function() {
          var text = this.model.get('content');
          this.$('.todoContent').text(text);
          this.input = this.$('.inputTodo');
          this.input.val(text);
      },

      // Checks done state in models/todo.js.
      done: function() {
          this.model.checkState();
      }
  });
    return TodoView;
});
