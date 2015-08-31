require.config({

  paths: {
    jquery: 'jquery_path/jquery',
    underscore: 'underscore_path/underscore',
    backbone: 'backbone_path/backbone',
    handlebars: 'handlebars_path/handlebars',
    text: 'text_plugin_path/text'
  },

  shim: {
    backbone: {
      deps: ['jquery', 'underscore']
    }
  }

});

require(['app'], function(App) {

  return new App().start();

});
