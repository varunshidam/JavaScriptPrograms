// var res = "123456789".replace(/\d{4}$/, "****");
// console.log(res);
// let ar = "";

let num = 123456778;
let string = num.toString();

let resPhone = string.substring(0, string.length - 4) + "****";
console.log(resPhone);
