require.config({

  paths: {
    jquery: 'jquery_path/jquery',
    underscore: 'underscore_path/underscore',
    backbone: 'backbone_path/backbone',
    handlebars: 'handlebars_path/handlebars',
    text: 'text_plugin_path/text'
  }

  shim: {
    jquery: {
      exports: '$'
    },
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    },
    handlebars: {
      exports: 'Handlebars'
    }
  }

});

require(['app'], function(App) {

  return new App().start();

});
