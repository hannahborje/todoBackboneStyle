/**
 * Created by hannah on 8/26/14.
 */

define([
    'underscore',
    'backbone',
    'js/libs/backbone/localstorage',
    'static/js/models/todo'
], function(_, Backbone, Store, Todo){

    var TodoCollection = Backbone.Collection.extend({

        // Reference to Todo collection model
        model: Todo,

        localStorage: new Store("whatToDo"),

        // Check if done
        done: function() {
        return this.filter(function(todo){ return todo.get('done'); });
        },
        // Check who is left
        theRemains: function() {
            return this.without.apply(this, this.done());
        }
    });
    return new TodoCollection;
});
