
var app = angular.module('phonecatApp', ['ngRoute']);

app.config(['$locationProvider' ,'$routeProvider',
  function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.
    when('/login', {
      templateUrl: 'views/login.html', 
      controller: 'LoginController' 
    }).
    when('/phone', {
    	templateUrl: 'views/phone-list.html',
    	controller: 'PhoneController'
    }).
    when('/phone/:phoneId', {
      templateUrl: 'views/phone-details.html',
      controller: 'PhoneDetailsController'
    }).
    when('/', {
      templateUrl: 'views/login.html', 
      controller: 'LoginController' 
    });
  }]
);