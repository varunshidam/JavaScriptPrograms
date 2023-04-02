let obj1 = {
  a: 11,
  b: 22,
  c: 33,
  d: 44,
  e: 55,
};
let obj2 = {
  a: 36,
  c: 68,
  d: 44,
  b: 22,
  f: 41,
};

let res = {};

for (let i in obj1) {
  if (obj1[i] == obj2[i]) {
    res[i] = obj1[i];
  }
}
console.log(res);
