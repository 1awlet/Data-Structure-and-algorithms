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

