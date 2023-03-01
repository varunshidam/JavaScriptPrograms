let string = "civic";
console.log("Input : ", string);
let rev = string.split("").reverse().join("");
if (rev === string) {
  console.log("String is Palimdrome");
} else {
  console.log("String is Not Palimdrome");
}
