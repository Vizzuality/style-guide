define([
  'backbone',
  'handlebars',
  'models/country_model',
  'text!templates/detail_tpl.handlebars'
], function(Backbone, Handlebars, CountryModel, detailTpl) {

  'use strict';

  var CountriesView = Backbone.View.extend({

    template: Handlebars.compile(detailTpl),

    initialize: function() {
      this.setListeners();
    },

    setCountry: function(settings) {
      this.country = new CountryModel(settings);
    },

    setListeners: function() {
      this.listenTo(this.country, 'sync', this.render);
    },

    render: function() {
      var data = this.country.attributes;
      this.$el.html(this.template(data));
      return this;
    }

  });

  return CountriesView;

});
