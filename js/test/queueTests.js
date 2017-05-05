const Queue = require('../queue').Queue;
const MyException = require('../queue').MyException;
const assert = require('chai').assert;
const expect = require('chai').expect;


describe('Queue Tests', () => {
  describe('#Queue', () => {
    let queue = new Queue();
    it('create Queue object', () => {
      assert.instanceOf(queue, Queue, 'quque is not an instance of Queue');
    });
    it('check Queue properties', () => {
      assert.property(queue, 'queue');
      assert.property(queue, 'add');

    });
    it('queue maxLength default value = 0 if it is not provided', () => {
      assert.property(queue, 'maxLength');
      assert.equal(queue.queue, 0)
    });
    it('check different maxLength values', () => {
      let values = [4, 54432, 32, 999];
      for (let i=0; i<values.length; i+=1) {
        let queue = new Queue(values[i]);
        assert.equal(queue.maxLength, values[i])
      }
    });
    it('check incorrect maxLength values', () => {
      let values = [-1, [], null, 'sdfsds', {obj: 'sdfs'}];
      for (let i=0; i<values.length; i+=1) {
        expect(() => new Queue(values[i])).to.throw(MyException);
      }
    });
  })

  describe('#Add', () => {
    let maxLength = 5;
    it('add values', () => {
      let queue = new Queue(maxLength);
      queue.add(4);
      assert.deepEqual(queue.queue, [4]);
      queue.add(7);
      assert.deepEqual(queue.queue, [4, 7]);
      queue.add(2);
      assert.deepEqual(queue.queue, [4, 7, 2]);
    });
    it('add more values then maxLength', () => {
      let queue = new Queue(maxLength);
      for (let i=0; i < maxLength*2; i+=1) {
        queue.add(i);
      }
      assert.equal(queue.queue.length, maxLength);
    });
  });

  describe('#Remove', () => {
    it('Remove first element', () => {
      let maxLength = 10;
      let queue = new Queue(maxLength);
      for (let i=0; i < maxLength; i+=1) {
        queue.add(i);
      }
      for (let i=1; i < 6; i+=1) {
        queue.remove();
        assert.equal(queue.queue.length, maxLength-i);
      }
    });
    it('Remove more elements than maxLength', () => {
      let maxLength = 10;
      let queue = new Queue(maxLength);
      for (let i=0; i < maxLength; i+=1) {
        queue.add(i);
      }
      for (let i=0; i < maxLength*2; i+=1) {
        queue.remove();
        expect(() => queue.remove).not.to.throw(Error);
      }
      assert.equal(queue.queue.length, 0);
    });
  });

  describe('#Clean', () => {
    it('Deletes all elements in queue', () => {
      let maxLength = 10;
      let queue = new Queue(maxLength);
      for (let i=0; i < maxLength; i+=1) {
        queue.add(i);
      }
      queue.clean();
      assert.equal(queue.queue.length, 0);
    });
  });
});