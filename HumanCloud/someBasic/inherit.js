class employee {
  constructor(name, age, salary) {
    this.empname = name;
    this.empage = age;
    this.empsalary = salary;
    // console.log("Parent Class");
  }
  info() {
    console.log("Emp Name : ", this.empname);
    console.log("Emp Age : ", this.empage);
    console.log("Emp Salary : ", this.empsalary);
    console.log("");
  }
}

class subEmployee extends employee {
  info() {
    console.log("Sub Employee ");
    console.log("Emp Name : ", this.empname);
    console.log("Emp Age : ", this.empage);
    console.log("Emp Salary : ", this.empsalary);
    console.log("");
  }
}

let a = new employee("Snajay", 55, 90000);
let b = new subEmployee("varun", 25, 30000);
a.info();
b.info();
