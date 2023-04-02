// How to convert array to object

const array = ["a", "b", "f", "r", "f", "t", "w"];
const object = array.reduce(
  (a, it, i) => ({
    ...a,
    [i]: it,
  }),
  {}
);

console.log("Now Object : ", object);
