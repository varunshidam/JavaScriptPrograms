datas = [
  { name: "varun", age: 21 },
  { name: "sanjay", age: 45 },
  { name: "kalpana", age: 34 },
];

//1
function getData() {
  datas.map((ele) => {
    console.log({ ele });
  });
}

// 2
function createData(newdata) {
  return (prom = new Promise((resolve, reject) => {
    datas.push(newdata);

    let error = false;
    if (!error) {
      resolve("No Error");
    } else {
      reject("Error, Occour");
    }
  }));
}

createData({ name: "sanjana", age: 22 })
  .then(
    getData(() => {
      console.log(Working);
    })
  )
  .catch((err) => {
    console.log(err);
  });
