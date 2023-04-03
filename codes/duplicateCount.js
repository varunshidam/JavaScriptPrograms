const str = "big black bug bit a big black dog on his big black nose";
const arr = str.split(" ");
console.log("str", str);

const hashMap = {};

arr.forEach((element) => {
  if (element in hashMap) {
    hashMap[element]++;
  } else {
    hashMap[element] = 1;
  }
});

console.log(hashMap);
