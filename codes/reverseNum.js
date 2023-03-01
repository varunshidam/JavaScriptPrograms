let num = 987654;
let rem = 0;
console.log("Orignal Number : ", num);
while (num > 0) {
  rem = rem * 10 + (num % 10);
  num = Math.floor(num / 10);
}
console.log("Reverse The number : ", rem);
