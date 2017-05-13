
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
}

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

BinTree.prototype.countElements = function count(currentNode=this.root) {
  if (!this.root) return 0;
  if (!currentNode.left && !currentNode.right) return 1;
  if (currentNode.left && currentNode.right) {
    return 1 + count(currentNode.left) + count(currentNode.right);
  } else if (currentNode.left) {
    return 1 + count(currentNode.left);
  } else {
    return 1 + count(currentNode.right);
  }
};

BinTree.prototype.countValuesSum = function countSum(currentNode=this.root) {
  if (!this.root) return 0;
  if (!currentNode.left && !currentNode.right) return currentNode.value;
  if (currentNode.left && currentNode.right) {
    return currentNode.value + countSum(currentNode.left) + countSum(currentNode.right);
  } else if (currentNode.left) {
    return currentNode.value + countSum(currentNode.left);
  } else {
    return currentNode.value + countSum(currentNode.right);
  }
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

BinTree.prototype.searchNodeByItsValue = function(searchValue) {
  if (!searchValue) throw new MyException('No search value');
  if (!this.root) throw new MyException('No elements in BT');
  let currentNode = this.root;
  while (currentNode) {
    if (currentNode.value == searchValue) return currentNode;
    else {
      if (currentNode.left !== null && currentNode.value >= searchValue) {
        currentNode = currentNode.left;
        continue;
      }
      else if (currentNode.right !== null && currentNode.value <= searchValue) {
        currentNode = currentNode.right;
        continue;
      } else {
        return 'Not found';
      }
    }
  }
};

BinTree.prototype.countHeight = function getHeight(currentNode=this.root) {
  if (!this.root) return 0;
  if (!currentNode.left && !currentNode.right) return 1;
  if (currentNode.left && currentNode.right) {
    let left = getHeight(currentNode.left);
    let right = getHeight(currentNode.right);
    return left >= right ? 1 + left : 1 + right;
  } else if (currentNode.left) {
    return 1 + getHeight(currentNode.left);
  } else {
    return 1 + getHeight(currentNode.right);
  }
};

BinTree.prototype.countWidth = function getWidth() {
  return Math.pow(2, this.countHeight()-1);
};

BinTree.prototype.print = function() {
  let imageMap = '';
  let rootNode = '   [' + this.root.value + ']\n';
  rootNode += '  /  \\';
  let leftNode = '\n[' + this.root.left.value + ']';
  let rightNode = '   [' + this.root.right.value + ']\n';
  imageMap = rootNode + leftNode + rightNode;
  return imageMap;
};

module.exports = {
  BinTree: BinTree,
  Node: Node,
  MyException: MyException
};