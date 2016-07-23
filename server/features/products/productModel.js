var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema ({
  title:       {type: String, required: true},
  description: {type: String, required: true},
  price:       {type: Number, required: true},
  image1:      {type: String, required: true},
  image2:      {type: String, required: true},
  image3:      {type: String, required: true},
  image4:      {type: String, required: true},
  quantity:    {type: String, default:  1},
  color:       {type: String, default:  "Blue/Grey"}
});

module.exports = mongoose.model('Product', ProductSchema);
