
function Sum(A, N) {
    if (N === 0) {
        return 0;
    }
    return F2(A, N - 1) + A[N - 1];
}

let arr = [1, 5, 7];
let result = Sum(arr, arr.length);
console.log(result);
