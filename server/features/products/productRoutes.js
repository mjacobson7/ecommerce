var productCtrl = require('./productCtrl.js');

module.exports = function(app) {

  app.post('/api/test2', productCtrl.createProduct);
  app.get('/api/test2', productCtrl.getAllProducts);
  app.get('/api/viewproduct/:id', productCtrl.viewProduct);
  app.put('/api/test2/:id', productCtrl.updateProduct);
  app.delete('/api/deleteproduct/:id', productCtrl.deleteProduct);

};
