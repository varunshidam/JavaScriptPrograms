// input : [2,7,11,4,-2]
//output : [20,15,11,18,24]

const array = [2, 7, 11, 4, 2];
let add = 0;
for (let i = 0; i < array.length; i++) {
  add += array[i];
}
console.log(add);

let res = [];
for (let i = 0; i < array.length; i++) {
  res.push(add - array[i]);
}
console.log(res);
















