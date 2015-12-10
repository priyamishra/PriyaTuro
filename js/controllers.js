/*
******************************
Application: Turo Car Rental
Created By: Priya Mishra
File: controllers.js
Last Updated: 12/09/2015
******************************
*/

//Create angular controller and pass in $scope and $http
var carControllers = angular.module('carControllers', []);

//Controller for Partial List
carControllers.controller('ListController',  ['$scope', '$http','userService', function($scope, $http, userService)
{
	$scope.formData = {};
	
	//function called to search the car 
	$scope.processForm = function() 
	{
		$http.get('http://pritesting.herokuapp.com/v1/search/car?apikey=ypyyvbexjrpae29qwtvt87uz&format=json&dest='+$scope.formData.dest+'&startdate='+$scope.formData.startdate+'&enddate='+$scope.formData.enddate+'&pickuptime='+$scope.formData.pickuptime+'&dropofftime='+$scope.formData.dropofftime).success(function(data) 
			{
			// sort Array of objects by their property CarTypeCode
			function compare(a,b) {
				if (a.CarTypeCode < b.CarTypeCode)
					return -1;
				if (a.CarTypeCode > b.CarTypeCode)
					return 1;
				return 0;
			}

			// Error Messages for Incorrect input
			console.log(data);
			if(! data.Result)
			{
				alert(data.Errors.Error.ErrorMessage);
			} else {

			$scope.Results = data.Result.sort(compare); // Stores Result data
			$scope.cars = data.MetaData.CarMetaData.CarTypes.sort(compare); // Stores CarMetaData
			
			//transforming string Daily Rate into Float Daily rate for sort by Price
			$scope.carOrder ='CarTypeName';
    		angular.forEach($scope.Results, function (rate) {
      		rate.DailyRate = parseFloat(rate.DailyRate)//.toFixed(2);
			console.log(rate.DailyRate);
    		  });
			
			userService.setALL(data);
			
			console.log("I see you");
			console.log(data);
		
			}
		})

		// Alert error if something is wrong outside the application
		.error(function(data, status) 
		{
  			alert(" Something went wrong, Please Reload and Try Again")
  			console.error('Repos error', status, data);
  		})
	}
}]);

//Controller for Partial Details
carControllers.controller('DetailsController', ['$scope', '$http','userService', '$routeParams', function($scope, $http,userService, $routeParams )
{
	
	$scope.whichItem = $routeParams.itemId;
	$scope.alll= userService.getALL();

	if(! $scope.alll.Result ){
		// Error Handling to replace with other code
		alert("Please go back to the search page");
	} else 
	{

		console.log("Is this really IT");
		console.log(userService.getALL());
		$scope.rz = $scope.alll.Result[$scope.whichItem]; // // Stores Result data
		$scope.crs = $scope.alll.MetaData.CarMetaData.CarTypes[$scope.whichItem]; // // Stores CarMetaData
		console.log($scope.crs);
		console.log($scope.rz);
	}
}]);


