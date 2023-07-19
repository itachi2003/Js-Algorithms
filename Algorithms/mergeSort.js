function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}
function merge(leftArr, rightArr) {
  const sortedArr = [];

  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }

  return [...sortedArr, ...leftArr, ...rightArr];
}

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

const arr = [8, 20, -2, 4, -6];
console.log(mergeSort(arr));


// Initially, the mergeSort function is called with the array [8, 20, -2, 4, -6].

// The function checks if the array length is less than 2, but in this case, it's not. So it proceeds to divide the array.

// The mid value is calculated as 2, which represents the index of the middle element.

// The left half of the array is obtained by slicing from index 0 to mid - 1, resulting in [8, 20].

// The right half of the array is obtained by slicing from index mid to the end of the array, resulting in [-2, 4, -6].

// The mergeSort function is called recursively on both halves: [8, 20] and [-2, 4, -6].

// For the left half [8, 20], the process repeats, and the array length is checked. Since the length is not less than 2, it is divided into [8] and [20].

// The mergeSort function is recursively called on both halves: [8] and [20]. However, since both of these arrays have only one element, they are considered sorted and returned as is.

// Now, the merge function is called with the two sorted arrays [8] and [20].

// Inside the merge function, a new array sortedArr is initialized to hold the sorted elements.

// The while loop executes because both arrays have elements to compare.

// The first elements of the arrays are compared: 8 from the left array and 20 from the right array. Since 8 is smaller, it is removed from the left array and added to sortedArr.

// The loop continues to the next iteration. Since the left array is empty and the right array still has elements, the remaining elements of the right array (20) are added to sortedArr.

// The merge function returns [8, 20], which is the sorted array obtained by merging [8] and [20].

// Now, for the right half [-2, 4, -6], the same process occurs. It is recursively divided into [-2] and [4, -6].

// The mergeSort function is called on both halves: [-2] and [4, -6]. Since [-2] is already sorted with one element, it is returned as is.

// For [4, -6], the mergeSort function is called recursively. It is divided into [4] and [-6].

// The mergeSort function is called on both halves: [4] and [-6]. Again, both of these arrays have only one element, so they are considered sorted and returned as is.

// Now, the merge function is called with the two sorted arrays [4] and [-6].

// The while loop executes, comparing 4 and -6. Since -6 is smaller, it is removed from the right array and added to sortedArr.

// The loop stops as the right array is empty, and the remaining elements of the left array (4) are added to sortedArr.

// The merge function returns [-6, 4], which is the sorted array obtained by merging [4] and [-6].

// Finally, the merge function is called again with the two sorted halves: [8, 20] and [-6, 4].

// The while loop executes, comparing the first elements of the arrays: 8 and -6. Since -6 is smaller, it is removed from the right array and added to sortedArr.

// The loop continues, comparing 8 and 4. Again, the smaller element (4) is removed from the right array and added to sortedArr.

// The loop proceeds to the next iteration. Since the left array is empty, the remaining elements of the right array (20) are added to sortedArr.

// The merge function returns [-6, 4, 8, 20], which is the sorted array obtained by merging [8, 20] and [-6, 4].

// The final sorted array [8, 20, -2, 4, -6] is printed to the console using console.log.

// The output in the console will be [-6, -2, 4, 8, 20], indicating that the original array [8, 20, -2, 4, -6] has been sorted in ascending order using the merge sort algorithm.
