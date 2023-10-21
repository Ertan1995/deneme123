const students = ["Goktug", "Rabia", "Mahir", "Ertan", "Canbulat"];

const studentObjList = [
    {
        name: "Pinar",
        surname: "Bildirici",
        courses: ["Frontend Dev", "Java"],
        contactPref: "email",
        phone: "555-854-21-21",
        age: 27,
        isDeleted: false,
        isActive: true,
        instructors: ["Orkun Durmaz", "Umit Saki Vatansever", "Hicran Ertugral"],
    },
    {
        name: "Canbulat",
        surname: "Onarok",
        courses: ["Frontend Dev", "React Native"],
        contactPref: "phone",
        phone: "553-621-21-23",
        age: 35,
        isDeleted: false,
        isActive: true,
        instructors: ["Orkun Durmaz", "Metin Korhan Kosece"],

    },
    {
        name: "Goktug",
        surname: "Ertekin",
        courses: ["React Native", "Python"],
        contactPref: "email",
        phone: "532-678-23-56",
        age: 21,
        isDeleted: false,
        isActive: true,
        instructors: ["Onur Alp Ayin", "Umit Saki Vatansever"],
    },
    {
        name: "Murat",
        surname: "Okur",
        courses: [".Net", "Angular"],
        contactPref: "email",
        phone: "544-456-23-56",
        age: 37,
        isDeleted: false,
        isActive: true,
        instructors: ["Ridvan Aksoy", "Cagatay Yildiz"],
    },
]

//forEach
// const forEachResult = students.forEach(
//     (student, index, arr) => {
//         console.log(student);
//         return student;
//     }
// );
// console.log(forEachResult); /* undefined doner */

// const logStudent =  (student, index, arr) => {
//     console.log(student);
// };

// students.forEach(logStudent);
// studentObjList.map(student => console.log(student));

const evenNumbers = [];
const oddNumbers = [];

//map

//dogru bir kullanim degil!
// console.log(
//     students.map(
//         (student, index) => {
//             if(index % 2){
//                 oddNumbers.push(student);
//             }
//             else{
//                 evenNumbers.push(student);
//             }

//             return student;
//         } 
//     )
// );

// const mapResult = students.map(
//     (student, index) => `${index + 1} - ${student}`
// );

// console.log(
//     studentObjList.map(
//         student => student.phone
//     )
// );

const studentPhoneList = studentObjList.map(student => student.phone);

//filter
const scores = [0, 55, 32, 90, 97, 100, 70, 65, 45];

// console.log(
//     scores.filter(
//         (score) => score > 50
//         // {
//             // if (score > 50) {
//             //     return true;
//             // }
//             // else {
//             //     return false;
//             // }
//         // }
//     )
// );

// console.log(scores);

// const filterResult = scores.filter(score => score > 70);

// console.log(
//     studentObjList.filter(student => student.age < 29)
// );


//some
// console.log(
//     scores.some(score => score > 20)
// );

// console.log(
//     studentObjList.some(student => student.name === "Pinar")
// )

//every
// console.log(
//     scores.every(score => score < 0)
// );

// console.log(
//     studentObjList.every(student => student.isActive )
// );

//find
console.log(
    studentObjList.find(
        student => student.courses.includes("React Native")
    )
);

//findLast
console.log(
    studentObjList.findLast(
        student => student.courses.includes("React Native")
    )
);

//findIndex
console.log(
    studentObjList.findIndex(
        student => student.courses.includes("React Native")
    )
);

//flat
const multiDimensionalArray = [1, 2, 3, [11, 22, 33, [111, 222, 333]]];
console.log(
    multiDimensionalArray.flat(2)
);