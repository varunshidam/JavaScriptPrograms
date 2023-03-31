let obj1 = {
  a: 11,
  b: 22,
  c: 33,
  d: 44,
  e: 55,
};
let obj2 = {
  d: 44,
  b: 22,
};
let res = {};

for (let i in obj1) {
  if (obj1[i] == obj2[i]) {
    res[i] = obj1[i];
  }
}
console.log(res);
