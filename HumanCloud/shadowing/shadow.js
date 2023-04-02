// var let const
// scope


function test() {
  let a = "Hello";
  if (true) {
    let a = "Hi";
    console.log(a);
    // Hi
  }
  console.log(a);
  // Hello
}
test();
