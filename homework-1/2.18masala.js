// 2.12-masala(ishlangan)
//     Looplardan foydalanib oynaga quidagi shaklni 
//     chiqaradigan dastur tuzing

// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #

let belgi = "# # # #", belgi1 = " # # # #";
let n = Number(prompt("Son kiriting"));
for (let i = 1; i <= n; i++) {
    if (i % 2 === 1) {
        console.log(belgi);
    } else {
        console.log(belgi1);
    };
};