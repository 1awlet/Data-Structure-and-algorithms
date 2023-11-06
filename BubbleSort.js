function bubbleSort(A, N) {
    let swapped = true;

    while (swapped) {
        swapped = false;

        for (let i = 0; i < N - 1; i++) {
            if (A[i] > A[i + 1]) {
                // Swap A[i] and A[i+1]
                let temp = A[i];
                A[i] = A[i + 1];
                A[i + 1] = temp;

                swapped = true;
            }
        }

        N = N - 1;
    }

    return A;
}

// Example
const arrayToSort = [5, 3, 1, 4, 2];
const sortedArray = bubbleSort(arrayToSort, arrayToSort.length);
console.log(sortedArray); // This will output the sorted array
