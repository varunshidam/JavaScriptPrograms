var number = 76543;
console.log(number);
var rem = 0;

while (number > 0) {
  rem = rem * 10 + (number % 10);
  number = Math.floor(number / 10);
}
console.log("Reverse Number is : ", rem);
