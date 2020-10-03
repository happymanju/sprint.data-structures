class Graph {
  constructor() {
    /**
     * There are many representations of Graph.
     * We can store Graph in many ways.
     * One way is by using Adjacency List.
     */
    this.nodes = {}; // Adjacency List
  }

  addNode(node) {
    if (this.nodes[node]) {
      this.nodes[node] = this.nodes[node];
    } else {
      this.nodes[node] = [];
    }

    return;
  }

  removeNode(node) {
    if (!this.nodes[node]) {
      return `${node} does not exist. Please enter a valid node.`;
    } else {
      for (let otherNode in this.nodes) {
        if (this.nodes[otherNode].includes(node)) {
          const removeIndex = this.nodes[otherNode].indexOf(node);
          this.nodes[otherNode].splice(removeIndex, 1);
        }
      }
      delete this.nodes[node];
    }
    return;
  }

  contains(targetValue) {}

  addEdge(node1, node2) {}

  removeEdge(node1, node2) {}

  hasEdge(node) {}
}

module.exports = Graph;

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
