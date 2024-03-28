// 1.11-masala
// generateGreeting nomli funksiya yozing, u name degan parameter
// qabul qilsin. Agar namega Abdulloh kiritilsa
// "Assalomu alaykum, Abdulloh" degan yozuvni qaytarsin 
// (return bilan). string concatenation bilan ishlang

function generateGreeting(name) {
    return "Assalomu alaykum " + name;
};
let name = prompt("Ismingizni kiriting");
let res = generateGreeting(name);
console.log(res);