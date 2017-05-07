const BinTree = require('../bt').BinTree;
const Node = require('../bt').Node;
const assert = require('chai').assert;
const expect = require('chai').expect;
const MyException = require('../bt').MyException;

describe('BinaryTree', function() {
  describe('#Bintree', function() {
    const bt = new BinTree();     
    it('check if it\'s a BinaryTree object', function() {
      assert.instanceOf(bt, BinTree);
    });
    it('check if BT has head, left, right', function() {
      assert.property(bt, 'root');
      assert.property(bt, 'addNode');
    });
  });
  describe('#Node', function() {
    const node = new Node(4);
    it('test node creation instanceOf', function() {
      assert.instanceOf(node, Node);
      assert.equal(node.value, 4);
    });
    it('node properties check', function() {
      assert.property(node, 'left');
      assert.property(node, 'right');
      assert.property(node, 'value');
      assert.equal(node.left, null);
      assert.equal(node.right, null);
      assert.notEqual(node.value, null);
    });
    it('test exception if node has no value provided', function() {
      expect(() => new Node).to.throw(MyException);
    });
  });
  describe('#addNode', function() {
    const bt = new BinTree();
    it('check if it throws error if not a Node passed into function', function() {
      expect(() => bt.addNode('sdfs')).to.throw(MyException);
      expect(() => bt.addNode(3)).to.throw(MyException);
      expect(() => bt.addNode(new Node(4))).not.to.throw(MyException);
    });
  });
  describe('#getMin', function() {
    it('check if it gets right min value', function() {
      const bt = new BinTree();
      bt.addNode(new Node(5));
      bt.addNode(new Node(8));
      bt.addNode(new Node(3));
      bt.addNode(new Node(4));;
      assert.equal(bt.getMin(), 3);
    });
    it('check with more random values', function() {
      const bt = new BinTree();
      let numbers = [4, 2, 3, 8, 3, 11, 22, 44, 99, 52, 21, 88, 43];
      for (let i=0; i < numbers.length; i+=1) {
        bt.addNode(new Node(numbers[i]));
      }
      assert.equal(bt.getMin(), 2);
    });
    it('random generator tests', function() {
      const bt = new BinTree();
      let min = 1111;
      for (let i=0; i < 100; i+=1) {
        x = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
        bt.addNode(new Node(x));
        if (x < min) min = x;
      }
      assert.equal(bt.getMin(), min);
    });
  });
  describe('#getMax', function() {
    it('check if it gets right max value', function() {
      const bt = new BinTree();
      bt.addNode(new Node(5));
      bt.addNode(new Node(8));
      bt.addNode(new Node(3));
      bt.addNode(new Node(4));;
      assert.equal(bt.getMax(), 8);
    });  
    it('check with more random values', function() {
      const bt = new BinTree();
      let numbers = [4, 2, 3, 8, 3, 11, 22, 44, 99, 52, 21, 88, 43];
      for (let i=0; i < numbers.length; i+=1) {
        bt.addNode(new Node(numbers[i]));
      }
      assert.equal(bt.getMax(), 99);
    });
    it('random generator tests', function() {
      const bt = new BinTree();
      let max = 0;
      for (let i=0; i < 100; i+=1) {
        x = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
        bt.addNode(new Node(x));
        if (x > max) max = x;
      }
      assert.equal(bt.getMax(), max);
    });
  });
});