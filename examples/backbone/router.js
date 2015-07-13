define(['backbone'], function(Backbone) {

  'use strict';

  var Router = Backbone.Router.extend({

    routes: {
      '(/)': 'index',
      'countries(/)': 'countries',
      'countries/:iso': 'country'
    }

  });

  return Router;

});
