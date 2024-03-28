// 1.13-masala
// convertToCelsius nomli funksiya yozing. U farangeytda berilgan
// harorat qiymatini selsiyga o'girsin. C = (F - 32) * 5/9.
// Agar 50 kiritilsa, 10 qiymat qaytarsin (return bilan)
// (C = (50 - 32) * 5/9 -> 18 * 5 / 9 -> 10)

function convertToCelsius(F) {
    return (F - 32) * (5 / 9);
}
let F = Number(prompt("Son kiriting"));
let res = convertToCelsius(F);
console.log(res);