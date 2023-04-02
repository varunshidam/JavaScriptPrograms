const person = {
  name: "varun sidam",
  address: {
    city: "Pune",
    state: "mh",
  },
};

// const target = Object.assign({ phone: 456789 }, person);
// target.address.city = "mumbai";
// console.log(person, target);

const target1 = JSON.stringify(person);
// console.log("target1 : ", target1);

const target2 = JSON.parse(target1);
// console.log("target2 :", target2);

target2.address.city = "South Bombay";

console.log("Deep Coppy : ", target2);
console.log("Orignal Object : ", person);
