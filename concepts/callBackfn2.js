datas = [
  { name: "varun", age: 21 },
  { name: "sanjay", age: 45 },
  { name: "kalpana", age: 34 },
];

//1-  getData
function getData() {
  datas.map((ele, id) => {
    console.log(ele);
  });
}

//2- createDAta
function createData(newdata, callback) {
  datas.push(newdata);
  callback();
}

// getData({});
createData({ name: "sanjana", age: 22 }, getData);
