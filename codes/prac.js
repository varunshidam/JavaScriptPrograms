let array = [81, 9, , 86, 49, 4, 16, 5, 25, 54, 89, 12];
sqrtArray = array.map(Math.sqrt);
console.log(sqrtArray);
let final = [];
for (let i = 1; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (array[i] * array[i] === array[j]) {
      final.push(array[i]);
      final.push(array[j]);
    }
  }
}
console.log(final);
