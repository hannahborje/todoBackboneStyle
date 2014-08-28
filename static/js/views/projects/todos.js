/**
 * Created by hannah on 8/25/14.
 */
console.log("views/projects/todos.js");

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
        "click .check" : "toggleDone"
    },

      initialize: function() {
          _.bindAll(this, 'render');
          this.model.bind('change', this.render); // Needs for checked/unchecked
          this.model.view = this;
      },

      // Re-render the contents of the todo item
      render: function() {
          $(this.el).html(this.template(this.model.toJSON()));
          this.setContent();
          return this;
      },
      // Sets content to singel todo item
      setContent: function() {
          var content = this.model.get('content');
          this.$('.todoContent').text(content);
          this.input = this.$('.inputTodo');
          this.input.bind('blur', this.close);
          this.input.val(content);
      },

      // Checks done in models/todo.js.
      toggleDone: function() {
          this.model.toggle();
      }
  });
    return TodoView;
});
