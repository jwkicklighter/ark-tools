'use strict';

/**
 * @ngdoc function
 * @name arkToolsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the arkToolsApp
 */
angular.module('arkToolsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
