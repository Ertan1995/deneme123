const writeMessage = (msg) => {
    //islemler...
    //islemler...
    //islemler...
    //islemler...
    console.log(msg);
}


const greetPerson = (person, callbackFunction) => {
    //islemler...
    //islemler...
    //islemler...
    //islemler...
    callbackFunction(`Hello ${person}`);
}

// greetPerson("Gamze", console.log);

const students = ["Goktug", "Rabia", "Mahir", "Ertan", "Rabia"];


const customForEach = (arr, callbackFunc) => {
    for (let index = 0; index < arr.length; index++) {
        callbackFunc(arr[index], index);
    }
}

// customForEach(students, console.log);
// customForEach(students, alert);

// customForEach(
//     ["Goktug", "Rabia", "Mahir", "Ertan", "Rabia"],
//     (student, index) => {
//         console.log(`${index} - ${student}`)
//     }
// )

// const logStudentWithIndex = (student, index) => {
//     console.log(`${index} - ${student}`)
// }

// customForEach(
//     students,
//     logStudentWithIndex
// )
const customMap = (arr, callbackFunc) => {
    const resultArr = [];
    for (let index = 0; index < arr.length; index++) {
        resultArr.push(
            callbackFunc(arr[index], index)
        );
    }
    return resultArr;
}

const detailedStudentList = customMap(
    students,
    (student, index) => {
        return `Ders: Frontend\nHoca: Orkun Durmaz\nOgrenci: ${student}`
    }
);

// console.log(detailedStudentList);
customForEach(detailedStudentList, console.log);

console.log(students);