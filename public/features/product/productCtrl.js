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
      if(!$rootScope.user){
        alertify.delay(5000).logPosition('bottom right').error('You must first log in');
      } else if(!productQuantity) {
        alertify.delay(5000).logPosition('bottom right').error('Please select a quantity');
      } else if(!productColor) {
        alertify.delay(5000).logPosition('bottom right').error('Please select a color');
      } else {
        console.log(productQuantity);
        console.log(productColor);
        alertify.delay(5000).logPosition('bottom right').success('Item added successfully!');
        var myCart = {
          userId: $rootScope.user._id,
          productId: $scope.product._id,
          quantity: productQuantity,
          color: productColor
      };
      mainService.addToCart(myCart).then(function(response) {
        console.log(response);
      });
    };

    };




  }); //end
