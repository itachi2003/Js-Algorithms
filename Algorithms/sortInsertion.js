function sortInsertion(arr) {
  for (let i = 1; i < arr.length; i++) {
    let something = arr[i];
    let behind = i - 1;
    while (behind >= 0 && arr[behind] > something) {
      arr[behind + 1] = arr[behind];
      behind = behind - 1;
    }
    arr[behind + 1] = something;
  }
}

const arr = [8, 20, -2, 4, -6];
sortInsertion(arr);
console.log(arr);
