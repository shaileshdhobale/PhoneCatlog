app.controller('PhoneDetailsController', ['$scope', '$http', '$routeParams', function PhoneDetailController($scope, $http, $routeParams) {
	$http.get('phones/' + $routeParams.phoneId + '.json').then(function(response) {
		$scope.phone = response.data;
	});
}]);