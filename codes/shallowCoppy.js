var person = {
  name: "varun sidam",
  age: 25,
  address: "Hinjwadi",
};

var anotherPerson = person;
anotherPerson.name = "sanjay sidam";
console.log(anotherPerson);
// { name: 'sanjay sidam', age: 25, address: 'Hinjwadi' }

var target = Object.assign({ phone: 65345678 }, person);

target.name = "kalpana ";
// var targetObject = {
//   phone: 645278,
// };

console.log("targetObject : ", target);
