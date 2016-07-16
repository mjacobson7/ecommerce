var app = require('./config/express.config.js')();
require('./config/db.config.js')();
require('./features/users/userRoutes.js')(app);

var port = 3000;


app.listen(port, function() {
  console.log('The magic happens on port ' + port);
});
