let string = "civic";
let rev = "";
for (let i = string.length - 1; i >= 0; i--) {
  rev = rev + string[i];
}
console.log(rev);
if (rev === string) {
  console.log("String is Palimdrome");
} else {
  console.log("String is Not Palimdrome");
}
