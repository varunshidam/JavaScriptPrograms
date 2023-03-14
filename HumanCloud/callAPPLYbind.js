const user = {
  name: "varun",
  age: 26,
  city: "pune",
  printdetails: function (data) {
    console.log(this.name, +" " + this.age, +" " + this.city, " " + data);
  },
};

const alteerUser = {
  name: "sanjay",
  age: 50,
  city: "Amravati",
};

// user.printdetails.call(alteerUser, " : User Detais ");

user.printdetails.apply(alteerUser, ["Hi", "Hello"]);
