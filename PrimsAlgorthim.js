function primMST(graph) {
  const vertices = graph.vertices();
  const T = new Graph([vertices[0]], []);

  while (T.vertices.length < graph.vertices.length) {
    let edges = graph.edges.filter(e => 
      T.vertices.includes(e.from) && !T.vertices.includes(e.to)
    );

    if (edges.length === 0) {
      // No more edges to add, which means the mst is complete or the graph is not fully connected
      break;
    }


    edges.sort((a, b) => a.weight - b.weight);
    // Edge with the smallest weight
    let newE = edges[0]; 

    T.addVertex(newE.to);
    T.addEdge(newE); 
  }

  return T;
}


function Graph(vertices, edges) {
  this.vertices = vertices || [];
  this.edges = edges || [];

  // Adds a vertex if it does not exist
  this.addVertex = function(vertex) {
    if (!this.vertices.includes(vertex)) {
      this.vertices.push(vertex);
    }
  };

  // Adds an edge
  this.addEdge = function(edge) {
    this.edges.push(edge);
  };
}
