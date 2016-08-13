var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
var Schema   = mongoose.Schema;

var UserSchema = new Schema ({
  name:     {type: String, required: true},
  email:    {type: String, required: true, unique: true},
  password: {type: String, required: true},
  cart:     [{type: mongoose.Schema.Types.ObjectId, ref: 'Product'}],
  role:     {type: String, required: false}

});  //That was easy

UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', UserSchema);
