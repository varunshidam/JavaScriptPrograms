let string = "varun hi varun sanjay sanjay";
let strArry = string.split(" ");
console.log(strArry);

for (let i = 0; i < strArry.length; i++) {
  let temp = strArry[i];
  let result = [...temp];
  result.reverse().join(" ");
  console.log(result.join(""));
}
