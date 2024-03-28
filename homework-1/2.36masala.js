// 1.15-masala
// repeatString nomli funksiya yozing, u str, va n
// degan ikkita parameter qabul qilsin. str yozuvni
// n marta takrorlab chiqarsin
// "hi!", 3 -> "hi!hi!hi!"

function repeatString(str, n){
    let count='';
    for (let i=0; i<n; i++){
        count+=str;
    }
    return count;
}
let str=prompt("Soz kiriting");
let n=Number(prompt("Son kiriting"));
let res=repeatString(str, n);
console.log(res);