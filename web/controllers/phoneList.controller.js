// Phone controller
app.controller('PhoneController', ['$scope', '$http', '$routeParams', 'LoginService', function($scope, $http, $routeParams, LoginService){
	$scope.orderProp = 'age';
	console.log($routeParams.phoneId)
	$http.get('phones/phones.json').then(function(response) {
		$scope.phones = response.data;
	});

	// Logout user
	$scope.logoutUser = function(){
		LoginService.logout();
	}
}]);