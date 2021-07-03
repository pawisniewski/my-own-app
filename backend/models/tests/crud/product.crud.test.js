/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */

const Product = require('../../product.model');
const expect = require('chai').expect;
const mongoose = require('mongoose');
const MongoMemoryServer = require('mongodb-memory-server').MongoMemoryServer;

describe('Product', () => {
  
  before(async () => {
    try {
      const fakeDB = new MongoMemoryServer();
      const uri = await fakeDB.getUri();
      mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    } 
    catch(err) {
      console.log(err);
    }
  });
  
  describe('Reading data', () => {
    
    before(async () => {
      const testProductOne = new Product({
        name: 'Product1',
        description: 'test',
        price: 99,
        images: [{
          name: 'image1',
          src: 'https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        }],
      });
      const testProductTwo = new Product({
        name: 'Product2',
        description: 'test',
        price: 99,
        images: [{
          name: 'image2',
          src: 'https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        }],
      });
      await testProductOne.save();
      await testProductTwo.save();
    });
  
    it('should return all the data with "find" method', async () => {
      const products = await Product.find();
      const expectedLength = 2;
      expect(products.length).to.be.equal(expectedLength);
    });
  
    it('should return proper document by various params with "findOne" method', async () => {
      const expectedProduct = {
        name: 'Product1',
        description: 'test',
        price: 99,
      };
      for (let key in expectedProduct) {
        const value = expectedProduct[key];
        const product = await Product.findOne({ [key]: value });
        expect(product.performer).to.be.equal(expectedProduct.performer);
      }
    });

    after(async () => {
      await Product.deleteMany();
    });
    
  });

  after(async () => {
    await mongoose.disconnect();
  });

});
