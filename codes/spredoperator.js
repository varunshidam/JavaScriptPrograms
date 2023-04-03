const num = [1, 2, 3, 4];
console.log(...num); // 1 2 3 4

const numbers = [...num];
console.log(...numbers); // 1 2 3 4   new memory
console.log(typeof numbers); // object

const result = [...num, ...numbers];
console.log(result);

// Object
const object = { x: 11, y: 33, z: 55 };
const newObject = { ...object, w: 77, x: 707 };
console.log("new Object : ", newObject);
