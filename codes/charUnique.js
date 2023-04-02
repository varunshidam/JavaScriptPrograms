var str = "big black bug bit a big black dog on his big black nose";
var strArray = str.split(" ");
const res = strArray.filter(function (item, pos, self) {
  return self.indexOf(item) != pos;
});
const result = [...new Set(res)];
console.log(result);
