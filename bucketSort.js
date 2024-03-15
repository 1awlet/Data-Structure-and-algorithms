function bucketSort(arr, bucketSize = 5) {
    if (arr.length === 0) {
        return arr;
    }

    // Determine minimum and maximum values in the input array
    let minValue = arr[0];
    let maxValue = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minValue) {
            minValue = arr[i];
        } else if (arr[i] > maxValue) {
            maxValue = arr[i];
        }
    }

 // Calculate the number of buckets needed and initialize buckets
    const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
    const buckets = new Array(bucketCount);
    for (let i = 0; i < buckets.length; i++) {
        buckets[i] = [];
    }

    // Distribute elements into buckets
    for (let i = 0; i < arr.length; i++) {
        const bucketIndex = Math.floor((arr[i] - minValue) / bucketSize);
        buckets[bucketIndex].push(arr[i]);
    }


     // Sort individual buckets and concatenate them
    const sortedArray = [];
    for (let i = 0; i < buckets.length; i++) {
        insertionSort(buckets[i]);  
        sortedArray.push(...buckets[i]);  
    }

    return sortedArray;

}


function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
}

const unsortedArray = [29, 13, 22, 37, 52, 49, 46, 71, 56];
const sortedArray = bucketSort(unsortedArray);
console.log(sortedArray);
