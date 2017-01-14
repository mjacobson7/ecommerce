angular.module('myApp')
  .controller('cartCtrl', function($scope, mainService, $state, alertify) {

    var getUser = function() {
      mainService.getUser().then(function(response) {
        if(response) {
          $scope.user = response.data;
          var user = response.data;
          $scope.getCartItems(user);
        } else {
          $scope.getCartItems();
        }
      })
    }

    getUser();

    $scope.getCartItems = function(user) {
      if($scope.user) {
        mainService.getCartItems(user._id).then(function(response) {
          $scope.products = response.data.cart;
          console.log(response.data.cart);

          var subTotal = 0;
          for(var i = 0; i < response.data.cart.length; i++) {
            subTotal = subTotal + response.data.cart[i].price;
          }
          console.log(subTotal);
          $scope.subtotal = subTotal;
        });
      } else {
        var noSessionCart = mainService.noSessionCart();
        $scope.products = noSessionCart;
        var subtotal = mainService.getSubtotal();
        $scope.subtotal = subtotal;
        var tax = mainService.getTax(subtotal);
        $scope.tax = tax;
        var total = mainService.getTotal(subtotal, tax);
        $scope.total = total;

      }
    };

    $scope.finalizeOrder = function() {
      if($scope.products < 1) {
        alertify.delay(5000).logPosition('bottom right').error('Please add a product to your cart!');
      } else {
        if($scope.user) {
          // $state.go('demo');
          var id = $scope.user._id;
          mainService.emptyCart(id);
        } else {
          $scope.products.length = 0;
          $scope.subtotal = 0;
          $scope.tax = 0;
          $scope.total = 0;
          // $state.go('demo');
        }

      }

    }

    $scope.deleteItem = function(index) {
      $scope.products.splice(index,1);

    }



  }); //end
