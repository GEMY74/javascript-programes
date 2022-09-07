// teacher constructor function
function Teacher(names, id, phone) {
  this.names = names;
  this.id = id;
  this.phone = phone;
}

// student constructor function

function Student(
  names = "mohamed",
  id = "10",
  phone = "0102222",
  grade = [10, 40]
) {
  this.names = names;
  this.id = id;
  this.phone = phone;

  // can't access outside the constructor
  function CalcSum() {
    var sum = 0;
    for (i = 0; i < grade.length; i++) {
      sum += grade[i];
    }
    return sum;
  }

  this.show = function () {
    if (CalcSum(grade) >= 50) {
      console.log("student has success");
    } else {
      console.log("student has failed");
    }
  };
}

Teacher.prototype.Print = Student.prototype.Print = function () {
  console.log(this.phone);
};

var techear = new Teacher("mohamed", 12, "010");
console.log(techear.Print());

var student = new Student('gamal', 12 , '0122923131',[20,70])
console.log(student.Print())
console.log(student.show())