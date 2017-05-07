
function MyException(message) {
   this.message = message;
   this.name = 'MyException';
}

function Node(value) {
  if (!value) throw new MyException('No value');
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinTree() {
  this.root = null;
};

BinTree.prototype.addNode = function(node) {
  if (!(node instanceof Node)) throw new MyException('Not a Node');
  if (!this.root) {
    this.root = node;
    return this;
  }
  let currentNode = this.root;
  while (currentNode) {
    if (currentNode.value >= node.value) {
      if (currentNode.left) {
        currentNode = currentNode.left;
      } else {
        currentNode.left = node;
        break;
      }
    } else {
      if (currentNode.right) {
        currentNode = currentNode.right;
      } else {
        currentNode.right = node;
        break;
      }
    }
  }
  return this;
};

BinTree.prototype.countElements = function(currentNode, count=0) {
  if (!this.root) return 0;
  count += 1;
  if (!currentNode) currentNode = this.root;
  if (!currentNode.left && !currentNode.right) return count;
  if (!currentNode.left && currentNode.right) return this.countElements(currentNode.right);
  if (currentNode.left && !currentNode.right) return this.countElements(currentNode.left);
  return this.countElements(currentNode.left) + this.countElements(currentNode.right);
};

BinTree.prototype.getMin = function() {
  if (!this.root) throw new MyException('No elements in BT');
  let currentNode = this.root;
  while (currentNode.left) {
    currentNode = currentNode.left;
  }
  return currentNode.value;
};

BinTree.prototype.getMax = function() {
  if (!this.root) throw new MyException('No elements in BT');
  let currentNode = this.root;
  while (currentNode.right) {
    currentNode = currentNode.right;
  }
  return currentNode.value;
};
/*
let bt = new BinTree();
bt.addNode(new Node(5));
bt.addNode(new Node(3));
bt.addNode(new Node(9));
bt.addNode(new Node(1));

console.log(bt.countElements())
*/
module.exports = {
  BinTree: BinTree,
  Node: Node,
  MyException: MyException
}