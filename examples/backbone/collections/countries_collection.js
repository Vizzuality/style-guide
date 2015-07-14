define([
  'underscore',
  'backbone'
], function(_, Backbone) {

  'use strict';

  var CountriesCollection = Backbone.Collection.extend({

    comparator: 'name',

    url: '/countries',

    parse: function(data) {
      return data.countries;
    },

    getNames: function() {
      return _.pluck(this.toJSON(), 'name');
    }

  });

});
