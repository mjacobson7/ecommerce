angular.module('myApp')
  .directive('headerDirective', function() {
    return {
      restrict: 'E',
      templateUrl: './directives/header/header.html',
      scope: {},
      controller: function($scope, mainService, $state) {

        getUser = function() {
          mainService.getUser().then(function(response) {
            console.log("THIS IS THE RESPONSE ====> ", response);
            if(response) {
              $scope.validatedUser = true;
              $scope.user = response.data.name.toUpperCase();
              $scope.dataHasLoaded = true;
            } else {
              $scope.validatedUser = false;
              $scope.user = 'LOGIN | REGISTER';
              $scope.cart = 'cart';
              $scope.dataHasLoaded = true;
            }
          })
        }

        getUser();


      }
    };
  }); //end
