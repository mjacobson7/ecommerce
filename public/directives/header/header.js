angular.module('myApp')
  .directive('headerDirective', function() {
    return {
      restrict: 'E',
      templateUrl: './directives/header/header.html',
      scope: {},
      controller: function($scope, mainService, $state) {

        $scope.getUser = function() {
          mainService.getUser().then(function(response) {
            console.log("THIS IS THE RESPONSE ====> ", response);
            if(response) {
              $state.go('profile');
            } else {
              $state.go('login');
            }
          })
        }

      }
    };
  }); //end
