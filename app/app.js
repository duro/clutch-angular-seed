define(function(require, exports, module) {
  'use strict';

  // Load Dependencies
  var angular = require('angular')
    , _       = require('underscore');

  // Load Angular Modules
  require('templates');
  require('ui.router');

  // Define Application Module
  var app = module.exports.app = angular.module('<%= appName %>', [
    // Define dependencies
    'templates-app', 'ui.router'
  ])

  // Configure Application
  .config(function ($urlRouterProvider) {
    // Set default route
    $urlRouterProvider.otherwise( '/welcome' );
  })

  // Define globals on rootScope
  .run(function ($rootScope, $state, $stateParams) {

    // Mirror $state and $stateParams onto the rootScope
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;

  });

});
