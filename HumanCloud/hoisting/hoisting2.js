function test() {
  console.log(a);
  console.log(b);
  console.log(c);
  // b and c hoisted in temporal dead zone
  // the variable are in the scope but they are not yet decalared  
  var a = 10;
  let b = 20;
  const c = 30;
}

test();
