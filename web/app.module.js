var app = angular.module('phonecatApp', ['ngRoute']);

app.config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.
      when('/', {
        templateUrl: 'views/login.html', 
        controller: 'LoginController' 
      }).
      when('/phone', {
      	templateUrl: 'views/phone-list.html',
      	controller: 'PhoneController'
      })
    }]
);