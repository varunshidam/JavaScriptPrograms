const number = [99, 9, 88, 4, 3, 2, 1111111, 2, 3, 4, 5, 6, 11, 22, 33, 44, 55];
const result = number.sort((a, b) => a - b);
const result2 = [...new Set(result)];
console.log(result2[result2.length - 2]);
