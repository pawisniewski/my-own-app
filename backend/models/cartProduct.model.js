const mongoose = require('mongoose');

const cartProductSchema = new mongoose.Schema({
  product: {type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true},
  amount: {type: Number, default: 1, min: 1, max: 10 },
  comment: {type: String, minLength: 3, maxLength: 500},
});

module.exports = { 
  CartProduct: mongoose.model('CartProduct', cartProductSchema),
  cartProductSchema,
};
