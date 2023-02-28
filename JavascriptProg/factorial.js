let num = 5;
let fact = 1;
if (num > 0) {
  for (let i = 1; i <= num; i++) {
    fact = fact * i;
  }
  console.log("Factorial is : ", fact);
} else {
  console.log("Not possible number is Zero either -ve");
}
