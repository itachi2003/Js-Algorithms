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
