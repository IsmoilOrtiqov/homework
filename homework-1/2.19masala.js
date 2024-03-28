// 2.13-masala (yechilgan)
//     Looplarda foydalanib oynaga quidagi shaklni 
//     chiqaradigan dastur tuzing

//    #
//   ###
//  #####
// #######

let n = Number(prompt("n ni kiriting"));
let belgi = "#", belgi1 = " ";
for (let i = 1; i <= n; i++) {
    console.log(belgi1.repeat(n - i) + belgi + belgi.repeat((i - 1) * 2));
};