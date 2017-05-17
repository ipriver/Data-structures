const LinkedList = require('../linkedList').LinkedList;
const Node = require('../linkedList').Node;
const assert = require('chai').assert;
const expect = require('chai').expect;
const MyException = require('../linkedList').MyException;

describe('LinkedList', function(){
  describe('#linklist basic tests', function() {
    const lili = new LinkedList();
    const node = new Node(1);
    it('check if it\'s a LL or Node object',function(){
      assert.instanceOf(lili, LinkedList);
      assert.instanceOf(node, Node);
    });
    it('check if BT has it\'s properties', function() {
      assert.property(lili, 'length');
      assert.property(lili, 'head');
      assert.property(lili, 'tail');
      assert.property(lili, 'addNode');
    });
    it('check if Node has it\'s properties', function() {
      assert.property(node, 'value');
      assert.property(node, 'next');
      assert.property(node, 'prev');     
    });
    it('check default properties of Node and LL', function() {
      assert.equal(lili.length, 0);
      assert.equal(lili.head, null);
      assert.equal(lili.tail, null);
      assert.typeOf(lili.addNode, 'function');

      assert.equal(node.next, null);
      assert.equal(node.prev, null);
      assert.notEqual(node.value, null);
      assert.notEqual(node.value, undefined);
    });
  });
  describe('#addNode', function() {
    var lili = new LinkedList();
    var times = Math.floor(Math.random() * (30 - 15 + 1)) + 15;
    beforeEach(function() {
      lili = new LinkedList();
    });
    it('addNode should correctly add Node into the list', function() {
      node = new Node(3);
      lili.addNode(node);
      assert.equal(lili.head, node);
      assert.equal(lili.tail, node);
      lili = new LinkedList();
      for (let i = 1; i < times + 1; i+=1) {
        node = new Node(i);
        lili.addNode(node);
        assert.equal(lili.tail, node);
      }
    });
    it('addNode should increase linked list length', function() {
      node = new Node(3);
      lili.addNode(node);
      assert.equal(lili.length, 1);
      lili = new LinkedList();     
    });
    it('function chaining', function() {
      lili.addNode(new Node(1)).addNode(new Node(2));
      assert.equal(lili.length, 2);
      lili.addNode(new Node(3)).addNode(new Node(44));
      assert.equal(lili.length, 4);
    });
  });
  describe('#removeLast', function() {
    var lili = new LinkedList();
    var times = Math.floor(Math.random() * (30 - 15 + 1)) + 15;
    beforeEach(function() {
      lili = new LinkedList();
    });
    it('throws error if LL is empty', function() {
      expect(() => lili.removeLast()).to.throw(MyException);
    });
    it('check that it removes element from LL and throws exception on empty LL', function() {
      lili.addNode(new Node(1));
      assert.equal(lili.length, 1, 'length should be 1')
      lili.removeLast();
      assert.equal(lili.length, 0, 'length should be 0');
      assert.equal(lili.head, null);
      expect(() => lili.removeLast()).to.throw(MyException);
    });
    it('more random values to remove', function() {
      for (let i = 1; i < times + 1; i+=1) {
        node = new Node(i);
        lili.addNode(node);
        assert.equal(lili.length, i);
        assert.equal(lili.tail, node);
      }
      for (let i = times; i > 1; i-=1) {
        expect(() => lili.removeLast()).not.to.throw(MyException);
        assert.equal(lili.length, i-1);
        assert.notEqual(lili.tail, null);
      }
      assert.equal(lili.length, 1);
      expect(() => lili.removeLast()).not.to.throw(MyException);
      assert.equal(lili.length, 0);
      assert.equal(lili.tail, null);
      expect(() => lili.removeLast()).to.throw(MyException);
    });
    it('remove should be chainable', function() {
      lili.addNode(new Node(1));
      lili.addNode(new Node(2));
      lili.removeLast().removeLast();
      assert.equal(lili.length, 0);
      assert.equal(lili.tail, null);
      let lastNode = new Node(99);
      lili.addNode(new Node(1)).addNode(new Node(2)).removeLast()
          .addNode(new Node(1)).addNode(new Node(1)).removeLast()
          .addNode(new Node(1)).removeLast().removeLast()
          .addNode(lastNode).addNode(new Node(1)).addNode(new Node(1))
          .removeLast().removeLast();
      assert.equal(lili.tail, lastNode);
      assert.equal(lili.length, 2);
    });
  });
});