<<<<<<< HEAD
/*
******************************
Application: Turo Car Rental
Created By: Priya Mishra
File: app.js
Last Updated: 12/09/2015
******************************
*/

// define Angular Module/App
var carApp = angular.module('carApp', [
	'ngRoute',
	'carControllers'
	]);

// define the partials
carApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.
	when('/list', {
		templateUrl: 'partials/list.html',
		controller: 'ListController'
	}). // List Partial contains the Car Search form and list of the cars searched


	when('/details/:itemId', {
		templateUrl: 'partials/details.html',
		controller: 'DetailsController'
	}). // Details Partial contains the detail of the car listed

	otherwise({
		redirectTo: '/list'

	});


}]);

//Create a Service to store all the JSON Data and share code across the app
carApp.service('userService', function() {
  
  var property = 'First';
  var all = {};
  
        return {
            getALL: function () {
                return all;
            },
            setALL: function(value) {
                all = value;
            }
        };
=======
/*
******************************
Application: Turo Car Rental
Created By: Priya Mishra
File: app.js
Last Updated: 12/09/2015
******************************
*/

// define Angular Module/App
var carApp = angular.module('carApp', [
	'ngRoute',
	'carControllers'
	]);

// define the partials
carApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.
	when('/list', {
		templateUrl: 'partials/list.html',
		controller: 'ListController'
	}). // List Partial contains the Car Search form and list of the cars searched


	when('/details/:itemId', {
		templateUrl: 'partials/details.html',
		controller: 'DetailsController'
	}). // Details Partial contains the detail of the car listed

	otherwise({
		redirectTo: '/list'

	});


}]);

//Create a Service to store all the JSON Data and share code across the app
carApp.service('userService', function() {
  
  var property = 'First';
  var all = {};
  
        return {
            getALL: function () {
                return all;
            },
            setALL: function(value) {
                all = value;
            }
        };
>>>>>>> origin/master
  });