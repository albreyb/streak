'use strict';

/**
 * @ngdoc function
 * @name streakApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the streakApp
 */
angular.module('streakApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
