var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema ({
  name:     {type: String, required: true},
  email:    {type: String, required: true, unique: true},
  phone:    {type: String, required: true},
  address:  {
    street: {type: String, required: true},
    city:   {type: String, required: true},
    state:  {type: String, required: true},
    zip:    {type: String, required: true}
  }

});

module.exports = mongoose.model('User', UserSchema);
