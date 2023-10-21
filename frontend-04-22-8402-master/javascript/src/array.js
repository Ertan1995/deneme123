// //index           0      1      2      3
// const months = ["Jan", "Feb", "Mar", "Apr"];

// const arrayExample1 = ["Opel", 50000, true];
// const arrayExample2 = ["Opel", 50000, true, [0, 1, 2]];

// // console.log(arrayExample2[3]);

// months[4] = "May";
// months[0] = "Orkun";

// // console.log(months);
// // console.log(months[5]);

// //length
// console.log(
//     months.length
// );

// months[months.length] = "Jun";

const students = ["Goktug", "Rabia", "Mahir", "Ertan", "Rabia"];


//push
// console.log(
//     students.push("Canbulat", "Uruncan")
// );

// console.log(students);


//pop
// console.log(
//     students.pop()
// );

// console.log(
//     students
// );

//shift
// console.log(
//     students.shift()
// );

// console.log(students);

//unshift
// console.log(
//     students.unshift("Gamze", "Canbulat")
// );

// console.log(students);

const newStudents = ["Orkun", "Korhan", "Murat"];


//concat
const concatStudents = students.concat(newStudents);
// console.log(concatStudents)


//join
// console.log(
//     newStudents.join(",\n"),
//     "\n",
//     newStudents
// );

const sentence = "Don't take offence at my innuendo";

//split String Method
// console.log(
//     sentence.split(" ")
// );

//indexOf, lastIndexOf
const foundIndex = students.indexOf("Rabia", students.indexOf("Rabia") + 1);
// console.log(foundIndex);

// console.log(
//     students.lastIndexOf("Rabia")
// );

//slice
// console.log(
//     students.slice(0,3)
// );

//splice
console.log(
    students.splice(1, 0, "Hulya", "Canbulat"),
    students
);


const products = [
    //string: urun adi, number: urun fiyati, boolean : stock durumu
    "iPhone 14", 45000, true,
    "Note 20", 25000, false,
    "Galaxy 23", 35000, true
]

//sadece splice kullaniliyor
//4 ornek sadece ekleme
//4 ornek silme
//4 ornek guncelleme
//4 ornek tamami