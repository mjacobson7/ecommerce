var userCtrl = require('./userCtrl.js');

module.exports = function(app) {

  app.post('/api/test1', userCtrl.createUser);
  app.put('/api/test1/:id', userCtrl.updateUser);
  app.delete('/api/test1/:id', userCtrl.deleteUser);
  app.put('/api/addtocart', userCtrl.addToCart);
  app.get('/api/getcartitems/:id', userCtrl.getCartItems);
  app.delete('/api/deletecart/:id', userCtrl.deleteCart);

  app.get('/auth/getuser', userCtrl.getUser);
  
  //passport
  app.get('/auth/loggedIn', function(req, res) {
      if(!req.user) {
        res.send('fail');
      } else {
        res.status(200).json(req.user.id);
      };
  });

  //passport
  app.get('/auth/cart', function(req, res) {
    if(!req.user) {
      res.send('fail');
    } else {
      res.status(200).json(req.user.id);
    }
  })

}
