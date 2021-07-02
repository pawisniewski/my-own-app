/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */

const Product = require('../product.model.js');
const expect = require('chai').expect;
const mongoose = require('mongoose');

describe('Product', () => {
  
  it('should throw an error if any arg is missing', () => {
    const cases = [
      { name: 'test', description: 'test' },
      { name: 'test', price: 99 },
      { description: 'test', price: 99 },
    ];
    for (let prop of cases) {
      const product = new Product(prop);
      product.validate(err => {
        expect(err.errors).to.exist;
      });
    }
  });

  it('should throw an error if "name" is not a string', () => {
    const cases = [{}, []];
    for (let name of cases) {
      const product = new Product({
        name,
        description: 'test',
        price: 99,
      });
      product.validate(err => {
        expect(err.errors.name).to.exist;
      });
    }
  });

  it('should throw an error if "description" is not a string', () => {
    const cases = [{}, []];
    for (let description of cases) {
      const product = new Product({
        name: 'test',
        description,
        price: 99,
      });
      product.validate(err => {
        expect(err.errors.description).to.exist;
      });
    }
  });

  it('should throw an error if "price" is not a number', () => {
    const cases = [{}, [], 'test'];
    for (let price of cases) {
      const product = new Product({
        name: 'test',
        description: 'test',
        price,
      });
      product.validate(err => {
        expect(err.errors.price).to.exist;
      });
    }
  });

  it('should not throw an error when all props are correct', () => {
    const product = new Product({
      name: 'test',
      description: 'test',
      price: 99,
    });
    product.validate(err => {
      expect(err).to.not.exist;
    });
  });

  after(() => {
    mongoose.model = {};
  });

});
