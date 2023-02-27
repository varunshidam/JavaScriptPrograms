const num1 = 100;
const num2 = 7;
const num3 = 230;
const num4 = 90;

const result = Math.max(num1, num2, num3, num4);
console.log("largest Num = ", result);

let array = [3, 6, 2, 56, 32, 5, 89, 32];
let largest = array[0];

for (let i = 0; i <= largest; i++) {
  if (array[i] > largest) {
    largest = array[i];
  }
}

console.log("largest Num : ", largest);
