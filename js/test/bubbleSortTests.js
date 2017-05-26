const bubbleSort = require('../bubbleSort');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('BubbleSort function', function() {
  it('Check that BS is a function', function() {
    assert.typeOf(bubbleSort, 'function');
  });
  it('Should work with different arrays', function() {
    var times = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    for (let i = 1; i < times + 1; i+=1) {
      let arrLength = Math.floor(Math.random() * (100 - 50 + 1) + 50);
      let myArr = [];
      for (let j = 0; j < arrLength; j += 1) {
        let numb = Math.floor(Math.random() * (9999 - 1 + 1) + 1);
        if (Math.floor(Math.random() * (1 - 0 + 1) + 0)) {
          numb *= -1;
        }
        myArr.push(numb);
      }
      assert.equal(bubbleSort(myArr), myArr.sort());
    }
  });
});