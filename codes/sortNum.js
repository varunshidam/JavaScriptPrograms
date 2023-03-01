let a = 10;
let b = 99;

console.log("Before : ", a, b);

a = a + b;
b = a - b;
a = a - b;

console.log("After : ", a, b);
