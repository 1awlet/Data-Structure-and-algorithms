function countingSortForRadix(arr, exp) {
  let output = new Array(arr.length);
  let count = new Array(10).fill(0);
  let i;

   // Count occurrences of each digit
  for (i = 0; i < arr.length; i++) {
    count[Math.floor(arr[i] / exp) % 10]++;
  }


for (i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  // Building the output array
  for (i = arr.length - 1; i >= 0; i--) {
    output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
    count[Math.floor(arr[i] / exp) % 10]--;
  }

  for (i = 0; i < arr.length; i++) {
    arr[i] = output[i];
  }
  

}

function radixSort(arr) {
  // Finds the maximum number to determine the number of digits
  let m = Math.max(...arr);

  for (let exp = 1; Math.floor(m / exp) > 0; exp *= 10) {
    countingSortForRadix(arr, exp);
  }
}

let arr = [170, 45, 75, 90, 802, 24, 2, 66];
radixSort(arr);
console.log(arr);
