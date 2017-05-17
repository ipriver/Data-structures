function MyException(message) {
   this.message = message;
   this.name = 'MyException';
}

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

LinkedList.prototype.removeLast = function() {
  let node = this.head;
  if(!node) throw new MyException('Linked List is already empty');
  if (!node.next) {
    this.head = null;
    this.tail = null;
  } else {
    while (node.next) {
      node = node.next;
    }
    node.prev.next = null;
    this.tail = node.prev;
  }
  this.length -= 1;
  return this;
};

module.exports = {
  Node: Node,
  LinkedList: LinkedList,
  MyException: MyException
}