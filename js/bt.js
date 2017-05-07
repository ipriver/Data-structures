
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

BinTree.prototype.countElements = function(currentNode) {
  if (!this.root) return 0;
  if (!currentNode) currentNode = this.root;
  
};

BinTree.prototype.countValuesSum = function() {
  if (!this.root) return 0;

}

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

BinTree.prototype.searchNodeByItsValue = function(searchValue) {
  if (!searchValue) throw new MyException('No search value')
  if (!this.root) throw new MyException('No elements in BT');
  let currentNode = this.root;
  while (currentNode) {
    if (currentNode.value == searchValue) return currentNode;
    else {
      if (currentNode.left != null && currentNode.value >= searchValue) {
        currentNode = currentNode.left;
        continue;
      }
      else if (currentNode.right != null && currentNode.value <= searchValue) {
        currentNode = currentNode.right;
        continue;
      } else {
        return 'Not found';
      }
    }
  }

};

module.exports = {
  BinTree: BinTree,
  Node: Node,
  MyException: MyException
}