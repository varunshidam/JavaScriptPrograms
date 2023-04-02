// A closure is the combination of a function bundle together
// to provide the lexical env...
// A inner function can have acces of outer function

function x() {
  let a = 10;
  function y() {
    console.log(a);
  }
  y();
}
x();


