define([
  'backbone',
  'collections/countries_collection',
  'text!templates/countries_tpl.handlebars'
], function(Backbone, CountriesCollection, CountriesView) {

  'use strict';

  var CountriesView = Backbone.View.extend({

    initialize: function() {
      this.countries = new CountriesCollection();
      this.setListeners();
    },

    setListeners: function() {
      this.listenTo(this.countries, 'sync', this.render);
    },

    render: function() {
      var data = this.countries.toJSON();
      return this.$el.html(this.template(data)).el;
    }

  });

  return CountriesView;

});
