// 1.4-masala
// printNumbers nomli funksiya yozing, u son qiymat qabul qilsin
// va 1 dan o'sha unga kiritilgan songacha (o'zini ham) konsolega
// chiqarsin.
// Takrorlanish uchun for buyrug'ini ishlating.

function printNumbers(number){
    for (let i=1; i<=number; i++){
        console.log(i);
    };
};

let number= Number(prompt("Son kiriting"));

printNumbers(number)