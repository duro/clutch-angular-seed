require.config({
  paths: {
    'almond'              : '../vendor/almond/almond',
    'angular'             : '../vendor/angular/angular',
    'jquery'              : '../vendor/jquery/jquery',
    'underscore'          : '../vendor/lodash/dist/lodash.underscore',
    'ui.router'           : '../vendor/angular-ui-router/release/angular-ui-router',
  },
  baseUrl: 'app',
  shim: {
    'jquery'          : {exports  : 'jQuery'},
    'angular'         : {exports  : 'angular', deps : ['jquery']},
    'ui.router'       : ['angular']
  },
  priority: [
    "angular"
  ]
});
