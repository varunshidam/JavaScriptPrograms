let array = ["varun", "vaibhav", "akash", "akar", "vaishnavi", "mohit", "mona"];
let search = ["varun"];

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < search.length; j++) {
    if (array[i] == search[j]) {
      console.log(array[i]);
    }
  }
}
