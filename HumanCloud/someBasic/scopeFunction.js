var val = "fool- outside";

// function display() {
//   var val = "fool inside";
//   console.log("Inside : ", val);
// }
// display();

//immediately invoke function expression
(function display() {
  var val = "fool inside";
  console.log(" 1) Inside : ", val);
})();

(function IIFE(bar) {
  var val = "fool inside";
  console.log(" 2) Inside : ", val);
})(val);

for (let i = 1; i <= 5; i++) {
  (function IIFE1() {
    var j = i;
    console.log(j);
  })();
}

console.log("In setTimeOut interval ");
for (let i = 1; i <= 5; i++) {
  setTimeout(function () {
    console.log(i);
  }),
    i * 15000;
}

console.log("Outside : ", val);
