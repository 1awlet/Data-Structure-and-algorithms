
function PRIM_MST
    vs = vertices(G)
    T = new Graph(FIRST(vs), {})
    while ( |T| < |G| )
        L = {e | e ∈ edges(G) ∧ FROM(e) ∈ T ∧ TO(e) ∈ G}
        newE = min_eL weight(e)
        addVertex(T, TO(e))
        addEdge(T, newE)
    end while
end function
