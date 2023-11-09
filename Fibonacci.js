// Define a function called 'fibonacci' that calculates the nth Fibonacci number.
function fibonacci(n) {
    // Base case: If n is 0 or 1, return n itself (Fibonacci sequence starts with 0 and 1).
    if (n <= 1) {
        return n;
    }

    // Recursive case: For n greater than 1, calculate the nth Fibonacci number
    // by recursively summing the (n-1)th and (n-2)th Fibonacci numbers.
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Call the 'fibonacci' function with the argument 23 to calculate the 23rd Fibonacci number.
console.log(fibonacci(23)); // This will output the 23rd Fibonacci number.
