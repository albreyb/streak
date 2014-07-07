'use strict';

/**
 * @ngdoc function
 * @name streakApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the streakApp
 */
angular.module('streakApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
