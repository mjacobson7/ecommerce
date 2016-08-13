angular.module('myApp')
  .controller('cartCtrl', function($rootScope, $scope, mainService, $state) {

    $scope.getCartItems = function() {
      var id = $rootScope.user._id
      mainService.getCartItems(id).then(function(response) {
        $scope.products = response.data.cart;
        console.log(response.data.cart);
          $state.go('cart');
          var subTotal = 0;
          for(var i = 0; i < response.data.cart.length; i++) {
            subTotal = subTotal + response.data.cart[i].price;
          }
          console.log(subTotal);
          $scope.subtotal = subTotal;
      });
    };

    $scope.getCartItems();

    $scope.finalizeOrder = function() {
      $state.go('demo');
      var id = $rootScope.user._id;
      mainService.emptyCart(id).then(function(response) {
        console.log(response);
      });
    }



  }); //end
