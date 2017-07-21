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
        var setES = new Set();
        for (var j=0; j<leArr; j++) {
          var value = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
          se.add(value);
          setES.add(value);
        }
        assert.deepEqual(se.values(), Array.from(setES.values()));
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
  describe('#Set add()', function() {
    it('function add should add elements into the MSet', function() {
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
        assert.deepEqual(se.values(), Array.from(setES.values()));
      }  
    });
  });
  describe('#Set del()', function() {
    it('function del should remove elemet from MSet', function() {
      var times = Math.floor(Math.random() * (1000 - 10 + 1)) + 10;
      var se = new MSet();
      var setES = new Set();
      for (var i=0; i<times; i++) {
        var value = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
        se.add(value);
        setES.add(value);
      }
      var ntimes = Math.floor(Math.random() * (100 - 10 + 1)) + 10;
      for (var i=0; i<ntimes; i++) {
        assert.deepEqual(se.values(), Array.from(setES.values()));
        var delVal = Array.from(setES.values())[times-1];
        if (!se.has(delVal)) { continue; }
        se.del(delVal);
        setES.delete(delVal)
        assert.deepEqual(se.values(), Array.from(setES.values()));
      }
    });
  });
  describe('#Set union()', function() {
    it('function should union sets correclty', function() {
      var times = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
      for (var i=0; i<times; i++) {
        var se = new MSet();
        var se2 = new MSet();
        var setES = new Set();
        var setES2 = new Set();
        var nElem = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
        for (var i=0; i<nElem; i++) {
          var value = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
          var value2 = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
          se.add(value);
          se2.add(value);
          setES.add(value);
          setES2.add(value);
        }
        assert.deepEqual(se.values(), Array.from(setES.values()));
        assert.deepEqual(se2.values(), Array.from(setES2.values()));

        Set.prototype.union = function(setB) {
          var union = new Set(this);
          for (var elem of setB) {
            union.add(elem);
          }
          return union;
        }
        
        assert.deepEqual(se.union(se2).values(), Array.from(setES.union(setES2)));
      }
    });
  });
  describe('#Set intersection()', function() {
    it('', function() {});
  });
  describe('#Set difference()', function() {
    it('', function() {});
  });
  describe('#Set subset()', function() {
    it('', function() {});
  });
});
