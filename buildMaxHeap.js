function buildMaxHeap(A) {
    let heapSize = A.length;
    for (let i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
        maxHeapify(A, heapSize, i);
    }
}



function maxHeapify(A, heapSize, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < heapSize && A[left] > A[largest]) {
        largest = left;
    }

    if (right < heapSize && A[right] > A[largest]) {
        largest = right;
    }

    if (largest != i) {
        [A[i], A[largest]] = [A[largest], A[i]];
        maxHeapify(A, heapSize, largest);
    }
}

// SHould output max heap
let A = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7];
buildMaxHeap(A);
console.log(A);
