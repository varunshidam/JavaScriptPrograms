let string = "methods you can use to check version of Cent";
let strArray = string.split("");
strArray.unshift(" ");
console.log(strArray);

for (let i = 1; i < strArray.length; i++) {
  if (i % 5 === 0) {
    strArray[i] = "#";
    console.log(strArray);
  }
}
console.log(strArray.join(""));
// methods you can use to check version of Cent
// meth#ds y#u ca# use#to c#eck #ersi#n of#Cent
