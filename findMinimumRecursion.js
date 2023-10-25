
function findMinimum(A, low, high) {
    if (high - low === 1) {
        if (A[low] < A[high]) {
            return A[low];
        } else {
            return A[high];
        }
    }
    
    if (low === high) {
        return A[high];
    }
    
    const mid = low + Math.floor((high - low) / 2);
    const a = findMinimum(A, low, mid);
    const b = findMinimum(A, mid + 1, high);
    
    return Math.min(a, b);
}


const array = [5, 3, 9, 1, 7, 2];
const lowIndex = 0;
const highIndex = array.length - 1;
const minimum = findMinimum(array, lowIndex, highIndex);
console.log("Minimum element:", minimum);
