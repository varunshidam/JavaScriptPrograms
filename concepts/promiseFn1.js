datas = [
  { name: "varun", age: 21 },
  { name: "sanjay", age: 45 },
  { name: "kalpana", age: 34 },
];

//1-  getData
function getData() {
  datas.map((ele) => {
    console.log(ele);
  });
}

//2- createDAta
function createData(newdata) {
  return (prom = new Promise((resolve, reject) => {
    datas.push(newdata);
    // promise
    let error = true;
    if (!error) {
      resolve("succes...!");
    } else {
      reject("Failed,Error Occour");
    }
  }));
}

// getData({});
createData({ name: "sanjana", age: 22 })
  .then(getData)
  .catch((err) => {
    console.log(err);
  });
