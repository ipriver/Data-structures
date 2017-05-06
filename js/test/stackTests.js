const Stack = require('../stack').Stack;
const assert = require('chai').assert;
const expect = require('chai').expect;
const MyException = require('../stack').MyException;

describe('Stack tests', () => {
  describe('#stack', () => {
    let stack = new Stack(4);
    it('Check creation of stack', () => {
      assert.instanceOf(stack, Stack, 'stack is not instance of Stack');
    });
    it('Check stack properties', () => {
      assert.property(stack, 'maxLength');
      assert.property(stack, 'stack');
      assert.property(stack, 'add');
      assert.property(stack, 'clear');
      assert.property(stack, 'removeElement');
    });
    it('stack maxLength default value = 0 if it is not provided', () => {
      assert.property(stack, 'maxLength');
      assert.equal(stack.stack, 0)
    });
    it('check different maxLength values', () => {
      let values = [4, 54432, 32, 999];
      for (let i=0; i<values.length; i+=1) {
        let stack = new Stack(values[i]);
        assert.equal(stack.maxLength, values[i])
      }
    });
    it('check incorrect maxLength values', () => {
      let values = [-1, [], null, 'sdfsds', {obj: 'sdfs'}];
      for (let i=0; i<values.length; i+=1) {
        expect(() => new Stack(values[i])).to.throw(MyException);
      }
    });
  });

  describe('#add', () => {
    let maxLength = 5;
    it('add values correctly', () => {
      let stack = new Stack(maxLength);
      stack.add(3);
      assert.deepEqual(stack.stack, [3]);
      stack.add(3);
      assert.deepEqual(stack.stack, [3, 3]);
      stack.add(3);
      assert.deepEqual(stack.stack, [3, 3, 3]);
    });
    it('add more values then maxLength', () => {
      
      let stack = new Stack(maxLength);
      for (let i=0; i < maxLength*2; i+=1) {
        stack.add(i);
      }
      assert.equal(stack.stack.length, maxLength);
    });
  });
  describe('#removeElement', () => {
    let maxLength = 5;
    it('check if last element was deleted', () => {
      let stack = new Stack(maxLength);
      for (let i=1; i < maxLength+1; i+=1) {
        stack.add(i);
      }
      assert.equal(stack.stack.length, maxLength);
      stack.removeElement();
      assert.equal(stack.stack.length, maxLength-1);
      assert.deepEqual(stack.stack, [1,2,3,4]);
      stack.removeElement();
      assert.equal(stack.stack.length, maxLength-2);
      assert.deepEqual(stack.stack, [1,2,3]);
      stack.removeElement();
      assert.equal(stack.stack.length, maxLength-3);
      assert.deepEqual(stack.stack, [1,2]);
    });
    it('check if we will try to delete more elements', () => {
      let stack = new Stack(maxLength);
      for (let i=1; i < maxLength+1; i+=1) {
        stack.add(i);
      }
      for (let i=0; i< maxLength * 2; i+=1) {
        stack.removeElement();
        expect(() => stack.removeElement).not.to.throw(Error);
      }
      assert.deepEqual(stack.stack, []);
      assert.equal(stack.stack.length, 0);
    });
    describe('#clear', () => {
      it('check that clear clears all stack', () => {
        let stack = new Stack(10);
        for (let i=0; i < maxLength; i+=1) {
          stack.add(i);
        }
        stack.clear();
        assert.equal(stack.stack.length, 0);
      });
    });
    describe('#chains', () => {
      it('Test add.removeElement chain', () => {
        let stack = new Stack(10);
        stack.add(1).removeElement();
        assert.deepEqual(stack.stack, []);
        stack.add(1).add(1).add(2).add(2).removeElement().removeElement();
        assert.deepEqual(stack.stack, [1,1]);
        stack.clear();
        stack.add(2).add(3).add(4);
        assert.deepEqual(stack.stack, [2,3,4]);
      });
      it('Test clear chain', () => {
        let stack = new Stack(10);
        stack.add(2).add(3).add(4).clear().add(2);
        assert.deepEqual(stack.stack, [2]);
        stack = new Stack(10);
        stack.add(2).add(3).add(4).clear().add(2).clear().clear();
        assert.deepEqual(stack.stack, []);
      });
      it('Test chain from the begining of object creation', () => {
        let stack = new Stack(10).add(1).add(2).add(3);
        assert.deepEqual(stack.stack, [1,2,3]);
        stack = new Stack(10).add(1).removeElement().add(2).add(3).clear();
        assert.deepEqual(stack.stack, []);
      });
    });
  });
});