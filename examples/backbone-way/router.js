define(['backbone'], function(Backbone) {

  'use strict';

  var Router = Backbone.Router.extend({

    routes: {
      '(/)': 'index',
      'countries(/)': 'countries',
      'countries/:iso': 'country'
    },

    index: function() {
      this.navigate('countries', { trigger: true });
    }

  });

  return Router;

});
