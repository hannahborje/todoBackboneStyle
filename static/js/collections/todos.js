/**
 * Created by hannah on 8/26/14.
 */

console.log("collections/todos.js");
define([
  'underscore',
  'backbone',
  'js/libs/backbone/localstorage',
  'static/js/models/todo'
  ], function(_, Backbone, Store, Todo){

	var TodosCollection = Backbone.Collection.extend({

    model: Todo,

    // Save all of the todo items
    localStorage: new Store("todos"),

    // Filter down the list of all todo items that are finished.
    done: function() {
      return this.filter(function(todo){ return todo.get('done'); });
    },

    // Filter down the list to only todo items that are still not finished.
    remaining: function() {
      return this.without.apply(this, this.done());
    }
  });
  return new TodosCollection;
});
