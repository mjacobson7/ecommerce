var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var session = require('express-session');
var mongoose = require('mongoose');
var User = require('../features/users/userModel.js');

module.exports = function(app) {

  app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
  app.use(passport.initialize());
  app.use(passport.session()); // persistent login sessions

  passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

    // // // // // // // //

    passport.use('local-signup', new LocalStrategy({
       // by default, local strategy uses username and password, we will override with email
       usernameField : 'email',
       passwordField : 'password',
       passReqToCallback : true // allows us to pass back the entire request to the callback
   },
   function(req, email, password, done) {

       // asynchronous
       // User.findOne wont fire unless data is sent back
       process.nextTick(function() {

       // find a user whose email is the same as the forms email
       // we are checking to see if the user trying to login already exists
       User.findOne({ 'local.email' :  email }, function(err, user) {
           // if there are any errors, return the error
           if (err)
               return done(err);

           // check to see if theres already a user with that email
           if (user) {
               return done(null, false, 'signupMessage', 'That email is already taken.');
           } else {

               // if there is no user with that email
               // create the user
               var newUser            = new User(req.body);

               // set the user's local credentials
               newUser.email    = email;
               newUser.password = newUser.generateHash(password);

               // save the user
               newUser.save(function(err) {
                   if (err)
                       throw err;
                   return done(null, newUser);
               });
           }

       });

       });

   })); //end Local-Signup

// // // // LOGIN // // // // //

passport.use('local-login', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) { // callback with email and password from our form

        // find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already exists
        User.findOne({ 'email' :  email }, function(err, user) {
            // if there are any errors, return the error before anything else
            if (err)
                return done(err);

                console.log(user);

            // if no user is found, return the message
            if (!user)
                return done(null, false, 'loginMessage', 'No user found.'); // req.flash is the way to set flashdata using connect-flash

            // if the user is found but the password is wrong
            if (!user.validPassword(password))
                return done(null, false, 'loginMessage', 'Oops! Wrong password.'); // create the loginMessage and save it to session as flashdata
            // all is well, return successful user
            return done(null, user);
        });
    })); //end login

  app.post('/auth/signup', passport.authenticate('local-signup', {
    successRedirect : '/#/success', // redirect to the secure profile section
    failureRedirect : '/#/failure', // redirect back to the signup page if there is an error
  }));

  app.post('/auth/local', passport.authenticate('local-login', {
    successRedirect : '/loginsuccess', // redirect to the secure profile section
    failureRedirect : '/loginfailure', // redirect back to the signup page if there is an error
  }));

  app.get('/loginsuccess', function(req, res) {
    res.status(200).json(req.user);
  });

  app.get('/loginfailure', function(req, res) {
    res.send('Failed to authenticate');
  });

  app.get('/auth/signout', function(req, res) {
    console.log('logging out');
    req.logout();
    res.redirect('/');
  });

  app.get('/auth/loggedIn', function(req, res) {
      if(!req.user) {
        res.send('fail');
      } else {
        res.status(200).json(req.user.id);
      };
  });

  app.get('/auth/cart', function(req, res) {
    if(!req.user) {
      res.send('fail');
    } else {
      res.status(200).json(req.user.id);
    }
  })


}; //end
