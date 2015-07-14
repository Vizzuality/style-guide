define([
  'backbone',
  'views/countries_list_view',
  'views/country_detail_view'
], function(Backbone, CountriesView, CountryDetailView) {

  'use strict';

  var App = Backbone.View.extend({

    el: 'body',

    initialize: function() {
      this.countriesView = new CountriesView({ el: '#countriesView' });
      this.detailView = new CountryDetailView({ el: '#detailView' });
      this.setListeners();
    },

    setListeners: function() {
      this.listenTo(this.countriesView, 'select:iso', this.showDetail);
    },

    showCountries: function() {
      this.countriesView.countries.fetch();
    },

    showDetail: function(iso) {
      this.detailView.country.setId(iso);
      this.detailView.country.fetch();
    },

    start: function() {
      Backbone.History.start({ pushState: false });
    }

  });

  return App;

});
