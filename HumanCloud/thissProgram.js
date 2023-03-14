const user = {
  name: "varun",
  age: 26,
  city: "pune",
  display() {
    console.log(this.name, +" " + this.age, +" " + this.city);
  },
};

user.display();
