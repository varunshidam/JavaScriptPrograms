const string = "methods you can use to check version of Cent";
const vowels = ["a", "e", "i", "o", "u"];
const strArray = string.split("");
console.log("strArray", strArray);
let count = 0;
for (let i = 0; i < strArray.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if (strArray[i] === vowels[j]) {
      count++;
    }
  }
}
console.log(count);
