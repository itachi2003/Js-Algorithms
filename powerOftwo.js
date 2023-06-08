// function isFowerTwoNumber(n) {
//   if(n < 1) {
//     return false;
//   }
//   while(n > 1) {
//     if(n%2 !== 0) {
//       return false
//     }
//      n = n / 2;
//   }
//  return true;
// }
// console.log(isFowerTwoNumber(2));
// console.log(isFowerTwoNumber(8));
// console.log(isFowerTwoNumber(1));

function isFower(n) {
    if(n < 1) {
      return false
    }
    return (n & (n-1)) === 0;
  }
  console.log(isFower(4)) //true
  console.log(isFower(8))  //true
  console.log(isFower(12)) //false