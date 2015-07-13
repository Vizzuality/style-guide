define([
  'backbone',
  'views/countries_view'
], function(Backbone, CountriesView) {

  'use strict';

  var App = Backbone.View.extend({

    el: 'body',

    initialize: function() {
      this.countriesView = new CountriesView({ el: '#countriesView' });
      this.countriesView.fetch();
    },

    start: function() {
      Backbone.History.start({ pushState: false });
    }

  });

  return new App().start();

});
