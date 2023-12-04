function countingSort(A, K) {
 
  let C = new Array(K + 1).fill(0);
  let R = new Array(A.length).fill(0);

 
  for (let j = 0; j < A.length; j++) {
    C[A[j]] += 1;
  }
 
  for (let i = 1; i < C.length; i++) {
    C[i] += C[i - 1];
  }
 
  let post = 0;
  for (let i = 0; i < C.length; i++) {
    for (let r = post; r < post + C[i]; r++) {
      R[r] = i;
    }
    post += C[i];
  }

  return R;
}
 
const inputArray = [4, 2, 2, 8, 3, 3, 1];
const maxValue = Math.max(...inputArray);
const sortedArray = countingSort(inputArray, maxValue);

console.log("Input Array:", inputArray);
console.log("Sorted Array:", sortedArray);
