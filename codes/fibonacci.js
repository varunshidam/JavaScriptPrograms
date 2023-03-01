let num = 7;
let a = 0;
let b = 1;

for (let i = 1; i <= 7; i++) {
  let temp = a + b;
  console.log(temp);
  a = b;
  b = temp;
}
