//:true :false

let isDeleted = false;
let isOnStock = true;
let isActive = false;

let fullName;
fullName = "Orkun Durmaz";

// console.log(typeof isDeleted);
// console.log(isDeleted);


//conparison
// >, <, <=, >=, !=, ==

// let sum = (5 == 6);
// console.log(sum);
// console.log(6 == 6);
// console.log(6 > 6);
// console.log(2 < 6);
// console.log(6 <= 6);
// console.log(2 >= 6);


// console.log(5 === "5");
// console.log(5 == "5");
// console.log(5 != "5");
// console.log(5 !== "5");
// console.log(typeof "5");


//truthy, falsy values
// console.log(Boolean(35));
// console.log(Boolean(1));
// console.log(Boolean(-1));

//falsy
// console.log(Boolean(""));
// console.log(Boolean(0));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(NaN));

//control statements
let age = 25;

// if (age > 18) {
//     console.log("Can pass");
// }
// else if(age > 24) {
//     console.log("Merhaba!");
// }
// else if(age > 24) {
//     console.log("Merhaba!");
// }
// else if(age > 24) {
//     console.log("Merhaba!");
// }
// else if(age > 24) {
//     console.log("Merhaba!");
// }
// else {
//     console.log("Cannot pass");
// }


//expression vs statement
5 /* expression */
10 /* expression */
"Orkun" /* expression */
isDeleted /* expression */
NaN, null, undefined /* expression */
// if() /* statement */
// return, const, let, for, while, forin, forof, 


//ternary if
// const isAdult = age > 18
//     ? true
//     : false;

// age > 18
//     ? console.log("adult")
//     : console.log("underaged");


// if (age > 18) {
//     console.log("adult");
// }
// else {
//     console.log("underaged");
// }

//logical expression
// &&, ||

// true && true => true
// true && false => false
// false && true => false
// false && false => false

// true || true => true
// true || false => true
// false || true => true
// false || false => false

// if(age > 12 && age < 18) {
//     console.log("buyuk cocuk");
// }

// if(isDeleted || !isActive){
//     console.log("Hesabinizi aktive edin!");
// }


// isDeleted && console.log("Bu hesap silinmistir");
// !isDeleted && console.log("Bu hesap silinmemistir");
// isDeleted || console.log("Bu hesap silinmemistir");

let dayIndex = 7;

switch (dayIndex) {
    case 0:
        console.log("Monday");
        break;
    case 1:
        console.log("Tuesday");
        break;
    case 2:
        console.log("Wednesday");
        break;
    case 3:
        console.log("Thursday");
        break;
    case 4:
        console.log("Friday");
        break;
    case 5:
        console.log("Saturday");
        break;
    case 6:
        console.log("Sunday");
        break;
    case 7:
    case 8:
    case 9:
        console.log("Still invalid day index");
        break;
    default:
        console.log("Invalid day index");
        break;
}

let monthIndex = 0;
   
switch ((Math.abs(monthIndex) - 1) % 12) {
    case 0:
        console.log("Jan");
        break;
    case 1:
        console.log("Feb");
        break;
    case 2:
        console.log("Mar");
        break;
    case 3:
        console.log("Apr");
        break;
    case 4:
        console.log("May");
        break;
    case 5:
        console.log("Jun");
        break;
    case 6:
        console.log("Jul");
        break;
    case 7:
        console.log("Aug");
        break
    case 8:
        console.log("Sep");
        break
    case 9:
        console.log("Oct");
        break;
    case 10:
        console.log("Nov");
        break;
    case 11:
        console.log("Dec");
        break;
    default:
        console.log("Invalid month index");
        break;
}
