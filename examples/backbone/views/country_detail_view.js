define([
  'backbone',
  'handlebars',
  'models/country_model',
  'text!templates/detail_tpl.handlebars'
], function(Backbone, Handlebars, CountryModel, detailTpl) {

  'use strict';

  var CountriesView = Backbone.View.extend({

    template: Handlebars.compile(detailTpl),

    initialize: function(settings) {
      this.country = new CountryModel(settings.id);
      this.setListeners();
    },

    setListeners: function() {
      this.listenTo(this.country, 'sync', this.render);
    },

    render: function() {
      var data = this.country.attributes;
      return this.$el.html(this.template(data)).el;
    }

  });

  return CountriesView;

});
