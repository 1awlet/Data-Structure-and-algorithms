function knapsack(values, weights, capacity) {
  const n = values.length;
    // Creating a 2D array to store the maximum value that can be obtained
    // using the first i items and capacity j
    const dp = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));

    // Build the dp array from bottom up
    for (let i = 1; i <= n; i++) {
        for (let w = 1; w <= capacity; w++) {
            // If including the current item would not exceed the capacity,
            // check if adding it would be beneficial
            if (weights[i - 1] <= w) {
                dp[i][w] = Math.max(
                    dp[i - 1][w], 
                    dp[i - 1][w - weights[i - 1]] + values[i - 1]
                );
            } else {
                // If the current item is too heavy, can't include it
                dp[i][w] = dp[i - 1][w];
            }
        }
    }

    // The bottom right corner of the dp array contains the maximum value
    return dp[n][capacity];


}


const values = [60, 100, 120];
const weights = [10, 20, 30];
const capacity = 50;

console.log("Maximum value in knapsack =", knapsack(values, weights, capacity));

