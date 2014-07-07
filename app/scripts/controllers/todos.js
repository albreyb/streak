var app = angular.module('streakApp');


app.controller('ToDosCtrl', function($scope){
  'use strict';
  $scope.random = 'are you running?';
  $scope.todo = {
    name: 'name',
    location: 'dummy data',
    time: 'time',
    done: false,
  };
  $scope.todos = [];

  $scope.addToDo = function(){
    $scope.todos.push('i');
  };

});