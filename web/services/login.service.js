app.factory('LoginService', ['$location', function($location){
	return {
		login : function(loginData) {
			if(loginData.userId == 'admin' && loginData.password == 'admin') {
				console.log('Logged in Successfully.');
				$location.path('/phone');
			} else {
				$location.path('/');
			}
		},
		logout : function() {
			$location.path('/');
		}
	}

}]);
