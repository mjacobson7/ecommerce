angular.module('myApp')
  .controller('productCtrl', function($rootScope, $scope, $stateParams, $state, mainService, alertify) {


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
        alertify.delay(5000).logPosition('bottom right').success('Item added successfully!');
        var myCart = {
          userId: $rootScope.user._id,
          productId: $scope.product._id,
          quantity: productQuantity,
          color: productColor
      };
      } else {
        alertify.delay(5000).logPosition('bottom right').error('You must first log in');

    };
      mainService.addToCart(myCart).then(function(response) {

      });
    };




  }); //end
