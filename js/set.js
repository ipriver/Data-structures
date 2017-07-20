function MSet() {
  this.collection = [];
}

MSet.prototype.values = function() {
  return this.collection;
};

MSet.prototype.has = function(element) {
  return this.collection.indexOf(element) !== -1;
};

MSet.prototype.length = function() {
  return this.collection.length;
}

MSet.prototype.add = function(element) {
  if (!this.has(element)) {
    this.collection.push(element);
  }
  return this;
};

MSet.prototype.del = function(element) {
  if (this.has(element)) {
    this.collection.splice(this.collection.indexOf(element), 1);
  } else if (this.length() == 0) {
    console.log("set is empty");
  } else {
    console.log("set has no element " + element + ", nothing to delete");
  }
  return this;
};

MSet.prototype.union = function(secSet) {
  for (var i=0; i<secSet.length(); i++) {
    var value = secSet.values()[i];
    if (!this.has(value)) {
      this.add(value);
    }
  }
  return this;
};

MSet.prototype.intersection = function(secSet) {
  var newSet = new MSet();
  var longSet = this.length() > secSet.length() ? this : secSet;
  var shortSet = this.length() <= secSet.length() ? this : secSet;
  for (var i=0; i<longSet.length(); i++) {
    var value = longSet.values()[i];
    if (shortSet.has(value)) {
      newSet.add(value);
    }
  }
  return newSet;
};

MSet.prototype.difference = function(secSet) {
  var newSet = new MSet();
  for (var i=0; i<this.length(); i++) {
    var value = this.values()[i];
    if (!secSet.has(value) && !newSet.has(value)) {
      newSet.add(value);
    }
  }
  for (var i=0; i<secSet.length(); i++) {
    var value = secSet.values()[i];
    if (!this.has(value) && !newSet.has(value)) {
      newSet.add(value);
    }
  }
  return newSet;
};

MSet.prototype.subset = function(secSet) {
  var count = 0;
  for (var i=0; i<this.length(); i++) {
    if (secSet.has(this.collection[i])) {
      count += 1;
    }
  }
  return count == this.length() ? true : false;
};
