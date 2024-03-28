// 2.2-masala
//     Shunday kod yozingki foydalanuvchi kiritgan qiymatga quidagicha javob qaytarsin
//     Loyihaga nima kiritilsa nima qaytarishi kerakligiga misollar
//     - 1.5 kiritsa 2 qaytarsin
//     - 9.99 kiritsa 10 qaytarsin
//     - 1 kiritilsa 1 qaytarsin
//     Ya'ni natural bo'lmagan ratsional sonni o'zidan yuqoridagi eng yagin natural songa yahlidlasin.

let number = Number(prompt("Son kiriting"));
console.log(Math.ceil(number));