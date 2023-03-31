let number = [99, 9, 88, 4, 3, 2, 111, 2, 3, 4, 5, 6, 11, 22, 33, 44, 55];
console.log("Number : ", number);
for (let i = 1; i < number.length; i++) {
  for (let j = 0; j < i; j++) {
    if (number[i] < number[j]) {
      var temp = number[i];
      number[i] = number[j];
      number[j] = temp;
    }
  }
}
console.log(number);
