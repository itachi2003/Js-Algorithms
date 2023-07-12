function cartesianProduct(arr1, arr2) {
  const result = []
  for(let i = 0; i < arr1.length; i++) {
    for(let j = 0; j < arr2.length; j++) {
      result.push([arr1[i],arr2[j]])
    }
  }
  return result
}

const arr1 = [1, 2, 9]
const arr2 = [3, 4, 5]
console.log(cartesianProduct(arr1,arr2))


// The function cartesianProduct takes two arrays, arr1 and arr2, as inputs.
// It initializes an empty array called result that will store the Cartesian product.
// The function uses two nested for loops to iterate over each element in arr1 and arr2.
// The outer loop iterates over each element in arr1 using the variable i as the index.
// The inner loop iterates over each element in arr2 using the variable j as the index.
// Inside the nested loops, it creates a new array using the current elements from arr1 and arr2 as [arr1[i], arr2[j]].
// The new array, [arr1[i], arr2[j]], represents one combination of an element from arr1 and an element from arr2.
// The new array is then pushed into the result array using the result.push() method.
// The nested loops continue iterating until all combinations of elements from arr1 and arr2 are generated and pushed into the result array.
// After all iterations are completed, the result array, containing the Cartesian product, is returned from the function.
// Finally, the function call console.log(cartesianProduct(arr1, arr2)) prints the Cartesian product of arr1 and arr2 to the console.
