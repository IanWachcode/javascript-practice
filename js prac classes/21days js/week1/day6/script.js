let student = {
  name: "Ian",
  age: 20,
  grades: [75, 80, 90],
  getAverage: function () {
    let total = 0;
    for (let grade of this.grades) {
      total += grade;
    }
    return total / this.grades.length;
  }
};

console.log("Average:", student.getAverage());


