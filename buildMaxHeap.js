
function BUILD-MAX-HEAP(A)
    heap_size = A.length
    for  FLOOR(heap_size/2) > j >=0
        MAX-HEAPIFY(A, j)
    end for
end function
