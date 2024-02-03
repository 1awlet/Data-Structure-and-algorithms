function bellmanFord(graph, V, E, src) {
    // Initialized distance of all vertices as infinite.
    const dist = new Array(V).fill(Infinity);
    // Distance to the source is always 0
    dist[src] = 0;

     //  A simple shortest path from src
    for (let i = 1; i <= V - 1; i++) {
        for (let j = 0; j < E; j++) {
            let u = graph[j][0];
            let v = graph[j][1];
            let weight = graph[j][2];
            if (dist[u] !== Infinity && dist[u] + weight < dist[v]) {
                dist[v] = dist[u] + weight;
            }
        }
    }

}
