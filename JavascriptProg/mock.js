obj = {
  name: "varun",
  arrowFunc: function () {
    console.log(this.name);
  },
  normalFunc: () => {
    console.log(this.name);
  },
};
console.log(obj.arrowFunc());
console.log(obj.normalFunc());
 