function selectionSort(arr) {
    let n = arr.length;

    
    for (let i = 0; i < n - 1; i++) {
        // Finding the smallest number in the subarray
        let minPos = posMin(arr, i, n - 1);

        // Swapping the elements
        if (minPos !== i) { // Swap only if needed
            let temp = arr[i];
            arr[i] = arr[minPos];
            arr[minPos] = temp;
        }
    }

}


function posMin(arr, start, end) {
    let minPos = start;
    for (let i = start + 1; i <= end; i++) {
        if (arr[i] < arr[minPos]) {
            minPos = i;
        }
    }
    return minPos;
}
