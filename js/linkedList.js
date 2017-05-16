function Node(value) {
  this.value = value;
  this.next = null;
  this.prev = null;
}

function LinkedList() {
  this.length = 0;
  this.head = null;
  this.tail = null;
}

LinkedList.prototype.addNode = function(node) {
  this.length += 1;
  if (!this.head) {
    this.head = node;
    this.tail = node;    
  } else {
    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
  }
  return this;
};

module.exports = {
  Node: Node,
  LinkedList: LinkedList
}