
function Dijkstra(G, start, end)
    dist = new array; prev = new array
    Q = new min-heap(dist)
    for v ∈ G do
        if v = start then dist[v] = 0 else dist[v] = ∞
        INSERT(Q, v)
    while !EMPTY(Q) do
        u = EXTRACT-MIN(Q)
        if u = end then
            s = new stack()
            while u != start do
                PUSH(s, u); u = prev[u]
            return s
        for v ∈ NEIGHBOURS(G, u) do
            d = dist[u] + WEIGHT(G, u, v)
            if d < dist[v] then
                dist[v] = d
                prev[v] = u
                DECREASE-KEY(Q, v, dist[v])
    end function
