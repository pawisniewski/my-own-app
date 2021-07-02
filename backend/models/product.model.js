const mongoose = require('mongoose');
const { photoSchema } = require('./photo.model');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, minLength: 3, maxLength: 50 },
  description: { type: String, required: true, minLength: 3, maxLength: 5000 },
  price: { type: Number, required: true, minLength: 1, maxLength: 9999 },
  images: [{ type: photoSchema }],
});

module.exports = mongoose.model('Product', productSchema);
