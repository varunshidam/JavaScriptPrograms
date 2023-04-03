const numArray = [11, 22, 33, 44, 55, 66, 77];
const result = numArray.reduce((it, acc) => {
  return it + acc;
}, 0);
console.log("Addition of Array elements is : ", result);
