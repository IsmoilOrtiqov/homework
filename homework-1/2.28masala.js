// 1.7-masala
// getDayOfWeek nomli funksiya yozing, u son qiymat qabul qilsin
// 1-7 gacha, bu sonlar ga ko'ra hafta kunlarini qaytaring. Agar
// 1 kiritilsa "Dushanba", 2 kiritilsa "Seshanba", .., 7 kiritilsa
// "Yanshanba". Funksiya bu qiymatlarni ("Dushanba", "Seshanba", ..)
// return kalit so'zi bilan qaytarsin. Agar 1-7 dan boshqa qiymat
// kiritilsa "Noto'g'ri hafta kuni" qiymatini qaytarsin.
// funksiya ichida switch buyrug'ini ishlating.

function getDayOfWeek(number) {
    switch (number) {
        case 1:
            return "Dushanba";
        case 2:
            return "Seshanba";
        case 3:
            return "Chorshanba";
        case 4:
            return "Payshanba";
        case 5:
            return "Juma";
        case 6:
            return "Shanba";
        case 7:
            return "Yakshanba";
        default:
            return "Noto'g'ri hafta kuni";
    }
}
let number = Number(prompt("Son kiriting"));
let res = getDayOfWeek(number);
console.log(res);