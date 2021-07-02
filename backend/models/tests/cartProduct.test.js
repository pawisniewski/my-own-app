/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */

const { CartProduct } = require('../cartProduct.model');
const expect = require('chai').expect;
const mongoose = require('mongoose');

describe('CartProduct', () => {

  it('should throw an error if "product" is missing', () => {
    const cartProduct = new CartProduct({ amount: 1, comment: 'test' });
    cartProduct.validate(err => {
      expect(err.errors).to.exist;
    });
  });

  it('should throw an error if "product" is not an ObjectId', () => {
    const cases = [{}, [], 1, 'test'];
    for(let product of cases){
      const cartProduct = new CartProduct({
        product,
        amount: 1,
        comment: 'test',
      });
      cartProduct.validate(err => {
        expect(err.errors.product).to.exist;
      });
    }
  });

  it('should throw an error if "amount" is not a number', () => {
    const cases = [{}, [], 'test'];
    for(let amount of cases){
      const cartProduct = new CartProduct({
        product: '60b3634c3b95d90546d8d15e',
        amount,
        comment: 'test',
      });
      cartProduct.validate(err => {
        expect(err.errors.amount).to.exist;
      });
    }
  });

  it('should throw an error if "comment" is not a string', () => {
    const cases = [{}, []];
    for(let comment of cases){
      const cartProduct = new CartProduct({
        product: '60b3634c3b95d90546d8d15e',
        amount: 1,
        comment,
      });
      cartProduct.validate(err => {
        expect(err.errors.comment).to.exist;
      });
    }
  });

  it('should not throw an error when all props are correct', () => {
    const cartProduct = new CartProduct({
      product: '60b3634c3b95d90546d8d15e',
      amount: 1,
      comment: 'test',
    });
    cartProduct.validate(err => {
      expect(err).to.not.exist;
    });
  });

  after(() => {
    mongoose.model = {};
  });
  
});
