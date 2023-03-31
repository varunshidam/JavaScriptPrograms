let array = ["varun", "vaibhav", "akash", "akar", "vaishnavi", "mohit", "mona"];
let search = ["va"];

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < search.length; j++) {
    if (array[i].includes(search[j])) {
      console.log(array[i]);
    }
  }
}
