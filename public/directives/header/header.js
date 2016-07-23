angular.module('myApp')
  .directive('headerDirective', function() {
    return {
      restrict: 'E',
      templateUrl: './directives/header/header.html',
      scope: {},
      controller: function($rootScope, $scope, $state) {

        $scope.checkUser2 = function() {
          if(!$rootScope.user) {
            $scope.cart = 'login';
          } else {
            $scope.cart = 'cart';
          };
        };

        $scope.checkUser2();

        $scope.checkUser = function() {
          if($rootScope.user) {
            $scope.user = $rootScope.user.name.toUpperCase();
            $scope.redirect = 'profile';
          } else {
            $scope.user = 'LOGIN | REGISTER';
            $scope.redirect = 'login';
          }
        };
        $scope.checkUser();

      }
    };
  }); //end
