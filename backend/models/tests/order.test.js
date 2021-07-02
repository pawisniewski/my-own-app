/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */

const Order = require('../order.model.js');
const expect = require('chai').expect;
const mongoose = require('mongoose');

describe('Order', () => {
  
  it('should throw an error if any arg is missing', () => {
    const cases = [
      { firstName: 'John', lastName: 'Doe', email: 'johndoe@example.com', address: 'Street 5/27' },
      { products: [{ amount: 1, product: '60b3634c3b95d90546d8d15e', 
        comment: 'test' }], lastName: 'Doe', email: 'johndoe@example.com', address: 'Street 5/27' },
      { products: [{ amount: 1, product: '60b3634c3b95d90546d8d15e', 
        comment: 'test' }], firstName: 'John', email: 'johndoe@example.com', address: 'Street 5/27' },
      { products: [{ amount: 1, product: '60b3634c3b95d90546d8d15e', 
        comment: 'test' }], firstName: 'John', lastName: 'Doe', address: 'Street 5/27' },
      { products: [{ amount: 1, product: '60b3634c3b95d90546d8d15e', 
        comment: 'test' }], firstName: 'John', lastName: 'Doe', email: 'johndoe@example.com' },
    ];
    for (let prop of cases) {
      const order = new Order(prop);
      order.validate(err => {
        expect(err.errors).to.exist;
      });
    }
  });

  it('should throw an error if "products" is not an array', () => {
    const cases = ['test', 5, []];
    for (let products of cases) {
      const order = new Order({
        products,
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@example.com',
        address: 'Street 5/27',
      });
      order.validate(err => {
        expect(err.errors.products).to.exist;
      });
    }
  });

  it('should throw an error if "firstName" is not a string', () => {
    const cases = [{}, []];
    for (let firstName of cases) {
      const order = new Order({
        products: [{ amount: 1, product: '60b3634c3b95d90546d8d15e', comment: 'test' }],
        firstName,
        lastName: 'Doe',
        email: 'johndoe@example.com',
        address: 'Street 5/27',
      });
      order.validate(err => {
        expect(err.errors.firstName).to.exist;
      });
    }
  });

  it('should throw an error if "lastName" is not a string', () => {
    const cases = [{}, []];
    for (let lastName of cases) {
      const order = new Order({
        products: [{ amount: 1, product: '60b3634c3b95d90546d8d15e', comment: 'test' }],
        firstName: 'John',
        lastName,
        email: 'johndoe@example.com',
        address: 'Street 5/27',
      });
      order.validate(err => {
        expect(err.errors.lastName).to.exist;
      });
    }
  });

  it('should throw an error if "email" is not valid', () => {
    const cases = ['johndoe@', '@example.com', 'johndoeexample.com'];
    for (let email of cases) {
      const order = new Order({
        products: [{ amount: 1, product: '60b3634c3b95d90546d8d15e', comment: 'test' }],
        firstName: 'John',
        lastName: 'Doe',
        email,
        address: 'Street 5/27',
      });
      order.validate(err => {
        expect(err.errors.email).to.exist;
      });
    }
  });

  it('should throw an error if "address" is not a string', () => {
    const cases = [{}, []];
    for (let address of cases) {
      const order = new Order({
        products: [{ amount: 1, product: '60b3634c3b95d90546d8d15e', comment: 'test' }],
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@example.com',
        address,
      });
      order.validate(err => {
        expect(err.errors.address).to.exist;
      });
    }
  });

  it('should not throw an error when all props are correct', () => {
    const order = new Order({
      products: [{ amount: 1, product: '60b3634c3b95d90546d8d15e', comment: 'test' }],
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@example.com',
      address: 'Street 5/27',
    });
    order.validate(err => {
      expect(err).to.not.exist;
    });
  });

  after(() => {
    mongoose.models = {};
  });

});
