// HOF is function in js which you can pass functions as parameters to other functions
// and also return them as values.

//Map method use create a new array from existing one by applying a function
// which takea callback function gets 3 patramete r

const num = [11, 33, 55, 77];

const numMAp = num.map((element) => {
  return element / 11;
});
 
console.log(numMAp);
