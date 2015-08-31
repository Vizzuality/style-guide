define(['backbone'], function(Backbone) {

  'use strict';

  var CountryModel = Backbone.Model.extend({

    idAttribute: 'iso',

    defaults: {
      iso: 'ESP'
    },

    urlRoot: '/countries/',

    setId: function(id) {
      this.id = id;
    },

    validate: function(attrs) {
      var errors = [];
      if (typeof attrs.id !== 'string') {
        errors.push('id attribute must be a string');
      }
      if (errors.length) {
        return errors;
      }
    }

  });

  return CountryModel;

});
