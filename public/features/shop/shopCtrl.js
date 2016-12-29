angular.module('myApp')
  .controller('shopCtrl', function($rootScope, $scope, mainService, $state) {


    $scope.getProducts = function() {
      mainService.getProducts().then(function(response) {
        for(var i = 0; i < response.length; i++) {
          if(response[i].title.length > 10) {
            var etc = "..."
             var newTitle = response[i].title.substring(0, 50);
             response[i].title = newTitle.concat(etc);
            $scope.data = response;
          }
        }
        $scope.data = response;
      });
    };

    $scope.getProducts();



    $scope.viewProduct = function(id) {
        $state.go('product', {id: id});
    };

  }); //end
