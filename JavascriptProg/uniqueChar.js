let str = "Geeksforgeeks Is a great site for computer science";
let uniq = "";

for (let i = 0; i < str.length; i++) {
  if (uniq.includes(str[i]) === false) {
    uniq += str[i];
  }
}
console.log(uniq);
