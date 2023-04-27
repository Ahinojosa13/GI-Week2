// Create an array of students holding their last name, first name, and age with 3 students. To validate, please log a greeting with the first name,
// last name and age of the 2nd student. The output should look like "Hello, my name is John Doe and I'm 19 years old."

const student1 = { lastName: "Hinojosa", firstname: "Anthony", age: 23 }
const student2 = { lastName: "Sanchez", firstname: "Angel", age: 26 }
const student3 = { lastName: "Doe", firstname: "John", age: 23 }

const array = [student1, student2, student3]

var validate = (student) => {
    return "Hello, my name is" + " " + student.firstname + " " + student.lastName +  " and I'm" + " " +  student.age + ".";
};

console.log(validate(student2));
