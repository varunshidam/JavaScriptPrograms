let string = "cigvic";
let rev = "";
for (let i = string.length - 1; i >= 0; i--) {
  rev = rev + string[i];
}
if (rev === string) {
  console.log("string is palimdrome");
} else {
  console.log("string is not palimdrome");
}
