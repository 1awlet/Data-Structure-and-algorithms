// Define a function called bubbleSort that takes an array A and its length N as parameters.
function bubbleSort(A, N) {
    // Initialize a boolean flag 'swapped' to indicate if any swaps were made.
    let swapped = true;

    // Continue iterating until no swaps are made in a pass.
    while (swapped) {
        // Assume no swaps will be made in this pass initially.
        swapped = false;

        // Iterate through the array elements.
        for (let i = 0; i < N - 1; i++) {
            // Compare the current element with the next element.
            if (A[i] > A[i + 1]) {
                // Swap A[i] and A[i+1] if they are in the wrong order.
                let temp = A[i];
                A[i] = A[i + 1];
                A[i + 1] = temp;

                // Set 'swapped' to true to indicate a swap occurred in this pass.
                swapped = true;
            }
        }

        // Decrement N as the largest unsorted element has moved to the end.
        N = N - 1;
    }

    // Return the sorted array A.
    return A;
}

// Example
const arrayToSort = [5, 3, 1, 4, 2];
// Sort the example array using the bubbleSort function.
const sortedArray = bubbleSort(arrayToSort, arrayToSort.length);
// Log the sorted array to the console.
console.log(sortedArray); // This will output the sorted array
