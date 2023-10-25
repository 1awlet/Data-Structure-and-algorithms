function findMaximum(A, N) {
    if (N === 1) {
        return A[0];
    }
    
    const maxPrevious = findMaximum(A, N - 1);
    
    return maxPrevious < A[N - 1] ? A[N - 1] : maxPrevious;
}

const array = [4, 8, 2, 10, 7];
const length = array.length;
const maximum = findMaximum(array, length);
console.log("Maximum element:", maximum);
