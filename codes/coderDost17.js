let string = "varun hi varun sanjay sanjay";
let strArry = string.split(" ");
let line = "";
for (let i = 0; i < strArry.length; i++) {
  let temp = strArry[i];
  let result = [...temp];
  line += " " + result.reverse().join("");
}
console.log(line);
