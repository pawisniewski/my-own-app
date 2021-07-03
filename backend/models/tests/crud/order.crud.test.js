/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */

const Order = require('../../order.model');
const expect = require('chai').expect;
const mongoose = require('mongoose');
const MongoMemoryServer = require('mongodb-memory-server').MongoMemoryServer;

describe('Order', () => {

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

  describe('Creating data', () => {

    it('should insert new document with "save" method', async () => {
      const order = new Order({
        products: [{ product: '60b3634c3b95d90546d8d15e', amount: 1, comment: 'test' }],
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@example.com',
        address: 'Street 5/27',
      });
      await order.save();
      expect(order.isNew).to.be.false;
    });

    after(async () => {
      await Order.deleteMany();
    });

  });

  after(async () => {
    await mongoose.disconnect();
  });

});
