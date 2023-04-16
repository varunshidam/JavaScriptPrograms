let array = ["varun", "vaibhav", "akash", "akar", "vaishnavi", "mohit", "mona"];
let search = ["va"];
let final = [];
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < search.length; j++) {
    if (array[i].includes(search[j])) {
      // console.log(array[i]);
      final.push(array[i]);
    }
  }
}

console.log(final);
// console.log("first");
// function resultAll(arr) {
//   let result = 0;
//   for (let k = 0; k < arr.length; k++) {
//     for (let m = 0; m < arr[k].length; m++) {
//       if (arr[k][m] > 9) result += arr[k][m];
//     }
//   }
//   // return result;
//   console.log(result);
// }
// console.log(resultAll);

// resultAll([
//   [1, 2],
//   [3, 4],
//   [5, 6, 7],
// ]);
