angular.module('myApp')
  .controller('productCtrl', function($scope, $stateParams, $state, mainService, alertify) {

    var getUser = function() {
      mainService.getUser().then(function(response) {
        if(response) {
          $scope.user = response.data;
        }
      })
    }

    getUser();

    $scope.addToCart = function() {
      alertify.delay(5000).logPosition('bottom right').success('Item added successfully!');
      if($scope.user) {
        var myCart = {
          userId: $scope.user._id,
          productId: $scope.product._id,
          quantity: $scope.quantity,
        };
        mainService.addToCart(myCart).then(function(response) {
          console.log(response);
        });
      } else {

        var cartStorage = mainService.noSessionCart($scope.product);
        console.log(cartStorage);
      }
      };


    $scope.getProduct = function() {
      mainService.viewProduct($stateParams.id).then(function(response) {
        $scope.product = response;
      });
    };

    $scope.getProduct();

    $scope.backToProducts = function() {
      $state.go('shop');
    };






  }); //end
