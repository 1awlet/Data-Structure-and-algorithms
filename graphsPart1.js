class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // Add vertex
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  // Add edge
  addEdge(v1, v2) {
    if (!this.adjacencyList[v1]) this.addVertex(v1);
    if (!this.adjacencyList[v2]) this.addVertex(v2);
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1); // Omit this line for a directed graph
  }
}
