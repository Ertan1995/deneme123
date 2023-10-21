// function sayilariTopla(num1, num2) {

//     console.log(num1 + num2);

// }
// sayilariTopla(5, 20);

// -------------------------------






// const uyari = (mesaj)=> {
//     alert(mesaj);

// };

// uyari("Merhaba Dünyalı");

// ----------------------------------








// const sayilar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
// const tekSayilar = [];
// const ciftSayilar = [];


// const sayiAyir = (sayi) => {
//     for (let index = 0; index < sayilar.length; index += 2) {

//         tekSayilar.push(sayilar[index]);
//     }

//     for (let index = 1; index < sayilar.length; index+=2) {
//         ciftSayilar.push(sayilar[index]);
//     }


// };
// sayiAyir(sayilar);
// console.log(tekSayilar);
// console.log(ciftSayilar);


// ------------------------------------------------------



// ?????????????????????????????????????????????


// const sayiTopla = (num1, num2) => {
//     return num1 + num2;

// };


// const sayiCarp = (sayi, sayiTopl) => {
//     return sayi * sayiTopl();

// };

// sayiCarp(20, sayiTopla);
// console.log(sayiCarp);


// const sayiTopla = (num1,num2) =>{
// return num1 + num2;

// }
// let toplam = sayiTopla(1,2);
// console.log(toplam);





const yasHesapla = (bulundugumuzYil, dogumYil) => {

    return bulundugumuzYil - dogumYil;

};


// const user = ["Murat", "Okur", yasHesapla(2023, 1999)];



// const cumle = `Merhaba benim adim Murat yasim ${yasHesapla(2023, 1999)}`;

// let yasKati = yasHesapla(2023, 1999) * 2;

// const ertanYasi = yasHesapla(2023, 1995);

// const user2 = ["Ertan", "Eröksüz", ertanYasi];

// const cumle2 = `Merhaba ben Ertan Eröksüz yasim ${ertanYasi}`;

// const yasKati2 = ertanYasi * 5;

// document.write(user2, "<br>");
// document.write(yasKati2, "<br>");
// document.write(cumle2);




// const sayilar = [111, 99, 6, 2, 45, 88, 98, 34, 33, 73, 49];
// const tekSayilar = [];
// const ciftSayilar = [];


// const sayiAyir = (sayi) => {

//     for (let index = 0; index < sayi.length; index++) {
//         if (sayi[index] % 2 === 0) {
//             ciftSayilar.push(sayi[index]);
//         }
//         else {
//             tekSayilar.push(sayi[index])
//         }

//     }


// };

// sayiAyir(sayilar);


// const users = [];

// for (let index = 0; index < 3; index++) {

//     users.push(index+1,prompt("Adınızı giriniz : "))

//     users.push(prompt("Soyadınızı giriniz : "))
// }
// console.log(users);

// document.write(users);

// Kullanıcının girdiği renk dizinin içerisinde var ise tebrik mesajı verecek yok ise yok diyecek.


// const renk = ["Blue","Red","Yellow","Green","Pink","Orange","Black","White"];
//  secilenRenk = prompt("Renk Giriniz : ");
// let varMi = false;

// for (let index = 0; index < renk.length; index++) {
//    if (secilenRenk == renk[index]) {
//     varMi = true;
//    }    


// };


// if (varMi == true) {
//     console.log("Tebrikler Bildiniz");

// }
// else {
//     console.log("Bilemediniz");
// }



// -------------------------------------------------------------





// // Bir sayı dizisi oluştur
// // Kullanıcıdan bir sayı al 
// // Aldığımız sayı bu dizi içerisinde var mı kontrol et
// // Eğer varsa "Ekrana tebrikler bildiniz yaz"
// // Yoksa "Böyle bir sayı bulunamadı yaz."





// const sayilar = [123,555, 66, 4897, 534534, 6567567, 712312, 546458, 1239, 10, 1123121];

// let kullaniciSayisi = prompt("Lütfen Bir Değer Giriniz : ")

// let varMi = false;

// for (let i= 0; i < 11; i++) {

//     if (kullaniciSayisi == sayilar[i]) {

//     varMi = true;
//     }

// };

// if (varMi == true) {
//     document.write("Aferin Bildin")

// }
// else {
//     document.write("Olmadi kanka")
// };






























// Sayılar adında bir dizi olacak
// İçerisine istediğimiz sayıda random değer atayacak içerisine atacak


// Kullanıcının istediği sayıda 1-100 arasında sayı üreten ve bunu bir dizi içerisine atan kod.



// sayilar=[];
// let istenenAdet = prompt("Lütfen kaç adet random sayı istediğinizi giriniz.")

// for (let index = 0; index < istenenAdet; index++) {
//     sayilar[index] = Math.floor((Math.random() * 100) + 1);

// }
// console.log(sayilar);

// let kullaniciSayisi = prompt("Lütfen Bir Değer Giriniz : ")

// let varMi = false;

// for (let i= 0; i < 11; i++) {

