let arr = [1, 2, 3, 4, 5];
let removeItem = arr.splice(0, 2);
console.log("remove item : ", removeItem);
console.log("After Modified : ", arr);
let res = arr.concat(removeItem);
console.log("result : ", res);
