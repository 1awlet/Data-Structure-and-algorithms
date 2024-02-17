function EXTRACT-MAX(heap)
    max = heap[0]
    heap[0] = heap[heap_size-1]
    heap_size = heap_size - 1
    MAX-HEAPIFY(heap, 0)
    return max
end function
