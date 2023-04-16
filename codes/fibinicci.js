let a = 0;
let b = 1;
for (let i = 0; i <= 5; i++) {
  let temp = a + b;
  console.log(temp);
  a = b;
  b = temp;
}
