// 1.14-masala
// generateRandomNumber nomli funksiya yozing. U 1 dan 100 gacha
// (100 ham kiradi) sonlar ichida random tarzda sonni qaytarsin.
// (return bilan)

function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

console.log(generateRandomNumber());