//     if (kullaniciSayisi == sayilar[i]) {

//     varMi = true;
//     }

// };

// if (varMi == true) {
//     document.write("Aferin Bildin")

// }
// else {
//     document.write("Olmadi kanka")
// };















// Sayılar adında bir dizi olacak.
// İçerisine istediğimiz sayıda random değer atayacak içerisine atacak.
// Kullanıcının istediği sayıda 1-100 arasında sayı üreten ve bunu bir dizi içerisine atan kod.



// const sayilar = [];
// const sayiAdedi = 5;


// for (let index = 0; index < sayiAdedi; index++) {
//     sayilar[index] = Math.floor((Math.random() * 100) + 1);

// }
// console.log(sayilar);

// let kullaniciSayisi = prompt("Lütfen tahminde bulununuz : ");

// let varMi = false;

// for (let index = 0; index < sayilar.length; index++) {

//     if (sayilar[index] == kullaniciSayisi) {
//         varMi = true;
//     }
// };

// if (varMi == true) {

//     document.write("Aferin Be oloom");

// }
// else {
//     document.write("Sen ne anlatıyon be abla be abi ")
// }








// 1 adet random sayı üretecek 1-100 arasında
// Kullanıcıya tahmin soracak 
// Doğru ise bildin 
// Yanlış ise bilmedin diyecek.
// For - Dizi yok !!!!
// kullanıcı her sayı girdiğinde deneme sayısı 1 artsın ve en son bize bunu göstersin.








// let randomSayi = Math.floor((Math.random() * 100) + 1);
// console.log(randomSayi);
// let denemeSayisi = 10;


// while (true) {


//     let kullaniciSayisi = prompt("Toplamda 10 hakkınız var. Lütfen 1-100 arasındaki sayıyı tahmin ediniz: ");
//     // denemeSayisi++;
//     if (randomSayi == kullaniciSayisi) {

//        document.write("Doğru bildiniz aq. Deneme Sayiniz : "+ denemeSayisi);
//        if (denemeSayisi<10) {
//         document.write("Tebrikler 150 IQ")


//     }
//     else{
//         document.write("Ne mal adamsın aq  ${denemeSayisi} kere denedin ")
//     }
//         break;

//     }
//     else {


//         if (kullaniciSayisi < randomSayi) {
//             console.log("Daha büyük sayı giriniz")

//         }
//         else {
//             console.log("Daha küçük bir sayı giriniz.")
//         }

//     };
//     if (denemeSayisi<10) {
//         document.write("Tebrikler 150 IQ")


//     }
//     else{
//         document.write("Ne mal adamsın aq  ${denemeSayisi} kere denedin ")
//     }
// };







//-------------------------------------------------------




// Bir kullanıcıya kaç sınavı olduğu sorulacak
// Bu sınav sonuçları random olarak üretilecek.
// Sonra bu sınavların ortalaması alınacak ve ekrana yazdırılacak
// Kaç sınav olduğu ekrana yazdırılacak 
// Sınav ortalamasına göre sınıfı geçip geçmediği belli olacak
// Ve ekrana yazdıracağız
// Sonuç sıfır ise sınava girmemiştir yazacak.



// let sinavSayisi = prompt("Lütfen kaç adet sınava girdiğinizi yazınız.",)

// let sinavSonuclari = [];

// let toplam = 0;

// for (let index = 0; index < sinavSayisi ; index++) {
//     sinavSonuclari.push(Math.floor((Math.random()*100) +1)
//     )


// };

// for (let index = 0; index < sinavSonuclari.length; index++) {
//     toplam+= sinavSonuclari(index)

// }
// document.write(toplam);













// -------------------------------------------------------


// Kullanıcının ismi sorulacak
// Bir kullanıcıya kaç sınavı olduğu sorulacak
// Bu sınav sonuçları kişi kendisi girecek.
// Sonra bu sınavların ortalaması alınacak ve ekrana yazdırılacak
// Kaç sınav olduğu ekrana yazdırılacak 
// Sınav ortalamasına göre sınıfı geçip geçmediği belli olacak
// Ve ekrana yazdıracağız
// Sonuç sıfır ise sınava girmemiştir yazacak.



// -----------------------------------------------------


// İki kullanıcı için bu işlemler yapılacak 
// Hangisi daha yüksek ortalamayı almış ona bakılacak
// En yüksek sınav notunu bulan
// En düşük sınav notunu bulan.


// ----------------------------------------------------



// Kullanıcıya kaç öğrenci olduğunu soracak
// Her öğrencinin kaç sınavı olduğunu soracak ( her öğrenci için eşit sınav sayısı)
// En son her öğrencinin adı ile beraber not ortalamasını ekrana yazacak
// En başarılı olanı yaz.



// -----------------------------------------------------------------










// let sayi = 5;

// let kare = sayi*sayi;

// console.log(kare);





// Gelen kullanıcıya Hoş geldin yazdır.

// let ad;

// ad=prompt("Adınızı Giriniz :");

// document.write("Hoş Geldin "+ ad);




