let string = "varun Sidam";
let rev = "";
console.log("Orignal String : ", string);
for (let i = string.length - 1; i >= 0; i--) {
  rev = rev + string[i];
}
console.log("Reverse String : ", rev);