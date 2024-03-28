// 1.5-masala
// printNumbers2 nomli funksiya yozing, u son qiymat qabul qilsin
// va 1 dan o'sha unga kiritilgan songacha (o'zini ham) konsolega
// chiqarsin.
// Takrorlanish uchun while buyrug'ini ishlating.

function printNumbers2(number) {
    let i = 1;
    while (i <= number) {
        console.log(i);
    }
}
let number = Number(prompt("son kiriting"));
printNumbers2(number);