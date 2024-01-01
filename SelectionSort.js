// Define a function called 'selectionSort' that sorts an array 'A' using the selection sort algorithm.
function selectionSort(A) {
    const N = A.length; // Get the length of the array 'A'.
    
    for (let i = 0; i < N - 1; i++) {
        let min = i; // Assume the current index 'i' has the minimum value.
        
        // Find the index of the minimum element in the unsorted portion of the array.
        for (let j = i + 1; j < N; j++) {
            if (A[j] < A[min]) {
                min = j; // Update 'min' to the index of the new minimum element.
            }
        }
        
        // Swap the current element (A[i]) with the minimum element (A[min]).
        if (min !== i) {
            const temp = A[i];
            A[i] = A[min];
            A[min] = temp;
        }
    }
}

// Define an optimized sort function 'optimizedSort' that uses the built-in sort method.
function optimizedSort(arr) {
    // Use the built-in sort method to sort the array in ascending order.
    return arr.sort((a, b) => a - b);
}

// Create an example array 'arr' for both sorting methods.
const arr = [64, 25, 12, 22, 11];

// Sort the 'arr' using the 'selectionSort' function.
selectionSort(arr);
console.log("Sorted array (Selection Sort): " + arr);

// Create a copy of the original 'arr' for the optimized sorting method.
const arrForOptimizedSort = [64, 25, 12, 22, 11];

// Sort the 'arrForOptimizedSort' using the 'optimizedSort' function.
optimizedSort(arrForOptimizedSort);
console.log("Sorted array (Optimized Sort): " + arrForOptimizedSort);
