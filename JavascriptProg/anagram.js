let string1 = "india";
let string2 = "ndiaid";
if (string1.length != string2.length) {
  console.log("Not Anagram");
}

let res1 = string1.split("").sort().join("");
let res2 = string2.split("").sort().join("");

if (res1 === res2) {
  console.log("string is Anagram");
} else {
  console.log("Not Anagram");
}
