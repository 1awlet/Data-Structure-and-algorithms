# Pseudocode for the Quick Sort algorithm
function quickSort(A, low, high) {
    if (low < high) {
        // Partition the array and get the pivot's index
        const p = partition(A, low, high);
        
        // Recursively sort the elements to the left of the pivot
        quickSort(A, low, p - 1);
        
        // Recursively sort the elements to the right of the pivot
        quickSort(A, p + 1, high);
    }
}



function partition(A, low, high) {
    // Choose the pivot (in this example, we'll choose the rightmost element)
    const pivot = A[high];
    let i = low - 1; // Index of the smaller element
    
    for (let j = low; j < high; j++) {
        // If the current element is smaller than or equal to the pivot
        if (A[j] <= pivot) {
            i++; // Increment the index of the smaller element
            // Swap A[i] and A[j]
            const temp = A[i];
            A[i] = A[j];
            A[j] = temp;
        }
    }
    
    // Swap A[i + 1] and the pivot
    const temp = A[i + 1];
    A[i + 1] = A[high];
    A[high] = temp;
    
    return i + 1; // Return the index of the pivot
}
