let string =
  "methods you can use to check version methods you can use to check version";
let result = string.split(" ");
console.log("Items : ", result);
let duplicate = [];

for (let i = 0; i <= result.length; i++) {
  for (let j = 0; j <= result.length; j++) {
    if (!duplicate.includes(result[i])) {
      duplicate.push(result[i]);
    }
  }
}
// console.log("Repeat Count Of words is : ", duplicate);

let duplicateWord = [...new Set(duplicate)];
console.log("Duplicate Word : ", duplicateWord);
