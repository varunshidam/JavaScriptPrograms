const getSum = (a) => {
  return (b) => (c) => (d) => (e) => {
    console.log(a + b + c + d + e);
  };
};
getSum(2)(3)(4)(5)(6);

// when a function, instead of taking single arguments it takes all argument
// at a time it takes a first one and return the new function & it takes a
// second one and  returns a function like this....
