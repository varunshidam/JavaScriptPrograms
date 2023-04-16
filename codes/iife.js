(function print() {
  console.log("Hi Varun ...!");
})();

let str = "varun";
let rev = "";

for (let i = str.length - 1; i >= 0; i--) {
  rev = rev + str[i];
}
console.log(rev);

let num = 8757654;
let rem = 0;
while (num > 0) {
  rem = rem * 10 + (num % 10);
  num = Math.floor(num / 10);
}
console.log(rem);

const array = [23, 12,  6, 2, 33, 44, 85, 13, 49, 23];

for (let i = 1; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (array[i] > array[j]) {
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
}
console.log(array);
