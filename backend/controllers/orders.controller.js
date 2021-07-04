const sanitize = require('mongo-sanitize');
const Order = require('../models/order.model');

exports.getAll = async (req, res) => {
  try {
    res.json(await Order.find());
  }
  catch (err) {
    res.status(500).json({ message: err });
  }
};
  
exports.getById = async(req, res) => {
  try {
    const result = await Order.findById(req.params.id).populate('products.product');
    if (!result) res.status(404).json({ message: 'Not found...'});
    else res.json(result);
  }
  catch (err) {
    res.status(500).json({ message: err });
  }
};
  
exports.post = async (req, res) => {
  const { products, firstName, lastName, email, address } = req.body;
  if ( products && products.length > 0 && firstName && lastName && email && address ) {
    try {
      const newOrder = new Order({
        products: sanitize(products),
        firstName: sanitize(firstName),
        lastName: sanitize(lastName),
        email,
        address: sanitize(address),
      });
      const saved = await newOrder.save();
      res.status(201).json(saved);
    } 
    catch (err) {
      res.status(500).json({ message: err });
    }
  } 
  else {
    res.status(400).json({ message: 'Bad request' });
  }
};
