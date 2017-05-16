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
  describe('#countElements', function() {
    it('return 0 for empty BT', function() {
      const bt = new BinTree();
      assert.equal(bt.countElements(), 0);
    });
    it('test if count function counts correctly', function() {
      let bt = new BinTree();
      bt.addNode(new Node(20));
      bt.addNode(new Node(30));
      bt.addNode(new Node(29));
      bt.addNode(new Node(10));
      bt.addNode(new Node(14));
      bt.addNode(new Node(44));
      bt.addNode(new Node(10));
      bt.addNode(new Node(18));
      bt.addNode(new Node(1));
      bt.addNode(new Node(9));
      bt.addNode(new Node(12));
      assert.equal(bt.countElements(), 11);
      bt = new BinTree();
      let times = Math.floor(Math.random() * (15 - 1 + 1)) + 1;
      for (let i=5; i < times+5; i+=1) {
        bt.addNode(new Node(Math.floor(Math.random() * (15 - 1 + 1)) + 1 ));
      }
      assert.equal(bt.countElements(), times);
    });
  });
  describe('#countSum by Nodes Values', function() {
    it('return 0 for empty BT', function() {
      const bt = new BinTree();
      assert.equal(bt.countElements(), 0);
    });
    it('return sum of the whole BinTree nodes', function() {
      let bt = new BinTree();
      bt.addNode(new Node(20));
      bt.addNode(new Node(30));
      bt.addNode(new Node(29));
      bt.addNode(new Node(10));
      bt.addNode(new Node(1));
      bt.addNode(new Node(9));
      bt.addNode(new Node(12));
      assert.equal(bt.countValuesSum(), 111);
      bt = new BinTree();
      let times = Math.floor(Math.random() * (15 - 1 + 1)) + 1;
      let sum = 0;
      for (let i=5; i < times+5; i+=1) {
        let nodeValue = Math.floor(Math.random() * (15 - 1 + 1)) + 1 ;
        bt.addNode(new Node(nodeValue));
        sum += nodeValue;
      }
      assert.equal(bt.countValuesSum(), sum);
    });
  });
  describe('#searchNodeByItsValue', function() {
    const bt = new BinTree();
    it('throw an error if search value is empty', function() {
      expect(() => bt.searchNodeByItsValue(4)).to.throw(MyException);
    });
    it('throw an error if BT is empty', function() {
      expect(() => bt.searchNodeByItsValue()).to.throw(MyException);
    });
    it('check if it works correctly', function() {
      const bt = new BinTree();
      let searchNode = new Node(1);
      bt.addNode(new Node(5));
      bt.addNode(new Node(3));
      bt.addNode(new Node(9));
      bt.addNode(new Node(1));
      bt.addNode(new Node(4));
      assert.deepEqual(bt.searchNodeByItsValue(1).value, searchNode.value);
      assert.equal(bt.searchNodeByItsValue(24), 'Not found');
      assert.deepEqual(bt.searchNodeByItsValue(9).value, 9);

      parent = bt.searchNodeByItsValue(3);
      assert.equal(parent.left, bt.searchNodeByItsValue(1));
      assert.equal(parent.right, bt.searchNodeByItsValue(4));
    });
  });
  describe('#countHeight', function() {
    it('check height', function() {
      let bt = new BinTree();
      bt.addNode(new Node(5)).addNode(new Node(2)).addNode(new Node(7));
      assert.equal(bt.countHeight(), 2);
      bt = new BinTree();
      bt.addNode(new Node(11)).addNode(new Node(8)).addNode(new Node(13)).addNode(new Node(7))
        .addNode(new Node(9)).addNode(new Node(12)).addNode(new Node(21)).addNode(new Node(17))
        .addNode(new Node(6)).addNode(new Node(5)).addNode(new Node(4)).addNode(new Node(3));
      assert.equal(bt.countHeight(), 7);
    });
  });
  describe('#countWidth', function() {
    let bt = new BinTree();
    it('width should return correct value', function() {
      let testHeight = 7;
      bt.addNode(new Node(5)).addNode(new Node(2)).addNode(new Node(7));
      assert.equal(bt.countWidth(), 2);
      bt = new BinTree();
      bt.addNode(new Node(11)).addNode(new Node(8)).addNode(new Node(13)).addNode(new Node(7))
        .addNode(new Node(9)).addNode(new Node(12)).addNode(new Node(21)).addNode(new Node(17))
        .addNode(new Node(6)).addNode(new Node(5)).addNode(new Node(4)).addNode(new Node(3));
      assert.equal(bt.countWidth(), 64);  
    });
  });
  describe('#isValid', function() {
    it('throws error if BT has no nodes', function() {
      const bt = new BinTree();
      expect(() => bt.isValid.to.throw(MyException));
    });
    it('should return true for valid BT', function() {
      const bt = new BinTree();
      let times = Math.floor(Math.random() * (15 - 1 + 1)) + 1;
      for (let i=5; i < times+5; i+=1) {
        let rand = Math.floor(Math.random() * (15 - 1 + 1)) + 1;        
        bt.addNode(new Node(rand));
      }
      assert.equal(bt.isIsValid(), true);
    });
    it('should return false for invalid BT', function() {
      const bt = new BinTree();
      let invalid = new Node(7);
      invalid.left = new Node(888);
      bt.addNode(new Node(5)).addNode(new Node(2)).addNode(invalid);
      assert.equal(bt.isIsValid(), false);
    });
  });  
  describe('#getNodesParent', function() {
    it('should work correctly for small BT', function() {
      const bt = new BinTree();
      let parent = new Node(5);
      let search = new Node(3);
      bt.addNode(new Node(5)).addNode(search).addNode(new Node(4)).addNode(new Node(1));
      assert.typeOf(bt.getNodesParent(search), 'object');
      assert.equal(bt.getNodesParent(search).value, parent.value);
    });
    it('should work correctly for big BT', function() {
      const bt = new BinTree();
      let parent = new Node(5);
      let search = new Node(4);
      bt.addNode(new Node(11)).addNode(new Node(8)).addNode(new Node(13)).addNode(new Node(7))
        .addNode(new Node(9)).addNode(new Node(12)).addNode(new Node(21)).addNode(new Node(17))
        .addNode(new Node(6)).addNode(new Node(5)).addNode(new Node(4)).addNode(new Node(3));
      console.log(bt.getNodesParent(search), 'sssssssssss')
      assert.typeOf(bt.getNodesParent(search), 'object');
      assert.equal(bt.getNodesParent(search).value, parent.value);
    });
  });
  //TODO: FIX remove function and tets, something works incorrectly 
  describe.skip('#remove', function() {
    it('check if root is deleted and length is 0 and root is null', function() {
      const bt = new BinTree();
      bt.addNode(new Node(11)).addNode(new Node(8)).addNode(new Node(13)).addNode(new Node(7))
        .addNode(new Node(9)).addNode(new Node(12)).addNode(new Node(21)).addNode(new Node(17))
        .addNode(new Node(6)).addNode(new Node(5)).addNode(new Node(4)).addNode(new Node(3));
      bt.removeNodeByItsValue(11);
      assert.equal(bt.countElements(), 0);
    });
    it('should remove element from BT', function() {
      const bt = new BinTree();
      bt.addNode(new Node(5)).addNode(new Node(2)).addNode(new Node(7));
      assert.equal(bt.countElements(), 3);
      bt.removeNodeByItsValue(7);
      assert.equal(bt.countElements(), 2);
      bt.removeNodeByItsValue(2);
      assert.equal(bt.countElements(), 1);
    });
    it('check that child Nodes wont be deleted with Node', function(){
      let bt = new BinTree();
      bt.addNode(new Node(11)).addNode(new Node(8)).addNode(new Node(13)).addNode(new Node(7))
        .addNode(new Node(9)).addNode(new Node(12)).addNode(new Node(21)).addNode(new Node(17))
        .addNode(new Node(6)).addNode(new Node(5)).addNode(new Node(4)).addNode(new Node(3));
      let prevCount = bt.countElements();
      bt.removeNodeByItsValue(8);
      assert.equal(bt.countElements(), prevCount - 1);
    
      let times = Math.floor(Math.random() * (15 - 1 + 1)) + 1;
      for (let i=5; i < times+5; i+=1) {
        var rand = Math.floor(Math.random() * (15 - 1 + 1)) + 1;        
        bt.addNode(new Node(rand));
      }
      assert.equal(bt.countElements(), times + 11);
      prevCount = bt.countElements();
      bt.removeNodeByItsValue(rand);
      assert.equal(bt.countElements(), prevCount - 1);
    });
    it('check if BT is valid after deleting Node', function() {
      let bt = new BinTree();
      bt.addNode(new Node(11)).addNode(new Node(8)).addNode(new Node(13)).addNode(new Node(7))
        .addNode(new Node(9)).addNode(new Node(12)).addNode(new Node(21)).addNode(new Node(17))
        .addNode(new Node(6)).addNode(new Node(5)).addNode(new Node(4)).addNode(new Node(3));
      let prevCount = bt.countElements();
      bt.removeNodeByItsValue(8);
      assert.equal(bt.countElements(), prevCount - 1);
      assert.equal(bt.isIsValid(), true);
      
      let times = Math.floor(Math.random() * (15 - 1 + 1)) + 1;
      for (let i=5; i < times+5; i+=1) {
        var rand = Math.floor(Math.random() * (15 - 1 + 1)) + 1;        
        bt.addNode(new Node(rand));
      }
      assert.equal(bt.countElements(), times + 11);
      prevCount = bt.countElements();
      bt.removeNodeByItsValue(rand);
      assert.equal(bt.isIsValid(), true);
      assert.equal(bt.countElements(), prevCount - 1);
    });
  });
});