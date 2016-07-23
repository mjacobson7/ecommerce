angular.module('myApp')
  .controller('productCtrl', function($rootScope, $scope, $stateParams, $state, mainService) {


    $scope.getProduct = function() {
      mainService.viewProduct($stateParams.id).then(function(response) {
        $scope.product = response;
      });
    };

    $scope.getProduct();

    $scope.backToProducts = function() {
      $state.go('shop');
    };


    $scope.addToCart = function(productQuantity, productColor) {
      if($rootScope.user) {
        $state.go('cart');
        var myCart = {
          userId: $rootScope.user._id,
          productId: $scope.product._id,
          quantity: productQuantity,
          color: productColor
      };
      } else {
        $state.go('login');

    };
      mainService.addToCart(myCart).then(function(response) {

      });
    };




  }); //end
