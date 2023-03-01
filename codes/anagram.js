let string1 = "india";
let string2 = "ndiai";
let result1 = string1.split("").sort().join();
let result2 = string2.split("").sort().join();

if (result1 === result2) {
  console.log("Anagram");
} else {
  console.log("Not Anagram");
}
