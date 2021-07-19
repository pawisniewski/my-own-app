const Product = require('./models/product.model');

const loadInitData = async () => {
  
  const data = [
    {
      name: 'Product1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod metus in tellus mattis congue. Donec finibus urna quis diam porta laoreet. Phasellus ultrices dictum.',
      price: 10,
      images: [{
        name: 'image1',
        src: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      },{
        name: 'image2',
        src: 'https://images.pexels.com/photos/3683053/pexels-photo-3683053.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      },{
        name: 'image3',
        src: 'https://images.pexels.com/photos/4913769/pexels-photo-4913769.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      }],
    },
    {
      name: 'Product2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod metus in tellus mattis congue. Donec finibus urna quis diam porta laoreet. Phasellus ultrices dictum.',
      price: 20,
      images: [{
        name: 'image1',
        src: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      },{
        name: 'image2',
        src: 'https://images.pexels.com/photos/3683053/pexels-photo-3683053.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      },{
        name: 'image3',
        src: 'https://images.pexels.com/photos/4913769/pexels-photo-4913769.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      }],
    },
    {
      name: 'Product3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod metus in tellus mattis congue. Donec finibus urna quis diam porta laoreet. Phasellus ultrices dictum.',
      price: 30,
      images: [{
        name: 'image1',
        src: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      },{
        name: 'image2',
        src: 'https://images.pexels.com/photos/3683053/pexels-photo-3683053.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      },{
        name: 'image3',
        src: 'https://images.pexels.com/photos/4913769/pexels-photo-4913769.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      }],
    },
    {
      name: 'Product4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod metus in tellus mattis congue. Donec finibus urna quis diam porta laoreet. Phasellus ultrices dictum.',
      price: 40,
      images: [{
        name: 'image1',
        src: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      },{
        name: 'image2',
        src: 'https://images.pexels.com/photos/3683053/pexels-photo-3683053.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      },{
        name: 'image3',
        src: 'https://images.pexels.com/photos/4913769/pexels-photo-4913769.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      }],
    },
    {
      name: 'Product5',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod metus in tellus mattis congue. Donec finibus urna quis diam porta laoreet. Phasellus ultrices dictum.',
      price: 50,
      images: [{
        name: 'image1',
        src: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      },{
        name: 'image2',
        src: 'https://images.pexels.com/photos/3683053/pexels-photo-3683053.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      },{
        name: 'image3',
        src: 'https://images.pexels.com/photos/4913769/pexels-photo-4913769.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      }],
    },
    {
      name: 'Product6',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod metus in tellus mattis congue. Donec finibus urna quis diam porta laoreet. Phasellus ultrices dictum.',
      price: 60,
      images: [{
        name: 'image1',
        src: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      },{
        name: 'image2',
        src: 'https://images.pexels.com/photos/3683053/pexels-photo-3683053.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      },{
        name: 'image3',
        src: 'https://images.pexels.com/photos/4913769/pexels-photo-4913769.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      }],
    },
    {
      name: 'Product7',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod metus in tellus mattis congue. Donec finibus urna quis diam porta laoreet. Phasellus ultrices dictum.',
      price: 70,
      images: [{
        name: 'image1',
        src: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      },{
        name: 'image2',
        src: 'https://images.pexels.com/photos/3683053/pexels-photo-3683053.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      },{
        name: 'image3',
        src: 'https://images.pexels.com/photos/4913769/pexels-photo-4913769.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      }],
    },
    {
      name: 'Product8',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod metus in tellus mattis congue. Donec finibus urna quis diam porta laoreet. Phasellus ultrices dictum.',
      price: 80,
      images: [{
        name: 'image1',
        src: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      },{
        name: 'image2',
        src: 'https://images.pexels.com/photos/3683053/pexels-photo-3683053.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      },{
        name: 'image3',
        src: 'https://images.pexels.com/photos/4913769/pexels-photo-4913769.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      }],
    },
    {
      name: 'Product9',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod metus in tellus mattis congue. Donec finibus urna quis diam porta laoreet. Phasellus ultrices dictum.',
      price: 90,
      images: [{
        name: 'image1',
        src: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      },{
        name: 'image2',
        src: 'https://images.pexels.com/photos/3683053/pexels-photo-3683053.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      },{
        name: 'image3',
        src: 'https://images.pexels.com/photos/4913769/pexels-photo-4913769.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      }],
    },
    {
      name: 'Product10',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod metus in tellus mattis congue. Donec finibus urna quis diam porta laoreet. Phasellus ultrices dictum.',
      price: 100,
      images: [{
        name: 'image1',
        src: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      },{
        name: 'image2',
        src: 'https://images.pexels.com/photos/3683053/pexels-photo-3683053.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      },{
        name: 'image3',
        src: 'https://images.pexels.com/photos/4913769/pexels-photo-4913769.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      }],
    },
    {
      name: 'Product11',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod metus in tellus mattis congue. Donec finibus urna quis diam porta laoreet. Phasellus ultrices dictum.',
      price: 110,
      images: [{
        name: 'image1',
        src: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      },{
        name: 'image2',
        src: 'https://images.pexels.com/photos/3683053/pexels-photo-3683053.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      },{
        name: 'image3',
        src: 'https://images.pexels.com/photos/4913769/pexels-photo-4913769.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      }],
    },
    {
      name: 'Product12',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod metus in tellus mattis congue. Donec finibus urna quis diam porta laoreet. Phasellus ultrices dictum.',
      price: 120,
      images: [{
        name: 'image1',
        src: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      },{
        name: 'image2',
        src: 'https://images.pexels.com/photos/3683053/pexels-photo-3683053.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      },{
        name: 'image3',
        src: 'https://images.pexels.com/photos/4913769/pexels-photo-4913769.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
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
