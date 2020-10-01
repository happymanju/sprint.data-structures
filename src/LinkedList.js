function Node(value) {
  this.next = null;
  this.value = value;
}

class LinkedList {
  constructor(headValue) {
    if (headValue !== undefined) {
      this.head = new Node(headValue);
      this.tail = this.head;
    }
  }

  appendToTail(value) {
    if (this.head === undefined) {
      this.head = new Node(value);
      this.tail = this.head;
      return this.head;
    }
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    return newNode;
  }

  removeHead() {
    const headJar = this.head;
    const rebellion = this.head.next;
    this.head = rebellion;
    return headJar;
  }

  findNode(value) {
    let node = this.head;

    while (node.next !== null) {
      if (node.value === value) return node;
      node = node.next;
    }
    return null;
  }

  /*
+-------------------------+
| Advanced Requirements!! |
+-------------------------+

The following are part of the advanced requirements.
Do not proceed until you are done with the basic
requirements for ALL data structures in this exercise.
*/

  forEach(callback) {}

  print() {}

  insertHead(value) {}

  insertAfter(refNode, value) {}

  removeAfter(refNode) {}
}
module.exports = LinkedList;

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   Basic Requirements:         X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
