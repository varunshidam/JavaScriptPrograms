let str = "NTR HIGHSCHOOL WARUD";
let letter = "H";
let count = 0;
for (let i = 0; i < str.length; i++) {
  if (str.charAt(i) === letter) {
    count++;
  }
}
console.log(count);
