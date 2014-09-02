/**
 * Created by hannah on 8/26/14.
 */
define(['underscore', 'backbone'], function(_, Backbone) {
    var TodoModel = Backbone.Model.extend({

        // Default attributes for the todo model
        defaults: {
            content: "Just empty",
            done: false
        },
        // Check that created todo has content - if not add default attr
        initialize: function() {
            if (!this.get("content")) {
                this.set({"content": this.defaults.content});
            }
        },
        // Saves change if checked or unchecked
        checkState: function() {
            this.save({done: !this.get("done")});
        }
    });
    return TodoModel;
});
