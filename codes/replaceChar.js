let str = "Hello World";
console.log("Orignal String : ", str);
let index = 5;
let char = "X";

let res = str.substring(0, index) + char + str.substring(index + 1);
console.log("Modified String : ", res);
