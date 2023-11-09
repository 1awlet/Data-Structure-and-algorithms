// Define a function called 'insertionSort' that sorts an array A of length N using the insertion sort algorithm.
function insertionSort(A, N) {
    for (let j = 1; j < N; j++) {
        // Store the current element A[j] in the 'ins' variable.
        let ins = A[j];
        // Initialize an index 'i' to j-1.
        let i = j - 1;

        // Compare 'ins' with elements before it in the sorted portion of the array.
        while (i >= 0 && ins < A[i]) {
            // If 'ins' is smaller than the current element A[i],
            // shift A[i] to the right to make space for 'ins'.
            A[i + 1] = A[i];
            // Decrement 'i' to continue comparing 'ins' with previous elements.
            i = i - 1;
        }

        // Insert 'ins' into its correct sorted position.
        A[i + 1] = ins;
    }
}

// Create an example array 'arrayToSort'.
const arrayToSort = [5, 3, 1, 4, 2];
// Sort the 'arrayToSort' using the insertionSort function.
insertionSort(arrayToSort, arrayToSort.length);
// Log the sorted array to the console.
console.log(arrayToSort); // This will output the sorted array
