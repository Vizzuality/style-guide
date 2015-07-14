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
      this.clearView();
      this.countriesView.countries.fetch().done(function() {
        this.currentView = this.countriesView;
        this.render();
      }.bind(this));
    },

    showDetail: function(iso) {
      this.clearView();
      this.detailView.country.setCountry({ iso: iso });
      this.detailView.country.fetch().done(function() {
        this.currentView = this.detailView;
        this.render();
      }.bind(this));
    },

    clearView: function() {
      this.$el.html(null);
    },

    render: function() {
      this.$el.html(this.currentView.render().el);
    },

    start: function() {
      Backbone.History.start({ pushState: false });
    }

  });

  return App;

});
