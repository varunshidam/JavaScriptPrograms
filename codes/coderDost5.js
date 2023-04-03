const number = 8087757616;
const PhoneNumber = number.toString().split("");
console.log(PhoneNumber);
const result =
  PhoneNumber.splice(0, 5).join("")  +
  "####";
console.log(result);
