angular.module('myApp')
  .controller('cartCtrl', function($rootScope, $scope, mainService, $state) {

    var getUser = function() {
      mainService.getUser().then(function(response) {
        console.log("THIS IS THE RESPONSE ====> ", response);
        if(response) {
          var user = response.data;
          $scope.getCartItems(user);
        }
      })
    }

    getUser();

    $scope.getCartItems = function(user) {
      mainService.getCartItems(user._id).then(function(response) {
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

    $scope.finalizeOrder = function() {
      $state.go('demo');
      var id = $rootScope.user._id;
      mainService.emptyCart(id).then(function(response) {
        console.log(response);
      });
    }



  }); //end
