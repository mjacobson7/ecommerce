var app = require('./config/express.config.js')();
require('./config/db.config.js')();
require('./config/passport.js')(app);
require('./features/users/userRoutes.js')(app);
require('./features/products/productRoutes.js')(app);

var port = 3000;



app.listen(port, function() {
  console.log('The magic happens on port ' + port);
});
