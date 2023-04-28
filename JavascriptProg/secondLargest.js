const array = [11, 22, 1, 24, 6, 6, 5, 4, 3, 3, 3];
const result = [...new Set(array)].sort((a, b) => a - b);
console.log(result[result.length - 2]);
