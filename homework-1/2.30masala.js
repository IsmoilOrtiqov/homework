// 1.9-masala
// calculateFactorial nomli funksiya yozing, u son qiymat qabul
// qilsin va o'sha sonni faktorialini hisoblasin. Misol uchun
// 5 sonining faktoriali 1, 2, 3, 4, 5 sonlarini ko'paytmasi, ya'ni
// 120. 0 sonini faktoriali 1. Agar 0 kiritilsa 1 qaytarishi kerak.
// funksiya ichida for loop ishlating

function calculateFactorial(number) {
    let sum = 1;
    if (number === 0) {
        return 1;
    } else {
        for (let i = 1; i <= number; i++) {
            sum *= i;
        }
    }
    return sum;
}
let number = Number(prompt("son kiriting"));
let res = calculateFactorial(number);
console.log(res);