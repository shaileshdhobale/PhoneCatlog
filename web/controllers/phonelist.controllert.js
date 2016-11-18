app.controller('PhoneController', function($scope, $http){

      $scope.orderProp = 'age';
      $http.get('phones/phones.json').then(function(response) {
        $scope.phones = response.data;
      });
});