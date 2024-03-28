// 1.3-masala
// checkNumber nomli funksiya yozing, u num degan bitta son
// parameter qabul qilsin va uning qiymatiga ko'ra "musbat", 
// "manfiy", "nol" degan qiymatlarni qaytarsin (return bilan).
// Shartli ifodani ternary operator bilan qiling.

function checkNumber(num) {
    return num > 0 ? "musbat" : num < 0 ? "manfiy" : "nol";
}

let num = Number(prompt("son kiriting"))
let res = checkNumber(num);

console.log(res);