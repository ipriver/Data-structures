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
  if (!(node instanceof Node)) throw new MyException('input is not a Node');
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

LinkedList.prototype.clean = function() {
  let node = this.tail;
  if(!node) throw new MyException('Linked List is already empty');
  function recursiveRm(node) {
    if (node.next) node.next.prev = null;
    node.next = null;
    node.value = null;
    this.length -= 1;
    if (!node.prev) {
      node.value = null;
      return 0;
    }
    return recursiveRm.call(this, node.prev);
  }
  recursiveRm.call(this, node);
  this.head = null;
  this.tail = null;
  return this;
};

LinkedList.prototype.getNode = function(index, notSkip=true) {
  let node = this.head;
  if(notSkip && !node) throw new MyException('Linked List is already empty');
  if (index > this.length || index < 0) throw new MyException('invalid index input');
  for (let i = 0; i < index; i += 1) {
    node = node.next;
  }

  return node;
};

LinkedList.prototype.insertAtIndex = function(index, newNode) {
  if (!(newNode instanceof Node)) throw new MyException('input is not a Node');
  node = this.getNode(index, false);
  if (node === null) {
    this.addNode(newNode);
    return this;
  } else if (this.head == node) {
    newNode.next = node;
    node.prev = newNode;
    this.head = newNode;
  } else {
    node.prev.next = newNode;
    node.prev = newNode;
    newNode.next = node;
  }
  this.length += 1;
  return this;
};

LinkedList.prototype.deleteAtIndex = function(index) {
  node = this.getNode(index);
  if (index === 0) {
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.getNode(1);
    }
  }
  if (node.prev) node.prev.next = node.next;
  if (node.next) node.next.prev = node.prev;
  this.length -= 1;
  node.next = null;
  node.prev = null;
  node.value = null;
  return this;
};

module.exports = {
  Node: Node,
  LinkedList: LinkedList,
  MyException: MyException
};