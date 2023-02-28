const string = "varun sanjay sidam";
const result = string.split(" ");
console.log(result);
for (let value of result) {
  if ((value = "sanjay")) {
    console.log("true");
  } else {
    console.log("false");
  }

  console.log(value);
}
