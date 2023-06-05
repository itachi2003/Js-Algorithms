function fibonachi(n) {
    const fib = [0, 1];
    for(let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    return fib
}
console.log(fibonachi(10));

// 1. const fib = [0, 1];: This initializes an array fib with the first two numbers of the Fibonacci sequence,
//  which are 0 and 1. These two numbers serve as the base for generating the rest of the sequence.

// 2. for(let i = 2; i < n; i++) {: This is a for loop that starts with 
//     i equal to 2 and continues until i is less than n. The loop iterates over each index from 2 to n - 1 (excluding n).

// 3.fib[i] = fib[i - 1] + fib[i - 2];: Within each iteration of the loop, the value at index i of the fib array is calculated by
//  summing the two preceding values in the sequence. This is done by accessing fib[i - 1] and fib[i - 2].

// 4. return fib;: After the loop finishes, the fib array containing the Fibonacci sequence up to index n - 1 is returned.

// 1. Iteration 1: fib[2] = fib[1] + fib[0] = 1 + 0 = 1
// 2. Iteration 2: fib[3] = fib[2] + fib[1] = 1 + 1 = 2
// 3. Iteration 3: fib[4] = fib[3] + fib[2] = 2 + 1 = 3
// 4. Iteration 4: fib[5] = fib[4] + fib[3] = 3 + 2 = 5
// 5. Iteration 5: fib[6] = fib[5] + fib[4] = 5 + 3 = 8
// 6. Iteration 6: fib[7] = fib[6] + fib[5] = 8 + 5 = 13
// 7. Iteration 7: fib[8] = fib[7] + fib[6] = 13 + 8 = 21