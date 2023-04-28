function x() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i*3000);
  }
}
x()

//6 6 6 6 6
// var is a function scope so last updated value does not change

// function y() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 3000);
//   }
// }
// y();

// 1 2 3 4 5

// let is a block scope so each and every time it create a new variable
