
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(arr.length / 2)];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else if (arr[i] > pivot) {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage:
const array = [5, 8, 2, 1, 6, 3, 7, 4];
const sortedArray = quickSort(array);
console.log(sortedArray);



// The quickSort function takes an array arr as input.
// If the length of the array is 1 or less, it is considered already sorted, so the function simply returns the array.
// Otherwise, the function proceeds to choose a pivot element. In this implementation, the pivot is selected as the element at the middle index of the array, using Math.floor(arr.length / 2).
// Two empty arrays, left and right, are initialized. These arrays will be used to store elements that are smaller or larger than the pivot, respectively.
// A loop is executed for each element in the array. If an element is smaller than the pivot, it is pushed into the left array. If an element is larger than the pivot, it is pushed into the right array.
// After the loop, the function recursively applies the Quick Sort algorithm to the left and right sub-arrays by calling quickSort on them. This step effectively sorts the sub-arrays.
// The sorted left sub-array, the pivot element, and the sorted right sub-array are concatenated together using the spread operator [... ] and returned as the final sorted array.
// In the provided example usage, the quickSort function is called with the array [5, 8, 2, 1, 6, 3, 7, 4]. The algorithm sorts the array in ascending order, and the sorted array is assigned to the sortedArray variable. Finally, the sorted array is logged to the console using console.log(sortedArray).

// This implementation follows the divide-and-conquer approach of the Quick Sort algorithm, repeatedly partitioning the array around a pivot element until the entire array is sorted. It has an average time complexity of O(n log n), where n is the number of elements in the array.
