//function declaration, hoisting, this
// function greet(){
//     //islemler...
//     //islemler...
//     //islemler...
//     //islemler...
//     //islemler...
//     console.log("Hello World!");
// }

// greet();

// function greetPerson(personName){
//     console.log("Hello " + personName);
// }

// greetPerson("Taha");

// console.log(
//     calculateRectangleArea(5, 5)
// );

function calculateRectangleArea(firstEdge, secondEdge) {
    // const muratSabiti = 13.189731;
    const area = firstEdge * secondEdge;
    return area;
    console.log("Programlama calis!"); /* Calismaz */
}

// const result = calculateRectangleArea(5, 10);
// console.log(result);

// console.log(
//     calculateRectangleArea(5, 15)
// );


//function expression, hoisting olmuyor, this
// const greetPerson = function (name) {
//     return `Hello ${name}!`;
// }

// console.log(
//     greetPerson("Orkun")
// )
// console.log(this.window);


//arrow function, hoisting olmuyor, this dikkatli kullanilmali
const brewCoffee = (numOfCups, isBlack = true) => {
    console.log("Your coffee is brewing...");
    console.log("...");
    console.log("...");
    console.log(`${numOfCups} cups of ${isBlack ? "Black" : "Milky"} Coffee is ready!`);
}

brewCoffee(3);

//implicit return
const greetPerson = person => `Hello ${person}!`
