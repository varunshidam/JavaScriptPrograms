let string = "varun hi varun sanjay sanjay";
let strArry = string.split(" ");
console.log(strArry);

for (let i = 0; i < strArry.length; i++) {
  let result = strArry[i];
  let res1 = [...result];
  let rev = " ";

  for (let j = res1.length - 1; j >= 0; j--) {
    rev += result[j];
    // console.log(result[j]);
  }
  console.log(rev);
}
