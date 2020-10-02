class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    const node = new BinarySearchTree(value);
    const BTS = this;
    this.insertNode(node);
    return BTS;
  }

  insertNode(node) {
    let currentNode = this;
    while (currentNode) {
      //checks the value of the node we created is less than the value of the current node (default to this.root)
      if (node.value < currentNode.value) {
        //if currentnode.left doesnt exists
        if (!currentNode.left) {
          //set currentNode.left to the node we created
          currentNode.left = node;
          break;
        }
        //if currentNode.left exists update currentNode to be this.right
        currentNode = currentNode.left;
      } else if (node.value > currentNode.value) {
        if (!currentNode.right) {
          currentNode.right = node;
          break;
        }
        currentNode = currentNode.right;
      } else {
        break;
      }
    }
  }

  contains(value) {
    let currentNode = this;
    let flag = false;

    while (!flag) {
      if (value === currentNode.value) {
        flag = true;
      } else if (value > currentNode.value) {
        if (currentNode.right) {
          currentNode = currentNode.right;
        } else {
          return flag;
        }
      } else if (value < currentNode.value) {
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else {
          return flag;
        }
      }
    }
    return flag;
  }

  traverseDepthFirstInOrder(callback) {}
}
module.exports = BinarySearchTree;
/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   Basic Requirements:         X
|X   What is the time complexity X
|X   of the above functions?     X
|X               O(n)            X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
