app.controller('LoginController', ['$scope', 'LoginService', function($scope, LoginService) {
	$scope.authenticateUser = function(){
   		console.log($scope.loginData)
        LoginService.login($scope.loginData);
	}
}]);