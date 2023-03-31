const number = [66, 44, 3, 5, 66, 99, 6543, 22, 44, 55];
const resArr = [];

for (let i = 0; i < number.length; i++) {
  if (number[i] % 2 === 0) {
    resArr.push(number[i]);
    console.log("first");
  }
}
console.log(resArr);
