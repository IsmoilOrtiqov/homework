// 2.14-masala
//     Looplarda foydalanib oynaga quidagi shaklni 
//     chiqaradigan dastur tuzing

//     #
//    ###
//   #####
//  #######
// #########
//  #######
//   #####
//    ###
//     #

let n = 5//Number(prompt("n ni kiriting"));
let belgi = "#", belgi1 = " ";
for (let i = 1; i <= n; i++) {
    console.log(belgi1.repeat(n - i) + belgi + belgi.repeat((i - 1) * 2));
};

for (let i = n; i >= 1; i--) {
    console.log(belgi1.repeat(n - (i - 1)) + belgi.repeat(2 * (i - 1) - 1));
};