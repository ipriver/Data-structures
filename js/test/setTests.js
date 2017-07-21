const assert = require('chai').assert;
const expect = require('chai').expect;
const MSet = require('../set').MSet;

describe('Set', function(){
  describe('#Set basic tests', function() {
    var se = new MSet();
     it('check if it\'s a MSet object',function(){
      assert.instanceOf(se, MSet);
    });
    it('check if MSet has it\'s properties', function() {
      assert.property(se, 'collection');
      assert.deepEqual(se.collection, []);
      assert.property(se, 'values');
      assert.property(se, 'has');
      assert.property(se, 'length');
      assert.property(se, 'add');
      assert.property(se, 'del');
      assert.property(se, 'union');
      assert.property(se, 'intersection');
      assert.property(se, 'difference');
      assert.property(se, 'subset');
      assert.typeOf(se.values, 'function');
      assert.typeOf(se.has, 'function');
      assert.typeOf(se.length, 'function');
      assert.typeOf(se.add, 'function');
      assert.typeOf(se.del, 'function');
      assert.typeOf(se.union, 'function');
      assert.typeOf(se.intersection, 'function');
      assert.typeOf(se.difference, 'function');
      assert.typeOf(se.subset, 'function');
    });
  });
  describe('#Set values()', function() {
    it('values should return MSet collection', function() {
      var times = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
      for (var i=0; i<times; i++) {
        var se = new MSet();
        var leArr = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
        var arr = [];
        for (var j=0; j<leArr; j++) {
          var value = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
          se.add(value);
          arr.push(value);
        }
        assert.deepEqual(se.values(), arr);
      }  
    });
  });
  describe('#Set has()', function() {
    it('has should return MSet boolean if element is in set', function() {
      var times = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
      for (var i=0; i<times; i++) {
        var se = new MSet();
        var leArr = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
        var arr = [];
        for (var j=0; j<leArr; j++) {
          var value = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
          se.add(value);
          arr.push(value);
        }
        var index = Math.floor(Math.random() * ((leArr-1) - 1 + 1)) + 1;
        var randNegative = Math.floor(Math.random() * (-1000 - (-11) + 1)) - 11;
        assert.equal(se.has(arr[index]), true);
        assert.equal(se.has(randNegative), false);
      }
    });  
  });
  describe('#Set length()', function() {
    it('should return length of MSet.collection', function() {
    var times = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    for (var i=0; i<times; i++) {
      var se = new MSet();
      var setES = new Set();
      var leArr = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
      for (var j=0; j<leArr; j++) {
          var value = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
          se.add(value);
          setES.add(value);
      }
      assert.equal(se.length(), setES.size);
    }  
    });
  });
});
