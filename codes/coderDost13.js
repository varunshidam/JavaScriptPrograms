let string = "varun hi varun sanjay sanjay";
let strArry = string.split(" ");
console.log(strArry);
let pr ='';
for (let i = 0; i < strArry.length; i++) {
  let result = strArry[i];
  let res1 = [...result];
   rev = "";

  for (let j = res1.length - 1; j >= 0; j--) {
    rev += result[j];
  }
  pr+= " " +rev;
  console.log(rev);
}

console.log(pr);