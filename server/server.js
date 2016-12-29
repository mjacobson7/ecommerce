var app = require('./config/express.js')();
require('./config/db.js')();
require('./config/passport')(app);
require('./features/users/userRoutes.js')(app);
require('./features/products/productRoutes.js')(app);

var port = process.env.PORT || 5000;

app.listen(port, function() {
  console.log('The magic happens on port ' + port);
});
