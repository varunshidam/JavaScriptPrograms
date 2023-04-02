// var let const
// scope

function test() {
  var a = "Bye";
  if (true) {
    var a = "GoodBye";
    console.log(a);
    // GoodBye
  }
  console.log(a);
  // GoodBye
}
test();
