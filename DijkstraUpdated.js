class PriorityQueue {
  constructor() {
    this.collection = [];
  }

  enqueue(element) {
    if (this.isEmpty()) {
      this.collection.push(element);
    } else {
      let added = false;
      for (let i = 1; i <= this.collection.length; i++) {
        if (element[1] < this.collection[i - 1][1]) {
          this.collection.splice(i - 1, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        this.collection.push(element);
      }
    }
  }

  dequeue() {
    return this.collection.shift();
  }

  isEmpty() {
    return this.collection.length === 0;
  }
}



function dijkstra(graph, startNode, endNode) {
  let distances = {};
  let prev = {};
  let pq = new PriorityQueue();
  
  // Initialize distances and pq
  for (let node in graph) {
    if (node === startNode) {
      distances[node] = 0;
      pq.enqueue([node, 0]);
    } else {
      distances[node] = Infinity;
    }
    prev[node] = null;
  }
  
  while (!pq.isEmpty()) {
    let [smallest, smallestDist] = pq.dequeue();
    
    if (smallest === endNode) {
      // We found the end node, reconstruct the path
      let path = [];
      while (prev[smallest]) {
        path.push(smallest);
        smallest = prev[smallest];
      }
      path.push(startNode);
      return path.reverse();
    }
    
    if (smallest || distances[smallest] !== Infinity) {
      for (let neighbor in graph[smallest]) {
        let alt = distances[smallest] + graph[smallest][neighbor];
        if (alt < distances[neighbor]) {
          distances[neighbor] = alt;
          prev[neighbor] = smallest;
          pq.enqueue([neighbor, distances[neighbor]]);
        }
      }
    }
  }

  return distances;
}




const graph = {
  A: {B: 1, C: 4},
  B: {A: 1, C: 2, D: 5},
  C: {A: 4, B: 2, D: 1},
  D: {B: 5, C: 1}
};

console.log(dijkstra(graph, 'A', 'D'));
