// 2.3-masala
//     Muammo:
//     Maxsulot narxi 4.99 dollar.
//     Agarda shu maxsulotdan 5 dona sotib olinsa console.log(4.99 * 5); // -> 24.950000000000003
//     Lekin bilamizki "Sizdan 24.950000000000003 dollar bo'ldi." deya olmaymiz.

//     Yechim:
//     Maxsulot narxini foydalanuvchidan so'rang (bu butun bo'lmagan son bo'lishi mumkin)
//     Maxsulot miqdorini so'rang, agar 4.3 kiritilsa uni 4 qilib olib keting.
//     Maxsulot narxi va uning miqdori kiritilsa jami miqdorni chiqaradigan dastur tuzing

//     Qanday ishlaydi:
//     (narx 4.99, miqdor 5) kiritilsa "Jami: 24.95" ni qaytarsin
//     (narx 4.99, miqdor 5) kiritilsa "Jami: 24.95" ni qaytarsin
//     (narx 2.50, miqdor 3) kiritilsa "Jami: 7.50" ni qaytarsin
//     (narx 10.75, miqdor 2) kiritilsa "Jami: 21.50" ni qaytarsin
//     (narx 7.99, miqdor 4) kiritilsa "Jami: 31.96" ni qaytarsin
//     (narx 3.25, miqdor 6) kiritilsa "Jami: 19.50" ni qaytarsin

let number=Number(prompt("Maxsulot narxini kiriting"));
let maxsulotSoni = Number(Math.floor(prompt("Maxsulot miqdorini kiriting")));

console.log(`Jami ${(number*maxsulotSoni).toFixed(2)}$ bo'ldi`);