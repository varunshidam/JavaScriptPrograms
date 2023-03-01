let arrayString = "Geeksforgeeks Is a great site for computer science";
let String = arrayString.split("");
console.log(String);
let res = String.filter((ele, id) => {
  return String.indexOf(ele) != id;
});
console.log(res);
