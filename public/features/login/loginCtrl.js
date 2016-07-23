angular.module('myApp')
  .controller('loginCtrl', function($rootScope, $scope, mainService, $state) {

    $scope.signUp = function(email, name, password1, password2) {
      if(password1 === password2) {
        var userSignUpInfo = {
          name: name,
          email: email,
          password: password1
        };
        mainService.signUp(userSignUpInfo).then(function(response) {
          $scope.email = '';
          $scope.name = '';
          $scope.password1 = '';
          $scope.password2 = '';
        });
      } else {
        alert('Passwords do not match!');
      }
    };

    $scope.logIn = function(email, password) {
      var loginCredentials = {
        email: email,
        password: password
      };
      mainService.logIn(loginCredentials).then(function(response) {
        $scope.email = '';
        $scope.password = '';
        if(response.data !== "Failed to authenticate") {
        $rootScope.user = response.data;
        $scope.user = response.data;
        $state.go('shop');
      } else {
        alert('Invalid Credentials!');
      }
      })
    };

  }); //end
