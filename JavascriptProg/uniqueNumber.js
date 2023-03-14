let array = [1, 2, 2, 3, 3, 4, 4, 5, 5, 8, 8];
let result = array.filter((ele, i) => {
  return array.indexOf(ele) === i;
});
console.log(result);

let str = "Geeksforgeeks Is a great site for computer science";
let strArray = str.split("");
let result2 = strArray.filter((ele, id) => {
  return strArray.indexOf(ele) === id;
});
console.log(result2);
