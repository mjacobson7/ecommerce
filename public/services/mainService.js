angular.module('myApp')
  .service('mainService', function($http) {

    this.deleteProduct = function(id) {
      console.log(id);
      return $http ({
        method: 'DELETE',
        url: '/api/deleteproduct/' + id
      }).then(function(response) {
        return response;
      })
    };

    this.getCartItems = function(id) {
      return $http ({
        method: 'GET',
        url: '/api/getcartitems/' + id
      }).then(function(response) {
        return response;
      })
    };

    this.emptyCart = function(id) {
      return $http ({
        method: 'DELETE',
        url: '/api/deletecart/' + id
      }).then(function(response) {
        return response;
      });
    };

    this.logIn = function(loginCredentials) {
      return $http ({
        method: 'POST',
        url: '/auth/local',
        data: loginCredentials
      }).then(function(response) {
        return response;
      })
    };

    this.signUp = function(userSignUpInfo) {
      return $http ({
        method: 'POST',
        url: '/auth/signup',
        data: userSignUpInfo
      }).then(function(response) {
        return response;
      })
    };


    this.getProducts = function() {
      return $http({
        url: 'api/test2',
        method: 'GET'
      }).then(function(response) {
        return response.data;
      })
    };

    this.viewProduct = function(id) {
      return $http ({
        method: 'GET',
        url: '/api/viewproduct/' + id
      }).then(function(response) {
        return response.data;
      })
    };

    this.addProduct = function(newProduct) {
      return $http ({
        method: 'POST',
        url: '/api/test2',
        data: newProduct
      }).then(function(response) {
        return response;
      })
    };

    this.updateProfile = function(id) {
      return $http ({
        method: 'PUT',
        url: '/api/test1/' + id.id,
        data: id
      }).then(function(response) {
        return response;
      })
    };

    this.addToCart = function(myCart) {
      return $http ({
        method: 'PUT',
        url: '/api/addtocart',
        data: myCart
      }).then(function(response) {
        return response;
      })
    }

  }); //end
