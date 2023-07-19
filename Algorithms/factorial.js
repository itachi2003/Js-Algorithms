function factorial(n) {
    let result = 1;
    for( let i = 2; i <= n; i++) {
      result = result * i;
    }
    return result;
  }
  console.log(factorial(1));
  console.log(factorial(5));

// 1.  let result = 1;: This initializes a variable result to 1. This variable will be used to store the result of the factorial calculation.

// 2. for (let i = 2; i <= n; i++) {: This is a for loop that starts with i equal to 2 and continues until i becomes greater than n. The loop iterates over each number from 2 to n inclusively.

// 3.  result = result * i;: Within each iteration of the loop, the current value of result is multiplied by the current value of i. This updates the value of result to be the product of all the numbers from 2 to i.

// 4.  return result;: After the loop finishes, the final value of result is returned as the factorial of n.

// Iteration 1: result = result * i = 1 * 2 = 2
// Iteration 2: result = result * i = 2 * 3 = 6
// Iteration 3: result = result * i = 6 * 4 = 24
// Iteration 4: result = result * i = 24 * 5 = 120