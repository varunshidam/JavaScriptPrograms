const str = "big black bug bit a big black dog on his big black nose";
const strArr = str.split(" ");
console.log("Orignal String : ", str);

const res = strArr.filter((ele, id) => {
  return strArr.indexOf(ele) != id;
});

// const result = [...new Set(res)];
console.log(res);
