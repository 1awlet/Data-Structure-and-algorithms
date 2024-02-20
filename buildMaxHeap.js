function buildMaxHeap(A) {
    let heapSize = A.length;
    for (let i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
        maxHeapify(A, heapSize, i);
    }
}
