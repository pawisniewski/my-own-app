const Product = require('../models/product.model');

exports.getAll = async (req, res) => {
  try {
    await Product.find({}, (err, products) => {
      if (err) res.status(500).json(err);
      if (products) {
        res.header().json(products.map(({ _id, name, price, images }) => (
          { _id, name, price, mainImage: {
            name: images[0].name,
            src: images[0].src,
          }}
        )));
      } else res.status(404).json({ message: 'Not found...' });
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getById = async (req, res) => {
  try {
    const result = await Product.findById(req.params.id);
    if (!result) res.status(404).json({ message: 'Not found...' });
    else res.json(result);
  }
  catch (err) {
    res.status(500).json({ message: err });
  }
};
