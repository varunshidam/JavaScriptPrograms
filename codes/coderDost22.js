const number = 8087757616;
console.log("Mobile Number : ", number);
const MobNum = number.toString().split("");

for (let i = 0; i < MobNum.length; i++) {
  if (i >= 6) {
    MobNum[i] = "#";
  }
}
console.log("After Modified : ", MobNum.join(""));
