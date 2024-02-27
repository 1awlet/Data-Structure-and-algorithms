function KRUSKAL_MST(G)
vs = vertices(G)
T = new Graph(vs, {})
F = new DisjointSet()
for v in vs do
    MAKE-SET(F, v)
L = sort(edges(G))
for e in L do
    if FIND(F, FROM(e)) ≠ FIND(F, TO(e))
        addEdge(T, e)
        UNION(F, FROM(e), TO(e))
end function

