// 1.8-masala
// calculateFactorial nomli funksiya yozing, u son qiymat qabul
// qilsin va o'sha sonni faktorialini hisoblasin. Misol uchun
// 5 sonining faktoriali 1, 2, 3, 4, 5 sonlarini ko'paytmasi, ya'ni
// 120. 0 sonini faktoriali 1. Agar 0 kiritilsa 1 qaytarishi kerak.
// funksiya ichida while loop ishlating

function calculateFactorial(number) {
    let sum=1;
    while (number>=0){
        if (number === 0){
            1;
        } else {
            sum*=number;
        }
        number--;
    }
    return sum;
}

let number = Number(prompt("Son kiriting"));
let res=calculateFactorial(number);
console.log(res);