console.log("first");
let arr = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3];
let final = [];

// const res = arr.filter((ele.id)=> {
//   return arr.indexOf(ele)
// })

const res = arr.filter((ele, id) => {
  return arr.indexOf(ele) != id;
});
console.log(res);
