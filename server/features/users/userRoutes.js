var userCtrl = require('./userCtrl.js');

module.exports = function(app) {

  app.post('/api/test1', userCtrl.createUser);
  app.get('/api/test1/:id', userCtrl.getUser);
  app.put('/api/test1/:id', userCtrl.updateUser);
  app.delete('/api/test1/:id', userCtrl.deleteUser);
  app.put('/api/addtocart', userCtrl.addToCart);
  app.get('/api/getcartitems/:id', userCtrl.getCartItems);
  app.delete('/api/deletecart/:id', userCtrl.deleteCart);

}
