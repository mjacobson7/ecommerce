var User = require('./userModel.js');
var bcrypt = require('bcrypt-nodejs');

module.exports = {

  deleteCart: function(req, res) {
    User.findByIdAndUpdate(req.params.id, {cart: []}, {new: true}, function(err, result) {
      if(err) {
        res.status(500).send(err);
      } else {
        res.status(200).json(result);
      }
    })
  },

  getCartItems: function(req, res) {
    User.findById(req.params.id).populate('cart').exec(function(err, result) {
      if(err) {
        res.status(500).send(err);
      } else {
        res.status(200).json(result);
      }
    })
  },

  createUser: function(req, res) {
    var user = new User(req.body);
    user.save(function(err, result) {
      if(err) {
        res.status(500).send(err);
      } else {
        res.status(200).json(result);
      }
    })
  },

  getUser: function(req, res) {
    User.findById(req.params.id, function(err, result) {
      if(err) {
        res.status(500).send(err);
      } else {
        res.status(200).json(result);
      }
    })

  },

  updateUser: function(req, res) {
    User.findById(req.params.id, function(err, result) {
      var newInfo = result;
      newInfo.password = generateHash(req.body.password);
      newInfo.name = req.body.name;
      newInfo.email = req.body.email;
      User.findByIdAndUpdate(req.params.id, {$set: newInfo}, {new: true}, function(err, result) {
        if(err) {
          res.status(500).send(err);
        } else {
          res.status(200).json(result);
        }
      })
    })
  },

    addToCart: function(req, res) {
      User.findByIdAndUpdate(req.body.userId, {
        $push: {
          cart: req.body.productId,
          quantity: req.body.quantity,
          color: req.body.color
        }
      }, {new: true}, function(err, result) {
        if(err) {
          res.status(500).send(err);
        } else {
          res.status(200).json(result);
        }
      })
    },

  deleteUser: function(req, res) {
    User.findByIdAndRemove(req.params.id, function(err, result) {
      if(err) {
        res.status(500).send(err);
      } else {
        res.status(200).json(result);
      }
    })
  }

};

var generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
