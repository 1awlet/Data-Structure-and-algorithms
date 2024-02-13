class MinHeap {
  constructor() {
    this.heap = [];
  }

  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }

  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }


  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  swap(index1, index2) {
    const temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }


  peek() {
    if (this.heap.length === 0) {
      return null;
    }
    return this.heap[0];
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }
  
}
