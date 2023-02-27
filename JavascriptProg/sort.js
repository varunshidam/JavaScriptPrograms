const array = [11, 22, 1, 24, 6, 6, 5, 4, 3, 3, 3];
console.log(array);
const arr = [...new Set(array)].sort((a, b) => a - b);
console.log(arr);
const result = arr[arr.length - 2];
console.log(result);
