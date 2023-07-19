const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentNumber) => accumulator + currentNumber, 0);

console.log(sum); // Output: 15

// The reduce method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
