angular.module('myApp', ['ui.router', 'ngAlertify'])
  .config(function($stateProvider, $urlRouterProvider) {


    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '../features/home/home.html',
        controller: 'homeCtrl'
      })

      .state('shop', {
        url: '/shop',
        templateUrl: '../features/shop/shop.html',
        controller: 'shopCtrl'
      })

      .state('about', {
        url: '/about',
        templateUrl: '../features/about/about.html',
        controller: 'aboutCtrl'
      })

      .state('contact', {
        url: '/contact',
        templateUrl: '../features/contact/contact.html',
        controller: 'contactCtrl'
      })

      .state('login', {
        url: '/login',
        templateUrl: '../features/login/login.html',
        controller: 'loginCtrl',
      })

      .state('product', {
        url: '/product/:id',
        templateUrl: '../features/product/product.html',
        controller: 'productCtrl'
      })

      .state('admin', {
        url: '/admin',
        templateUrl: '../features/admin/admin.html',
        controller: 'adminCtrl',
        resolve: {
            user: function(mainService, $state) {
              return mainService.loggedIn().then(function(response) {
                if(response.data === 'fail') {
                  $state.go('home');
                }
              });
            }
        }
      })

      .state('profile', {
        url: '/profile',
        templateUrl: '../features/profile/profile.html',
        controller: 'profileCtrl'
      })

      .state('updateprofile', {
        url: '/updateprofile',
        templateUrl: '../features/updateprofile/updateprofile.html',
        controller: 'updateprofileCtrl'
      })

      .state('cart', {
        url: '/cart',
        templateUrl: '../features/cart/cart.html',
        controller: 'cartCtrl',
        resolve: {
          cart: function(mainService, $state, alertify) {
            mainService.authCart().then(function(response) {
              if(response.data === 'fail') {
                $state.go('login');
                alertify.delay(5000).logPosition('bottom right').error('You must first log in to view your cart');
              }
            })
          }
        }
      })

      .state('demo', {
        url: '/demo',
        templateUrl: '../features/demo/demo.html'
      })


      $urlRouterProvider.otherwise('home');

  }); //end
