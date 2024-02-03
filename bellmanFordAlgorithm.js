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


    for (let i = 0; i < E; i++) {
        let u = graph[i][0];
        let v = graph[i][1];
        let weight = graph[i][2];
        if (dist[u] !== Infinity && dist[u] + weight < dist[v]) {
            console.log("Graph contains negative weight cycle");
            return;
        }
    }

    return dist;

}


const V = 5; 
const E = 8; 
const graph = [
    [0, 1, -1],
    [0, 2, 4],
    [1, 2, 3],
    [1, 3, 2],
    [1, 4, 2],
    [3, 2, 5],
    [3, 1, 1],
    [4, 3, -3]
];


const src = 0; 
const distances = bellmanFord(graph, V, E, src);

if (distances) {
    console.log("Vertex Distance from Source");
    distances.forEach((distance, index) => {
        console.log(`${index} \t\t ${distance}`);
    });
}
