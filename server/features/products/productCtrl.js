var Product = require('./productModel.js');

module.exports = {

  createProduct: function(req, res) {
    var product = new Product(req.body);
    product.save(function(err, result) {
      if(err) {
        res.status(500).send(err);
      } else {
        res.status(200).json(result);
      }
    })
  },

  getAllProducts: function(req, res) {
    Product.find({}, function(err, result) {
      if(err) {
        res.status(500).send(err);
      } else {
        res.status(200).json(result);
      }
    })
  },

  viewProduct: function(req, res) {
    console.log(req.params);
    Product.findById(req.params.id, function(err, result) {
      if(err) {
        res.status(500).send(err);
      } else {
        res.status(200).json(result);
      }
    })
  },

  updateProduct: function(req, res) {

  },

  deleteProduct: function(req, res) {
    Product.findByIdAndRemove(req.params.id, function(err, result) {
      if(err) {
        res.status(500).send(err);
      } else {
        res.status(200).json(result);
      }
    })
  }

};
