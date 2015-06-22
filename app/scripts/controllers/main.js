'use strict';

/**
 * @ngdoc function
 * @name arkToolsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the arkToolsApp
 */
angular.module('arkToolsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
