// 2.10-masala
//     bularni o'rganib oling
//     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
//     https://www.w3schools.com/jsref/jsref_length_string.asp
//     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat

//     while yoki for loopdan foydalangan holda oynaga 
//     pastdagi shaklni chiqaradigan dastur tuzing
    
// #
// ##
// ###
// ####
// #####
// ######
// #######
// ########

let belgi = "#";
let number = Number(prompt("Son kiriting"));

for (let i=1; i<=number; i++){
    console.log(belgi.repeat(i));
};
