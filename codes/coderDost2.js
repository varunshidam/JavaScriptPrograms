const string = "my name is varun my lenme is varun";
console.log(string.length);

let count = 0;
for (let i = 0; i < string.length; i++) {
  if (string[i] != " ") {
    count++;
  }
}
console.log(count);
