//reference type
const students = ["Mahir", "Murat", "Umut", "Goktug", "Taha", "Hulya"];

//YANLIS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const newStudents = students;

// newStudents.pop();
// newStudents.pop();
// newStudents.pop();

// newStudents.push("Lorem");


// console.log("newStudentList: ", newStudents);
// console.log("studentList: ", students);

//spread
// console.log(students[0], students[1], students[2], students[3], students[4]);
// console.log(...students);
// const newStudents = [students[0], students[1], students[2], students[3], students[4]];
const newStudents = ["Canbulat", ...students, "Rabia"];

// newStudents.pop();
// newStudents.pop();
// newStudents.pop();

// console.log("newStudentList: ", newStudents);
// console.log("studentList: ", students);

const student1 = {
    fullName: "Rabia Turkum",
    courses: ["Frontend Dev", "React Native"],
    instructors: ["Orkun Durmaz"],
    age: 24,
    phone: "555 852 6395"
};

// const student2 = { ...student1, fullName: "Canbulat Onarok", age: 27 }

// console.log(student2);

// //rest
// const logAllParams = (first, second, third, ...goktug) => console.log(first, second, third, goktug);

// logAllParams("lorem", "ipsum", "dolor", 1, 2, 3, 4, 5, 6, 7);

// console.log();
// students.push

//destructure
const [studentName1, studentName2, , studentName4, ...restOfStudents] = students;
// const _studentName1 = students[0];
// const _studentName2 = students[1];
// const _studentName3 = students[2];
console.log(studentName1, studentName2, studentName4, restOfStudents);

//renaming property during destructure
const { fullName: studentName, courses, age } = student1;
console.log(studentName);

student1.fullName;


