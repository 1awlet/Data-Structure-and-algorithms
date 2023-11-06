function insertionSort(A, N) {
    for (let j = 1; j < N; j++) {
        let ins = A[j];
        let i = j - 1;

        while (i >= 0 && ins < A[i]) {
            A[i + 1] = A[i];
            i = i - 1;
        }

        A[i + 1] = ins;
    }
}

const arrayToSort = [5, 3, 1, 4, 2];
insertionSort(arrayToSort, arrayToSort.length);
console.log(arrayToSort); // This will output the sorted array
