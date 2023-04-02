const str = "big black bug bit a big black dog on his big black nose";
const strArr = str.split(" ");
console.log(strArr);

let res = [];
for (let i = 0; i < strArr.length; i++) {
  let count = 1;
  for (let j = i + 1; j< strArr.length; j++) {
    if (strArr[i] === strArr[j]) {
     count++;
      strArr[j] = 0;
    }
  }
  if (count > 1 && strArr[i] != 0) {
    res.push(strArr[i]);
  }
}
console.log(res);
