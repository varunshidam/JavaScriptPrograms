const numArray = [1, 2, 3, 4, 5];

const mapRes = numArray.map((ele, id) => {
  return ele * 2;
});

console.log("Map result : ", mapRes);

const forEachRes = numArray.forEach((ele, i) => {
  numArray[i] = ele * 3;
});

console.log("ForEach Array : ", forEachRes);
console.log(numArray);
