const mongoose = require('mongoose');
const { cartProductSchema } = require('./cartProduct.model');

const OrderSchema = new mongoose.Schema({
  products: {
    type: [cartProductSchema],
    required: true,
    validate: { validator: v => Array.isArray(v) && v.length > 0 },
  },
  firstName: { type: String, required: true, minLength: 2, maxLength: 20 },
  lastName: { type: String, required: true, minLength: 3, maxLength: 30 },
  email: {
    type: String,
    required: true,
    match: new RegExp(/^[-a-z0-9~!$%^&*_=+}{'?]+(\.[-a-z0-9~!$%^&*_=+}{'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.([a-z]{1,6}))$/i),
  },
  address: { type: String, required: true, minLength: 5, maxLength: 50  },
});

module.exports = mongoose.model('Order', OrderSchema);
