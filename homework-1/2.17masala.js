// 1 dan 100 gacha bo'lgan solarni oynaga 
//     chiqaruvchi dastur tuzing, Lekin agar son 3 ga qoldiqsiz 
//     bo'linsa sonning o'zini emas balki "Fizz" degan so'zni 
//     chiqaring. Agarda son 5 ga qoldiqsiz bo'linsa sonnig o'zini 
//     emas balki "Bazz" degan so'zni chiqaring. Agarda son 3 ga 
//     ham va 5 ga ham qoldiqsiz bo'linsa uning o'rniga 
//     "FizzBazz" so'zini chiqaring

// -> 1
// -> 2
// -> Fizz
// -> 4
// -> Bazz
// -> Fizz
// -> 7
// -> 8
// -> Fizz
// -> Bazz
// -> 11
// -> Fizz
// -> 13
// -> 14
// -> FizzBaz
// -> 16
// -> ...
// -> 98
// -> Fizz
// -> 100

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBaz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Baz");
    } else {
        console.log(i);
    };
};