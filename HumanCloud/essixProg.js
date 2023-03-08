var num = [];

// Every element added by 1000
for (let i = 0; i <= 5; i++) {
  num.push(i + 1000);
}
console.log("1)", num);

var num2 = [];
for (let i = 0; i <= 5; i++) {
  num2.push(i ** (i + 1));
}
console.log("2)", num2);

if (num2.includes(81)) {
  console.log("It's Working ..!");
} else {
  console.log("Not Working ..!");
}
