var userModel = require('./userModel.js');

module.exports = {

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
    console.log("getUser");
  },

  updateUser: function(req, res) {
    console.log("updateUser");
  },

  deleteUser: function(req, res) {
    console.log("deleteUser");
  }

};
