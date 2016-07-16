var userCtrl = require('./userCtrl.js');

module.exports = function(app) {

  app.post('/api/test1', userCtrl.createUser);
  app.get('/api/test1', userCtrl.getUser);
  app.put('/api/test1', userCtrl.updateUser);
  app.delete('/api/test1', userCtrl.deleteUser);

}
