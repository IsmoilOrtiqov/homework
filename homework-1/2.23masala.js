// 1.2-masala
// checkNumber nomli funksiya yozing, u num degan bitta son
// parameter qabul qilsin va uning qiymatiga ko'ra "musbat", 
// "manfiy", "nol" degan qiymatlarni qaytarsin (return bilan).
// Shartli ifodani if buyrug'i bilan qiling.

function checkNumber(num) {
    if (num > 0) {
        return "musbat";
    } else if (num === 0) {
        return "nol";
    } else {
        return "manfiy";
    };
};

let num = Number(prompt("num ni kiriting"));
let res = checkNumber(num);
console.log(res);