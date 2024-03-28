// 1.6-masala
// printNumbers3 nomli funksiya yozing, u son qiymat qabul qilsin
// va 1 dan o'sha unga kiritilgan songacha (o'zini ham) konsolega
// chiqarsin. Manfiy son kiritilsa funksiya hech nima chiqarmasin.
// Takrorlanish uchun for buyrug'ini ishlating.

function printNumbers3(number){
    if (number>0){
        for (let i=1; i<=number; i++){
            console.log(i);
        }
    }
}

let number = Number(prompt("son kiriting"));
printNumbers3(number);