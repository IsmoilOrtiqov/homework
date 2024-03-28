// 1.10-masala
// toqSonmi nomli funksiya yozing, u son qabul qilsin va agar o'sha
// son toq bo'lsa true qaytarsin, aks holda (juft bo'ladi) false
// qaytarsin.

function toqSonmi(number) {
    if (number % 2 === 1) {
        return true;
    } else {
        return false;
    };
};
let number = Number(prompt("Son kiriting"));
let res = toqSonmi(number);
console.log(res);