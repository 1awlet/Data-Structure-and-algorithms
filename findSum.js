
function F2(A, N) {
    if (N === 0) {
        return 0;
    }
    return F2(A, N - 1) + A[N - 1];
}

let arr = [1, 5, 7];
let result = F2(arr, arr.length);
console.log(result);
