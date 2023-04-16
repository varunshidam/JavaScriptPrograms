datas = [
  { name: "varun", age: 21 },
  { name: "sanjay", age: 45 },
  { name: "kalpana", age: 34 },
];

function getData() {
  setTimeout(() => {
    let output = "";
    datas.forEach((element, id) => {
      output += `  ${element.name}  `;
    });
    console.log("output : ", output);
  }, 1000);
}

function createData(newdata, callback) {
  setTimeout(() => {
    datas.push(newdata);
    callback();
  }, 2000);
}

createData({ name: "sanjana", age: 20 }, getData);
// getData();
