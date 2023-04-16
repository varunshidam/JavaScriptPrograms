const number = [66, 44, 3, 5, 66, 99, 6543, 22, 44, 55];
const resArr = [];

const result = number.filter((ele, id) => {
  return ele % 2 === 0;
});
console.log(result);
