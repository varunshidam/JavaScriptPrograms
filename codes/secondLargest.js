let array = [
  11, 33, 33, 33, 44, 44, 44, 55, 66, 77, 88, 88, 55, 44, 33, 4, 5, 6, 7, 8, 2,
  1, 3, 3, 3,
];
let result = [...new Set(array)].sort((a, b) => a - b);
console.log(result);
console.log("Second Largest element : ", result[result.length - 2]);
console.log("Second smallest element : ", result[1]);