// const gallery = [
//     {
//         brand: "Alfa Romeo",
//         model: "Giulietta",
//         modelYear: 2016,
//         engine: "1.6",
//         price: 800000,
//         hp: "105",
//         color: "red",
//         isUsed: true,
//         isAccident: false

//     },

//     {
//         brand: "Bmw",
//         model: "520",
//         modelYear: 2020,
//         engine: "1.6",
//         price: 1200000,
//         hp: "155",
//         color: "white",
//         isUsed: true,
//         isAccident: false

//     },

//     {
//         brand: "Mercedes",
//         model: "Clk200",
//         modelYear: 2012,
//         engine: "2.0",
//         price: 1000000,
//         hp: "170",
//         color: "red",
//         isUsed: true,
//         isAccident: false

//     },
//     {
//         brand: "Volvo",
//         model: "XC90",
//         modelYear: 2023,
//         engine: "2.0",
//         price: 3700000,
//         hp: "110",
//         color: "Brown",
//         isUsed: false,
//         isAccident: false,

//     },
// ];









// const isUsedCar = gallery.some (car => car.isUsed === false );

// console.log(isUsedCar);




// const carHp = gallery.filter(car => car.hp > 150);

// console.log(carHp);



// const newArr = [];


//  students.forEach(
//         (student) => {

//           newArr.push(student + "s")
//         }
//     );


// console.log(newArr);






// const newStudens = students.map( (student,index)=> {


//     return index+1 +" "+ student

//  }


// );


// console.log(newStudens);





// const isimler = ["Ertan", "Murat", "Mahir", "Orkun","Onur Alp"]





// // 1- İsimlerden oluşan bir dizi oluşturulacak
// // Bu diziyi sıralamamız gerekiyor
// // Bu sıralamayı tersine çevir

// // 2- Sayı dizisi oluşturulacak
// // Sıralanacak 
// // Terse çevirilecek


// // 3-Bir fonksiyon yazacağız hangi diziyi gönderirsek gönderelim sıralayabileceğiz.


// // Aynı sayı dizisindeki her bir elemanı toplayıp döndür.

// // Her bir elemanın dört işlemini yaptır

// // isim dizilerinin her bir elemanının arasına elma yazdır.


// const numbers = [6,9,4,3,5,1,7,8,2,10];


// // İsim sıralama
// console.log(isimler.sort());

// // İsimleri tersten sırala
// console.log(isimler.reverse());

// // Numaraları sırala
// console.log(numbers.sort((a,b)=>a-b));

// // Numarayı terse çevir
// console.log(numbers.reverse());

// // Dizi içerisindeki numaraları topla

// console.log(numbers.reduce((toplam,num) => {return toplam+num }));

// // Dizi içerisindeki numaraları çıkarma
// console.log(numbers.reduce((toplam,num) => {return toplam-num }));

// // Dizi içerisindeki numaraları çarpma
// console.log(numbers.reduce((toplam,num) => {return toplam*num }));

// // Dizi içerisindeki numaraları bölme
// console.log(numbers.reduce((toplam,num) => {return toplam/num }));

// // Aralarına elma 
// console.log(isimler.reduce((firstVal,secondVal) => firstVal + " elma "+ secondVal));


// // Sayıların karelerini alma

// const sayi = [3,4,5];

// console.log(sayi.reduce((toplam,num) => toplam+num*num,0));




// // Dizi sıralayan fonksiyon
// sirala = (arr) => { return arr.sort().reverse()};
// console.log(sirala(isimler));




// //  Numara sıralayan fonksiyon

// siralaNum = (array) => { return array.sort( (a,b) => {a-b})};

// console.log(siralaNum(numbers));





// Ağ nedir
// İp adresi nedir
// Dns nedir 
// Network nedir




// const XHRRequest = (methodType,url,callBackFunc) => {

//     const request = new XMLHttpRequest ();

//     request.addEventListener(
//         "readystatechange",()=>{
//             if (request.readyState === 4 && request.status === 200) {
//                 const data = JSON.parse(request.responseText);
//                 callBackFunc (null , data)
//             }
//             else if (request.readyState === 4){
//                 callBackFunc (`${request.status} - ERROR`)
//             }
//             else { console.log(request.readyState);}
//         }
//     )

// };

// XHRRequest("GET",)



// let sayiA;
// sayiA = Number(prompt("Lütfen A değerini giriniz : "));

// let sayiB;
// sayiB = Number(prompt("Lütfen B değerini giriniz : "));

// let topla = sayiA+sayiB;
// let cikar = sayiA-sayiB;
// let carp = sayiA*sayiB;

// console.log(topla);

// console.log(cikar);

// console.log(carp);

//  alert("Toplam : "+topla +"Çıkar : "+cikar+"Carp : "+carp);



// let s1,s2,ortalamasi;

// s1 = 3;
// s2 = 5;

// console.log(
// ortalamasi=(s1+s2)/2


// );


// let deger = prompt("Değer giriniz : ");
// deger++


// document.write( );





