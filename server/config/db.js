var mongoose = require('mongoose');
var mongoURI = 'mongodb://admin:admin@ds011923.mlab.com:11923/ecommerce';

module.exports = function() {

  mongoose.connect(mongoURI);

  mongoose.connection.once('open', function() {
    console.log('Connection to MongoDB successful!');
  });

};
