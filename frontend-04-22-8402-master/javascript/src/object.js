// const car1 = [
//     ["marka", "volvo"],
//     ["model", "s80"],
//     ["yil", "2020"],
//     ["ucret", "2.000.000"]
// ];

// car1[0]

const car1 = {
    //key : value
    brand: "volvo",
    model: "s80",
    year: 2020,
    price: 2000000,
}

//dot notation
// console.log(car1.brand);

car1.price = 1500000;
car1.doors = 5;

// console.log(car1);


const student1 = {
    name: "Pinar",
    surname: "Bildirici",
    courses: ["Frontend Dev", "Java"],
    contactPref: "email",
    phone: "555-854-21-21",
    age: 27,
    isDeleted: false,
    isActive: true,
    instructors: ["Orkun Durmaz", "Umit Saki Vatansever", "Hicran Ertugral"],
    logAllValues() {
        console.log(this);
    },
    //kebap case kullanilmaz!!!!
    "kebab-case": "adana kebap",
    snake_case: "yilan dansi"
};

// console.log(student1);
// student1.logAllValues();

//bracket notation
// console.log(
//     student1["name"],
//     student1["kebab-case"]
// );

// const key1 = "isDeleted";
// console.log(
//     student1[key1],
// );

//forin
// for (const key in student1) {
//     console.log(key, student1[key]);
// }

//hasOwnProperty
// console.log(
//     student1.hasOwnProperty("email"),
//     student1.hasOwnProperty("name"),
// );

//crud limitations

//Object.freeze
// Object.freeze(student1);

//Object.seal
// Object.seal(student1)

//Object.preventExtensions
// Object.preventExtensions(student1);

// //create
// student1.email = "cilgin_coder34@gmail.com";

// //read
// console.log(
//     student1.name
// );

// //update
// student1.isActive = false;

// //delete
// delete student1["kebab-case"];

// console.log(student1);

//Object.keys
// console.log(
//     Object.keys(student1)
// );

// Object.keys(student1).forEach(key => console.log(key))

//Object.values
// console.log(
//     Object.values(student1)
// );

//Object.entries
// console.log(
//     Object.entries(student1)
// );