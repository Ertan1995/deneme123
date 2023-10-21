// console.log("4" / 2);
// console.log("4" / "2");
// console.log("Rabia" / "2");

//                01234567890123456789012345678
const sentence = "Bebegim oldun daha ilk gunden";

//length
// console.log(sentence.length);

const studentName1 = "Mahir Kursun";
const studentName2 = 'Murat Okur';
const studentName3 = `Simge Sultan`;

//escape
// console.log(`Lorem ipsum dolor sit \`amet\` non elit.`);
// console.log('Lorem ipsum dolor sit \'amet\' non elit.');
// console.log("Lorem ipsum dolor sit \"amet\" non elit.");

//slice
const sliceExample = sentence.slice(5, 10);
// console.log(sliceExample);
// console.log(sentence.slice(5, -10));

//substring
const substringExample = sentence.substring(5, 10);
// console.log(substringExample);
// console.log(sentence.substring(7, 1));

//substr
// console.log(sentence.slice(5, 10));
// console.log(sentence.substring(5, 10));
// console.log(sentence.substr(5, 10));

//replace, replaceAll
// console.log(sentence.replace("Bebegim", "Bebisim"));
// console.log(sentence.replace(" ", ""));
// console.log(sentence.replaceAll(" ", ","));
// console.log(sentence);

//indexOf, lastIndexOf
// console.log(
//     sentence.indexOf(" ", sentence.indexOf(" ") + 1)
// );
// console.log(
//     sentence.lastIndexOf(" ", sentence.lastIndexOf(" ") - 1)
// );
// console.log(
//     sentence.indexOf("sanat")
// );
// console.log(sentence.indexOf("oldun"));

//search
// console.log(
//     sentence.search("daha")
// );

//includes
// console.log(
//     sentence.includes("ilk"),
//     sentence.includes("mantik")
// );

const firstName = "Ertan";
const lastName = "Eroksuz";
const course = "Frontend Dev";
const gradDate = "30-Aug-2023";

//concat
// console.log(
//     firstName.concat(" ", lastName),
//     firstName + " " + lastName
// );

//Template Literals
// console.log(
//     `Ogrencimiz ${firstName} ${lastName}, ${course} egitimini ${gradDate} tarihinde tamamlayacaktir.`
// );

//trim
// console.log(
//     "     Mahir    Kursun    ".trim()
// );

//toLowerCase, toUpperCase
console.log(
    sentence.toUpperCase(),
    sentence.toLowerCase()
);