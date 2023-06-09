function recursiveFibonacchi(n) {
    if( n < 2) {
      return n
    }
    return recursiveFibonacchi(n-1) + recursiveFibonacchi(n-2)
  }
  console.log(recursiveFibonacchi(1)); // 1
  console.log(recursiveFibonacchi(3)); // 2
  console.log(recursiveFibonacchi(6));  // 8