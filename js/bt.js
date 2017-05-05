function BinTree() {
  this.head = null;
  this.left = null;
  this.right = null;

  this.add = function(obj, head=this.head) {
    if (!head) {
      head = obj;
    } else {
      head.value < obj.value ? (!this.left ? this.left = obj : 0) : (!this.right ? this.right = obj : 0); 
    }
  };
  this.print = function() {
    console.log(this);
  };
};

function Node(value) {
  this.head = null;
  this.value = value;
};

let Tree = new BinTree();
Tree.add(new Node(8));
Tree.add(new Node(3));
Tree.add(new Node(9));
Tree.add(new Node(2));
Tree.add(new Node(4));
Tree.print();

module.exports = BinTree;