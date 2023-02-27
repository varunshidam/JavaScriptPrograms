let str = "civic";
let res = str.split("").reverse().join("");
console.log(res);

if (str === res) {
  console.log("String is Palimdrome");
} else {
  console.log("String is Not Palimdrome");
}
