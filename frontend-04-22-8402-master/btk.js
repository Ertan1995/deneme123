// // // // Girilen üç sayının ortalaması 

// // // let s1 = Number(prompt("1. Sayı : "));
// // // let s2 = Number(prompt("2. Sayı : "));
// // // let s3 = Number(prompt("3. Sayı : "));

// // // let ortalama = ((s1 + s2 + s3) / 3);

// // // alert(ortalama);


// // // // 


// // // let canva = prompt("Bir değer giriniz : ")


// // // if (canva > 50) {
// // //     document.write("Aferin la Yarram ")

// // // }
// // // else {
// // //     document.write("Başaramadın gafanı sikiyim")
// // // };


// // // let age = prompt("Yaşınızı giriniz : ")

// // // if (age < 18) {
// // //     document.write("Yaşınız 18'den küçük")

// // // }
// // // else {

// // //     document.write("Devam edebilirsiniz")
// // // }




// // // let vize = Number(prompt("Vize notunu giriniz : "));

// // // let final = Number(prompt("Final notunuzu giriniz : "));

// // // let ortalama = (vize + final) / 2


// // // if (ortalama <50) {
// // //     document.write("Kaldı")

// // // }
// // // else if (ortalama < 60) {
// // //     document.write("Harf notunuz DC+")
// // // }
// // // else if (ortalama < 85) {
// // //     document.write("Harf notunuz CB ")
// // // }
// // // else {
// // //     document.write("Harf notunuz BB")
// // // }





// // // Yaş sorgulaması

// // let age = prompt("Yaşınızı giriniz : ")

// // if (age < 5) {
// //     document.write("bebek")
// // }
// // else if (age < 15) {

// //     document.write("Çocuk")
// // }
// // else if (age <= 25) {
// //     document.write("Genç")
// // }
// // else if (age < 35 ) {
// //     document.write("Yetişkin")
// // }
// // else { document.write("Yaşlı")}



// // Sadece pozitif sayıların karesini bulan proje

// let sayi4 = Number( prompt("Bir sayı giriniz"));

// let karesi;

// if (sayi > 0) {
//    karesi = sayi * sayi;
//    document.write("Bu sayının karesi : " + karesi ) 


// }
// else {
//     document.write("Yeni bir değer giriniz girdiğiz değer negatif bir sayı")
// };



// 

// let sayi = prompt("Bir değer giriniz : ")

// let karesi ;

// if (sayi < 0) {
//     document.write("Yeni bir değer giriniz girdiğiniz değer negatif bir sayı ")

// }
// else {

// karesi = sayi * sayi;
// document.write("Bu sayının karesi "+ karesi )
// };



// İki sayıdan büyük olanı bulan 

// let s1 = prompt("Birinci sayıyı giriniz : ")

// let s2 = prompt("İkinci sayıyı giriniz : ")
// if (s1 == s2) {
//     document.write("Sayılar birbirine eşit")
// }

// else if (s1 < s2) {
//     document.write("Büyük sayı : " + s2)

// }
// else {
//     document.write("Büyük sayı : " + s1)
// }












// // İki vizenin yüzde 40 finalinde % 60'ını alan proje


// let vize1 = Number(prompt("1. Vize notunu giriniz : "));

// let vize2 = Number(prompt("2. Vize notunu giriniz : "));

// let final = Number(prompt(" Final notunu giriniz "));

// let vizeOrtalama = 40 * (vize1 + vize2 ) / 100;

// let finalOrtalama = 60 * (final) / 100;

// let notOrtalamasi = vizeOrtalama + finalOrtalama;


// if (notOrtalamasi < 50) {
//     document.write("Kaldınız")

// }
// else if (notOrtalamasi <= 60) {

//     document.write("Harf notunuz : DC+ ")
// }
// else if (notOrtalamasi <= 70) {
//     document.write("Harf notunuz CC")
// }

// else if (notOrtalamasi <= 80) {
//     document.write("Harf notunuz : CB")

// }
// else if (notOrtalamasi <= 90) {
//     document.write("Harf notunuz : BB")
// }
// else {
//     document.write("TEBRİKLER Harf notunuz : AA")
// }



// HAVA SICAKLIĞI 

// let havaSicakligi =Number( prompt("DERECEYİ GİRİNİZ : "));

// if (havaSicakligi < 0) {
//     document.write("Donducu")
// }
// else if (havaSicakligi < 15 ) {
//     document.write("Soğuk")
// }
// else if (havaSicakligi < 25) {
//     document.write("Ilık")
// }
// else {
//     document.write("SICAK")
// };

// let sayac = 0;

// for (let index = 0; index < 5;   ) {
//     sayac++;
//     document.write(sayac)
//     document.write(": MERHABA ")

      
// }


// for (let index = 0; index < array.length; index++) {

//     document.write(" ")
// }



for (let index = 0; index < 50; index++)

{

    document.write(index,"<br>")

};

