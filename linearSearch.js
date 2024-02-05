function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
          // Return the index of the target element
            return i; 
        }
    }
    return -1; 
}
