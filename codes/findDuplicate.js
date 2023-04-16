const str = "big black bug bit a big black dog on his big black nose";
const strArr = str.split(" ");
console.log("Orignal String : ", str);

const result = strArr.filter((ele, id) => {
  return strArr.indexOf(ele) != id;
});

console.log(result);
