let string = "Count the Number of Vowels Using Regex";
console.log("string length :", string.length);
// let result = string.match(/[AEIOUaeiou]/gi).length;
// console.log("Number of vowels in string : ", result);



let array = string.split("");
let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
let count = 0;
for (let i = 0; i <= array.length; i++) {
  for (let j = 0; j <= vowels.length; j++) {
    if (array[i] === vowels[j]) {
      count++;
    }
  }
}
console.log("Number of vowels in string : ", count);
