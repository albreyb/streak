'use strict';

angular
  .module('streakApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/todos.html',
        controller: 'ToDosCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
