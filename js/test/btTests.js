const BinTree = require('../bt');
const expect = require('chai').expect;

let assert = require('assert');

describe('BinaryTree', function() {
  describe('#Bintree', function() {
    const bt = new BinTree(); 
    
    it('check if BinartyTree object', () => {
      expect(bt).to.be.an.instanceof(BinTree)
    });
    it('check if BT has head, left, right', () => {
      expect(bt).to.have.property('head').and.to.be.equal(null);
      expect(bt).to.have.property('left').and.to.be.equal(null);
      expect(bt).to.have.property('right').and.to.be.equal(null);
    });
  });
});