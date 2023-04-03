const str = "big black bug bit a big black dog on his big black nose";
const arr = str.split(" ");
console.log("str", str);

//1
const hashMap = {};

//2 for each with in
arr.forEach((element) => {
  if (element in hashMap) {
    hashMap[element]++;
  } else {
    hashMap[element] = 1;
  }
});

// for (let key in hashMap) {
//   if (hashMap[key] > 1) {
//     console.log(key);
//   }
// }

console.log(hashMap);

//{
//   big: 3,
//   black: 3,
//   bug: 1,
//   bit: 1,
//   a: 1,
//   dog: 1,
//   on: 1,
//   his: 1,
//   nose: 1
// }
