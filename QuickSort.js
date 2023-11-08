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



