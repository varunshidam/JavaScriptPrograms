const string = "for their servers and workstations";
const strUp = string.toUpperCase();
let vowels = ["a", "e", "i", "o", "u"];
let count = 0;
let strArr = string.split("");
let word = [];

for (let i = 0; i < strArr.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if (strArr[i] === vowels[j]) {
      word.push(strArr[i]);
    }
  }
}
console.log("Word :", word);
