function countingSortForRadix(arr, exp) {
  let output = new Array(arr.length);
  let count = new Array(10).fill(0);
  let i;

   // Count occurrences of each digit
  for (i = 0; i < arr.length; i++) {
    count[Math.floor(arr[i] / exp) % 10]++;
  }




}

