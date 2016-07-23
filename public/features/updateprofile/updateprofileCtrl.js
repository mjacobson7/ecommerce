angular.module('myApp')
  .controller('updateprofileCtrl', function($rootScope, $scope, $state, mainService) {

    $scope.user = $rootScope.user;

    $scope.cancel = function() {
      $state.go('profile');
    };

    $scope.updateProfile = function(name, email, password1, password2, id) {
        if(password1 === password2) {
          var profileUpdated = {
            id: id,
            name: name,
            email: email,
            password: password1
          };
          mainService.updateProfile(profileUpdated).then(function(response) {
            $scope.email = '';
            $scope.name = '';
            $scope.password1 = '';
            $scope.password2 = '';
            console.log(response);
          });
        } else {
          alert('Passwords do not match!');
        }
      };


  }); //end
