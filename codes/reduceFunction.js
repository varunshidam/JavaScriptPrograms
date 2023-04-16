const numArray = [11, 22, 33, 44, 55, 66, 77];
const result = numArray.reduce((ele, id) => {
  return ele+ id;
}, 0);
console.log("Addition of Array elements is : ", result);
