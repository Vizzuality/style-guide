define([
  'backbone',
  'handlebars',
  'collections/countries_collection',
  'text!templates/countries_tpl.handlebars'
], function(Backbone, Handlebars, CountriesCollection, countriesTpl) {

  'use strict';

  var CountriesView = Backbone.View.extend({

    template: Handlebars.compile(countriesTpl),

    initialize: function() {
      this.countries = new CountriesCollection();
      this.setListeners();
    },

    setListeners: function() {
      this.listenTo(this.countries, 'sync', this.render);
    },

    render: function() {
      var data = this.countries.toJSON();
      this.$el.html(this.template(data));
      return this
    }

  });

  return CountriesView;

});
