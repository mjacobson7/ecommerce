angular.module('myApp')
  .service('mainService', function($http) {

    this.getUser = function() {
      return $http ({
        method: 'GET',
        url: '/auth/getuser'
      }).then(function(response) {
         return response;
      })
      .catch(function(err) {
        console.log("mainService err ==> ", err);
      })
    }


    this.loggedIn = function() {
      return $http ({
      method: 'GET',
      url: '/auth/loggedIn'
    }).then(function(response) {
      return response;
    })
  }

  this.authCart = function() {
    return $http ({
    method: 'GET',
    url: '/auth/cart'
  }).then(function(response) {
    return response;
  })
}

    this.signOut = function() {
      return $http ({
        method: 'GET',
        url: '/auth/signout'
      }).then(function(response) {
        return response;
      })
    }

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
        var cartArray = response.data.cart;
        for(var i = 0; i < cartArray.length; i++) {
          var newDesc = cartArray[i].description.slice(0, 100);
          response.data.cart[i].description = newDesc + "...";
      }
      return response;
    })
  }

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
    };

    var cart = [];
    var subtotal = 0;
    var tax = 0;
    var total = 0;

    this.noSessionCart = function(myCart) {
      if(myCart) {
        cart.push(myCart);
        return cart;
      } else {
        return cart;
      }
    };

    this.getSubtotal = function() {
      for(var i = 0; i < cart.length; i++) {
        subtotal += cart[i].price;
      }
      return subtotal;
    }

    this.getTax = function(subtotal) {
      tax = subtotal * 0.0685;
      return tax;
    }

    this.getTotal = function(subtotal, tax) {
      total = tax + subtotal;
      return total;
    }

  }); //end
