class DisjointSet {
    constructor() {
        this.parent = {};
    }

    makeSet(u) {
        this.parent[u] = u;
    }

    find(u) {
        if (this.parent[u] !== u) {
            this.parent[u] = this.find(this.parent[u]);
        }
        return this.parent[u];
    }

    union(u, v) {
        let uRoot = this.find(u);
        let vRoot = this.find(v);
        if (uRoot === vRoot) return;
        this.parent[uRoot] = vRoot;
    }
}

class Edge {
    constructor(from, to, weight) {
        this.from = from;
        this.to = to;
        this.weight = weight;
    }
}

class Graph {
    constructor(vertices) {
        this.vertices = vertices;
        this.edges = [];
    }

    addEdge(from, to, weight) {
        this.edges.push(new Edge(from, to, weight));
    }

    kruskalMST() {
        let mst = new Graph(this.vertices);
        let ds = new DisjointSet();

        this.vertices.forEach(vertex => ds.makeSet(vertex));
        this.edges.sort((a, b) => a.weight - b.weight);

        this.edges.forEach(edge => {
            let root1 = ds.find(edge.from);
            let root2 = ds.find(edge.to);

            if (root1 !== root2) {
                mst.addEdge(edge.from, edge.to, edge.weight);
                ds.union(root1, root2);
            }
        });

        return mst;
    }
}
