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
    it('throws error if input is not a Node', function(){
      expect(() => lili.addNode(1)).to.throw(MyException);
      expect(() => lili.addNode('ssssss')).to.throw(MyException);
      expect(() => lili.addNode([])).to.throw(MyException);
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
  describe('#clean', function() {
    var lili = new LinkedList();
    var times = Math.floor(Math.random() * (30 - 15 + 1)) + 15;
    beforeEach(function() {
      lili = new LinkedList();
    });
    it('throws error if LL is empty', function() {
      expect(() => lili.clean()).to.throw(MyException);
    });
    it('should clean LL correctyle', function() {
      lili.addNode(new Node(1));
      lili.addNode(new Node(2));
      lili.clean();
      assert.equal(lili.length, 0);
      assert.equal(lili.head, null);
      assert.equal(lili.tail, null);
    });
    it('test clean with more values', function() {
      for (let i = 0; i < 5; i += 1) {
        for (let j = 1; j < times + 1; j += 1) {
          node = new Node(j);
          lili.addNode(node);
          assert.equal(lili.length, j);
          assert.equal(lili.tail, node);
        }
        lili.clean();
        assert.equal(lili.length, 0);
        assert.equal(lili.head, null);
        assert.equal(lili.tail, null);
      }
    });
    it('clean must be chainable', function() {
      lili.addNode(new Node(1));
      lili.addNode(new Node(2)).clean();
      assert.equal(lili.length, 0);
      assert.equal(lili.head, null);
      assert.equal(lili.tail, null);
      let lastNode = new Node(99);
      lili.addNode(new Node(1)).addNode(new Node(2)).addNode(new Node(3))
          .clean().addNode(lastNode);
      assert.equal(lili.tail, lastNode);
      assert.equal(lili.length, 1);
    });
  });
  describe('#deleteAtIndex', function() {
    var lili = new LinkedList();
    var times = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    beforeEach(function() {
      lili = new LinkedList();
    });
    it('throw error if LL is empty', function() {
      expect(() => lili.deleteAtIndex(0)).to.throw(MyException);
    });
    it('throw error if index is > then LL length', function() {
      for (let i = 1; i < times + 1; i+=1) {
        node = new Node(i);
        lili.addNode(node);
        assert.equal(lili.length, i);
        assert.equal(lili.tail, node);
      }
      expect(() => lili.deleteAtIndex(11)).to.throw(MyException);
    });
    it('if LL length is 1, then head and tail must be null after delete', function(){
      lili.addNode(new Node(1));
      lili.deleteAtIndex(0);
      assert.equal(lili.length, 0);
      assert.equal(lili.head, null);
      assert.equal(lili.tail, null);
      lili.addNode(new Node(1)).addNode(new Node(2));
      lili.deleteAtIndex(0);
      assert.equal(lili.length, 1);
      assert.equal(lili.head.value, 2);
      assert.equal(lili.tail.value, 2);
    });
    it('check that function deletes Nodes correctly', function() {
      lili.addNode(new Node(1)).addNode(new Node(2)).addNode(new Node(5));
      assert.equal(lili.length, 3);
      lili.deleteAtIndex(1);
      assert.equal(lili.length, 2);
    });
    it('more improved test with random values', function() {
      let prevNode = new Node(3);
      let delNode = new Node(4);
      let nextNode = new Node(5);
      for (let i = 1; i < times + 1; i+=1) {
        var node = new Node(i);
        lili.addNode(node);
        assert.equal(lili.length, i);
        assert.equal(lili.tail, node);
      }
      lili.addNode(prevNode).addNode(delNode).addNode(nextNode);
      assert.equal(lili.length, times + 3);
      lili.deleteAtIndex(1);
      assert.equal(lili.length, times + 3 - 1);
      assert.equal(lili.getNode(times).next.value, nextNode.value);
    });
  });
  describe('#getNode', function() {
    var lili = new LinkedList();
    var times = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    beforeEach(function() {
      lili = new LinkedList();
    });
    it('throw error if LL is empty', function() {
      expect(() => lili.getNode(0)).to.throw(MyException);
    });
    it('throw error if index is > then LL length', function() {
      for (let i = 1; i < times + 1; i+=1) {
        var node = new Node(i);
        lili.addNode(node);
        assert.equal(lili.length, i);
        assert.equal(lili.tail, node);
      }
      expect(() => lili.getNode(11)).to.throw(MyException);
    });
    it('should return valid Node by it\'s index', function() {
      let searchNode = new Node(99);
      lili.addNode(new Node(1)).addNode(new Node(2)).addNode(searchNode).addNode(new Node(5));
      assert.equal(lili.getNode(2), searchNode);
      lili = new LinkedList();
      for (let i = 1; i < times + 1; i+=1) {
        var node = new Node(i);
        lili.addNode(node);
        assert.equal(lili.length, i);
        assert.equal(lili.tail, node);
      }
      assert.equal(lili.getNode(times-1), node);
    });
  });
  describe('#insertAt', function() {
    var lili = new LinkedList();
    var times = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    beforeEach(function() {
      lili = new LinkedList();
    });
    it('throw exception if function argument is not a Node instance', function() {
      expect(() => lili.insertAtIndex(0, 23)).to.throw(MyException);
    });
    it('throw error if index is > then LL length', function() {
      for (let i = 1; i < times + 1; i+=1) {
        var node = new Node(i);
        lili.addNode(node);
        assert.equal(lili.length, i);
        assert.equal(lili.tail, node);
      }
      expect(() => lili.insertAtIndex(11, new Node(22))).to.throw(MyException);
    });
    it('should work for empty LL if index is 0', function() {
      assert.equal(lili.length, 0);
      expect(() => lili.insertAtIndex(0, new Node(22))).not.to.throw(MyException);
      assert.equal(lili.head.value, 22);
      assert.equal(lili.length, 1);
    });
    it('should insert Node at correct index', function() {
      lili.addNode(new Node(1)).addNode(new Node(2)).addNode(new Node(3));
      lili.insertAtIndex(1, new Node(99));
    });
    it('should be a chainable function', function() {
      lili.addNode(new Node(1)).addNode(new Node(2)).insertAtIndex(1, new Node(99))
          .addNode(new Node(22)).insertAtIndex(3, new Node(32));
      assert.equal(lili.length, 5);
    });
  });
});