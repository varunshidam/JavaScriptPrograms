const string = "madam";
let rev = string.split("").reverse().join("");

if (rev == string) {
  console.log("Palimdrone");
} else {
  console.log("Not Palimdrone");
}

const array = [1, 2, 3, 4];
const type = typeof array;
console.log("typeOf : ", type);
