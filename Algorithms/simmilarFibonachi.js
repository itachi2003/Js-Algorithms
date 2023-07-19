function simmilarFibonachi(n) {
  const noOfWays = [1, 2]
  for(let i = 2; i <=n; i++) {
    noOfWays[i] = noOfWays[i-1] + noOfWays[i-2]
  }
  return noOfWays[n-1]
}
console.log(simmilarFibonachi(1));
console.log(simmilarFibonachi(2));
console.log(simmilarFibonachi(3));
console.log(simmilarFibonachi(4));
console.log(simmilarFibonachi(5));
console.log(simmilarFibonachi(6));
console.log(simmilarFibonachi(7));

// result : 1, 2, 3, 5, 8, 13, 21...


// The function takes an input parameter n, which represents the position in the sequence for which you want to calculate the value.
// It initializes an array called noOfWays with the first two values of the sequence, [1, 2].
// It then enters a loop that starts from i = 2 (as the first two values are already set) and continues until i reaches n.
// Inside the loop, it calculates the ith value of the sequence by adding the previous two values: noOfWays[i-1] + noOfWays[i-2]. This is the essence of the Fibonacci sequence, where each number is the sum of the two preceding numbers.
// The calculated value is assigned to noOfWays[i].
// After the loop finishes, the function returns noOfWays[n-1], which represents the nth value of the "similar Fibonacci" sequence.
// Now, let's see how the function behaves with different inputs:

// simmilarFibonachi(1) returns 1: The sequence starts with [1, 2], and the first value is 1.
// simmilarFibonachi(2) returns 2: The second value in the sequence is 2.
// simmilarFibonachi(3) returns 3: The third value is calculated by adding the first and second values: 1 + 2 = 3.
// simmilarFibonachi(4) returns 5: The fourth value is calculated by adding the second and third values: 2 + 3 = 5.
// simmilarFibonachi(5) returns 8: The fifth value is calculated by adding the third and fourth values: 3 + 5 = 8.
// simmilarFibonachi(6) returns 13: The sixth value is calculated by adding the fourth and fifth values: 5 + 8 = 13.
// simmilarFibonachi(7) returns 21: The seventh value is calculated by adding the fifth and sixth values: 8 + 13 = 21.
// The sequence continues in this manner, where each value is the sum of the two preceding values. It follows a similar pattern to the Fibonacci sequence but starts with [1, 2] instead of [0, 1].
