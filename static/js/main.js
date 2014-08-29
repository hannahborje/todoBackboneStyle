/**
 * Created by hannah on 8/25/14.
 */

// Require.js main file, contains configuration and main entry

require.config({

    baseUrl: "/",

    paths: {
        jquery: 'static/js/libs/jquery/jquery',
        underscore: 'static/js/libs/underscore/underscore',
        backbone: 'static/js/libs/backbone/backbone',
        templates: '../templates',
        text:'../static/js/text'
    },
    shim: {
        'backbone': {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        }
    }
});
//Application bootstrap begins
require([
  // Load our app module and pass it to our definition function
  'static/js/views/projects/app'
], function(AppView){
  // The "app" dependency is passed in as "App"
  var app_view = new AppView;
});

