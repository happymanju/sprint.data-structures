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

  contains(targetNode) {
    for (let node in this.nodes) {
      if (node == targetNode) {
        return true;
      }
    }
    return false;
  }

  addEdge(node1, node2) {
    if (!this.nodes[node1] || !this.nodes[node2]) {
      return "Invalid node value";
    }
    if (
      this.nodes[String(node1)].includes(node2) ||
      this.nodes[String(node2)].includes(node1)
    ) {
      return "duplicate edge";
    }
    this.nodes[node1].push(node2);
    this.nodes[node2].push(node1);
    return;
  }

  removeEdge(node1, node2) {
    if (!this.nodes[node1] || !this.nodes[node2]) {
      return "Invalid node value";
    }
    if (
      this.nodes[String(node1)].includes(node2) ||
      this.nodes[String(node2)].includes(node1)
    ) {
      this.nodes[node1].splice(this.nodes[node1].indexOf(node2), 1);
      this.nodes[node2].splice(this.nodes[node2].indexOf(node1), 1);
    }
    return;
  }

  hasEdge(node1, node2) {
    const node1Array = this.nodes[node1];
    const node2Array = this.nodes[node2];
    if (!node1Array || !node2Array) {
      return "Invalid node value";
    } else if (!node1Array && !node2Array) {
      return "Invalid node value";
    }
    if (node1Array.includes(node2) && node2Array.includes(node1)) {
      return true;
    }
    return false;
  }
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
