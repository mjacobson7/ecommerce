angular.module('myApp')
  .controller('shopCtrl', function($rootScope, $scope, mainService, $state) {

    $scope.getProducts = function() {
      mainService.getProducts().then(function(response) {
        $scope.data = response;
      });
    };

    $scope.getProducts();



    $scope.viewProduct = function(id) {
        $state.go('product', {id: id});
    };

  }); //end
