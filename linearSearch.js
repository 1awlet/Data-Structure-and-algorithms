function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
          // Return the index of the target element
            return i; 
        }
    }
    return -1; 
}

const numbers = [2, 3, 5, 7, 11, 13, 17];
const target = 7;


const result = linearSearch(numbers, target);

if (result !== -1) {
    console.log(`Element found at index: ${result}`);
} else {
    console.log("Element not found in the array.");
}
