class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.children = [null, null];
    this.left = this.children[0];
    this.right = this.children[1];
  }
  insert(value) {}

  contains(value) {}
  traverseDepthFirstInOrdr(callback) {}
}
module.exports = BinarySearchTree;
/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   Basic Requirements:         X
|X   What is the time complexity X
|X   of the above functions?     X
|X               O(n)                X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
