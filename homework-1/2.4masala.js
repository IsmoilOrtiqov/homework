// 2.4-masala
//     Kvadratning tomoni a son sifatida kiritilsa uning yuzasi
//     (S=a * a) ni aniqlaydigan dastur yozing.
//     !Muhim ko'paytirish va darajaga ko'tarish operatorlari ishlatilmasin (4 * 4, 4**2);

let number=Number(prompt("Kvadratni tomonini kiriting")); 
let S=0, i=0;
while (number>i) {
    S+=number;
    i++;
};
console.log(S);