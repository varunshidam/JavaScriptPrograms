let array = [1, 2, 2, 3, 3, 4, 4, 5, 5, 8, 8];
console.log("Orignal Array : ", array);
let result = array.filter((ele, id) => {
  return array.indexOf(ele) === id;
});
console.log("Modified Array : ", result);
