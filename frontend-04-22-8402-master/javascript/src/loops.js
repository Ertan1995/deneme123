const students = ["Goktug", "Rabia", "Mahir", "Ertan", "Hulya", "Pinar", "Taha"];

//while
// let counter = 0;
// while (counter < 10) {
//     console.log(counter);
//     counter++;
// }

// let index = 0;

// while (index < students.length) {
//     console.log(index, students[index]);
//     index++;
// }


//do while
// do {
//     console.log(students[0]);
// } while (false);

//for
// for (let index = 0; index < students.length; index++) {
//     console.log(index, students[index]);
// }

// console.log(index++);

// for (let index = students.length - 1; index >= 0; index--) {
//     console.log(students[index]);    
// }

for (let index = 1; index < students.length; index += 2) {
   console.log(students[index]);

}