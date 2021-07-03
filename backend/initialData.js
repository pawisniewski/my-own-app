const Product = require('./models/product.model');

const loadInitData = async () => {
  
  const data = [
    {
      name: 'Product1',
      description: 'Lorem ipsum dolor sit amet',
      price: 10,
      images: [{
        name: 'image1',
        src: 'https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      },{
        name: 'image2',
        src: 'https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      },{
        name: 'image3',
        src: 'https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      }],
    },
    {
      name: 'Product2',
      description: 'Lorem ipsum dolor sit amet',
      price: 20,
      images: [{
        name: 'image1',
        src: 'https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      },{
        name: 'image2',
        src: 'https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      },{
        name: 'image3',
        src: 'https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      }],
    },
    {
      name: 'Product3',
      description: 'Lorem ipsum dolor sit amet',
      price: 30,
      images: [{
        name: 'image1',
        src: 'https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      },{
        name: 'image2',
        src: 'https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      },{
        name: 'image3',
        src: 'https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      }],
    },
    {
      name: 'Product4',
      description: 'Lorem ipsum dolor sit amet',
      price: 40,
      images: [{
        name: 'image1',
        src: 'https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      },{
        name: 'image2',
        src: 'https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      },{
        name: 'image3',
        src: 'https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      }],
    },
    {
      name: 'Product5',
      description: 'Lorem ipsum dolor sit amet',
      price: 50,
      images: [{
        name: 'image1',
        src: 'https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      },{
        name: 'image2',
        src: 'https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      },{
        name: 'image3',
        src: 'https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      }],
    },
    {
      name: 'Product6',
      description: 'Lorem ipsum dolor sit amet',
      price: 60,
      images: [{
        name: 'image1',
        src: 'https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      },{
        name: 'image2',
        src: 'https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      },{
        name: 'image3',
        src: 'https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      }],
    },
    {
      name: 'Product7',
      description: 'Lorem ipsum dolor sit amet',
      price: 70,
      images: [{
        name: 'image1',
        src: 'https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      },{
        name: 'image2',
        src: 'https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      },{
        name: 'image3',
        src: 'https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      }],
    },
    {
      name: 'Product8',
      description: 'Lorem ipsum dolor sit amet',
      price: 80,
      images: [{
        name: 'image1',
        src: 'https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      },{
        name: 'image2',
        src: 'https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      },{
        name: 'image3',
        src: 'https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      }],
    },
    {
      name: 'Product9',
      description: 'Lorem ipsum dolor sit amet',
      price: 90,
      images: [{
        name: 'image1',
        src: 'https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      },{
        name: 'image2',
        src: 'https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      },{
        name: 'image3',
        src: 'https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      }],
    },
    {
      name: 'Product10',
      description: 'Lorem ipsum dolor sit amet',
      price: 100,
      images: [{
        name: 'image1',
        src: 'https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      },{
        name: 'image2',
        src: 'https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      },{
        name: 'image3',
        src: 'https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      }],
    },
  ];

  try {
    let counter = await Product.countDocuments();
    if (counter === 0) {
      console.log('No products available. Loading example data...');
      await Product.create(data);
      console.log('Test data has been successfully loaded');
    }
  } 
  catch(err) {
    console.log(`Couldn't load test data!`, err);
  }
};

module.exports = loadInitData;
