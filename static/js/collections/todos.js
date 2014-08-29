/**
 * Created by hannah on 8/26/14.
 */

define([
    'underscore',
    'backbone',
    'js/libs/backbone/localstorage',
    'static/js/models/todo'
], function(_, Backbone, Store, Todo){

    var TodosCollection = Backbone.Collection.extend({

        // Reference to todo collection model
        model: Todo,

        localStorage: new Store("todos"),

        // Check if done
        done: function() {
        return this.filter(function(todo){ return todo.get('done'); });
        },
        // Check not done
        remaining: function() {
            return this.without.apply(this, this.done());
        },
        // Create some order
        nextOrder: function() {
            if (!this.length) return 1;
            return this.last().get('order') + 1;
        },
        // Todos are sorted by their original insertion order
        comparator: function(todo) {
            return todo.get('order');
        }
    });
    return new TodosCollection;
});
