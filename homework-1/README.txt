Assalomu alaykum!

Ko'rsatmalar bilan tanishib chiqing. Ko'rsatmaga ko'ra uy ishini
bajaring. Bu fayl faqat ko'rsatmalar uchun. Buni o'zgartirmang.

1-qism
Uy ishini bu qismini mustaqil o'rganishga yo'naltirilgan.
Manbalarni barchasini o'qib, o'rganib tahlil qilishingizga hojat yo'q.
Siz uchun eng qulay, eng mos manbadan aytilgan narsani o'rganib olsangiz bo'ldi.
Lekin imkoningiz bo'lsa hammasini ko'rib chiqsangiz o'zingiz uchun yaxshi.

Nimani mustaqil o'rganishim kerak?
    - Math.abs fuksiyasini
        - https://www.w3schools.com/jsref/jsref_abs.asp
        - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
    - Math.ceil funksiyasini
        - https://www.w3schools.com/jsref/jsref_ceil.asp
        - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil
    - Number.toFixed funksiyasini
        - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
        - https://www.w3schools.com/jsref/jsref_tofixed.asp
    - Number.parseInt funksiyasini
        - https://www.w3schools.com/jsref/jsref_number_parseint.asp
        - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt#radix
    - Math.round funksiyasini
        - https://www.w3schools.com/jsref/jsref_round.asp
        - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
    - Math.max funksiyasini
        - https://www.w3schools.com/jsref/jsref_max.asp
        - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
    - Math.random funksiyasini
        - https://www.w3schools.com/jsref/jsref_random.asp
        - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    - Math.pow funksiyasini
        - https://www.w3schools.com/jsref/jsref_pow.asp
        - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow
    - Math.sqrt funksiyasini
        - https://www.w3schools.com/jsref/jsref_sqrt.asp
        - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt
    - Number.isFinite funksiyasini
        - https://www.w3schools.com/jsref/jsref_isfinite_number.asp
        - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite
    - Number.isInteger funksiyasini
        - https://www.w3schools.com/jsref/jsref_isinteger.asp
        - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
    - Number(value) funksiyasiga qiymat bersak u qiymatimizni songa konvertatsiya qilishini bilib oldik.
        Lekin bu ishni qilishni boshqa yo'llari ham bor. Quida bu haqda o'rganing
        - https://www.freecodecamp.org/news/how-to-convert-a-string-to-a-number-in-javascript/
        - https://www.w3schools.com/js/js_type_conversion.asp
    - valuelarni stringga o'girishni o'rganing
        - https://www.w3schools.com/jsref/jsref_string.asp
        - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
        - https://medium.com/dailyjs/5-ways-to-convert-a-value-to-string-in-javascript-6b334b2fc778
        - https://www.freecodecamp.org/news/javascript-number-to-string-how-to-use-tostring-to-convert-an-int-into-a-string/
        - https://www.w3schools.com/jsref/jsref_tostring_number.asp
        - https://www.geeksforgeeks.org/convert-a-number-to-a-string-in-javascript/

2-qism
Uy ishini ikkinchi qismini bajarish uchun 1-qismni o'rganib chiqishingiz kerak.
Masalalarni part2.js degan faylda yozing. Birinchi misolni na'muna o'rganing.

2.1-masala
    1. Foydalanuvchidan yoshini so'rang
    2. Agar foydalanuvchi son kiritmagan bo'lsa "Son kiritmadingiz" deb ayting
    3. Agarda manfiy son kiritgan bo'lsa uni musbatga o'girib oling, ya'ni -10 kiritsa shu 10 ga aylantirib olishingiz kerak.
    4. Yakunda "Siz " + yosh " yoshdasiz" deb javob qaytaring (3 -> "Siz 3 yoshdasiz", -4 -> "Siz 4 yoshdasiz")

2.2-masala
    Shunday kod yozingki foydalanuvchi kiritgan qiymatga quidagicha javob qaytarsin
    Loyihaga nima kiritilsa nima qaytarishi kerakligiga misollar
    - 1.5 kiritsa 2 qaytarsin
    - 9.99 kiritsa 10 qaytarsin
    - 1 kiritilsa 1 qaytarsin
    Ya'ni natural bo'lmagan ratsional sonni o'zidan yuqoridagi eng yagin natural songa yahlidlasin.

2.3-masala
    Muammo:
    Maxsulot narxi 4.99 dollar.
    Agarda shu maxsulotdan 5 dona sotib olinsa console.log(4.99 * 5); // -> 24.950000000000003
    Lekin bilamizki "Sizdan 24.950000000000003 dollar bo'ldi." deya olmaymiz.

    Yechim:
    Maxsulot narxini foydalanuvchidan so'rang (bu butun bo'lmagan son bo'lishi mumkin)
    Maxsulot miqdorini so'rang, agar 4.3 kiritilsa uni 4 qilib olib keting.
    Maxsulot narxi va uning miqdori kiritilsa jami miqdorni chiqaradigan dastur tuzing

    Qanday ishlaydi:
    (narx 4.99, miqdor 5) kiritilsa "Jami: 24.95" ni qaytarsin
    (narx 4.99, miqdor 5) kiritilsa "Jami: 24.95" ni qaytarsin
    (narx 2.50, miqdor 3) kiritilsa "Jami: 7.50" ni qaytarsin
    (narx 10.75, miqdor 2) kiritilsa "Jami: 21.50" ni qaytarsin
    (narx 7.99, miqdor 4) kiritilsa "Jami: 31.96" ni qaytarsin
    (narx 3.25, miqdor 6) kiritilsa "Jami: 19.50" ni qaytarsin

2.4-masala
    Kvadratning tomoni a son sifatida kiritilsa uning yuzasi
    (S=a * a) ni aniqlaydigan dastur yozing.
    !Muhim ko'paytirish va darajaga ko'tarish operatorlari ishlatilmasin (4 * 4, 4**2);

2.5-masala
    Foydalanuvchi xonani yuzini kiritadi (misol uchun 25)
    Agar xona kvadrat shaklda bo'lsa uning tomoni a ni 
    (yuzi 25 bo'lsa, tomoni 5 bo'ladi 5 * 5 == 25)

    Qanday ishlaydi:
    25 => 5
    16 => 4
    -25 => NaN
    100 => 10

2.6-masala
    Foydalanuvchidan ikkita qiymatni so'rang x va keyin yni
    x ni yinchi darajaga ko'ratib qaytaring.

    Qanday ishlaydi:
    2,3 => 8
    2,2 => 4
    3,2 => 9
    5,2 => 25

2-dars vazifalari

2.1-masala (while loop)(ishlangan)
    0 dan 10 gacha sonlarni (10 ham kiradi) 
    ekranga chiqaruvchi dastur tuzing

2.2-masala (while loop)
    0 dan 10 gacha sonlarni (10 kirmaydi) 
    ekranga chiqaruvchi dastur tuzing

2.3-masala (while loop)
    10 dan 0 gacha sonlarni (0 ham kiradi) 
    ekranga chiqaruvchi dastur tuzing

2.4-masala (while loop)
    10 dan 0 gacha sonlarni (0 kirmaydi) 
    ekranga chiqaruvchi dastur tuzing

2.5-masala (for loop)
    30 dan 40 gacha sonlarni (40 ham kiradi) 
    ekranga chiqaruvchi dastur tuzing

2.6-masala (for loop)
    10 dan 40 gacha sonlarni (40 kirmaydi) 
    ekranga chiqaruvchi dastur tuzing

2.7-masala (for loop)
    40 dan 10 gacha sonlarni (10 ham kiradi) 
    ekranga chiqaruvchi dastur tuzing

2.8-masala (for loop)(ishlangan)
    40 dan 10 gacha sonlarni (10 kirmaydi) 
    ekranga chiqaruvchi dastur tuzing

2.9-masala
    1 dan 10 gacha (10 kirmaydi) sonlar yig'indisini 
    takrorlanuvchi buyruqlar orqali (for loop yoki while loop) 
    bilan hisoblovchi dastur tuzing

2.10-masala
    bularni o'rganib oling
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
    https://www.w3schools.com/jsref/jsref_length_string.asp
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat

    while yoki for loopdan foydalangan holda oynaga 
    pastdagi shaklni chiqaradigan dastur tuzing
    
#
##
###
####
#####
######
#######
########

2.11-masala
    1 dan 100 gacha bo'lgan solarni oynaga 
    chiqaruvchi dastur tuzing, Lekin agar son 3 ga qoldiqsiz 
    bo'linsa sonning o'zini emas balki "Fizz" degan so'zni 
    chiqaring. Agarda son 5 ga qoldiqsiz bo'linsa sonnig o'zini 
    emas balki "Bazz" degan so'zni chiqaring. Agarda son 3 ga 
    ham va 5 ga ham qoldiqsiz bo'linsa uning o'rniga 
    "FizzBazz" so'zini chiqaring

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

2.12-masala(ishlangan)
    Looplardan foydalanib oynaga quidagi shaklni 
    chiqaradigan dastur tuzing
    
    Muhim!
    WIDTH ni 4 ga HEIGHT ni 12 ga o'zgartirib 
    natijani qanday o'zgarganini ko'ring
    va teskarisi WIDHT ni 12 ga va HEIGHT ni 4 ga

# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #

2.13-masala (yechilgan)
    Looplarda foydalanib oynaga quidagi shaklni 
    chiqaradigan dastur tuzing

    Muhim!
    WIDTHga boshqa qiymat berib ko'ring va 
    natijani qanday o'zgarishini ko'ring


   #
  ###
 #####
#######


2.14-masala
    Looplarda foydalanib oynaga quidagi shaklni 
    chiqaradigan dastur tuzing

    #
   ###
  #####
 #######
#########
 #######
  #####
   ###
    #

2.15-masala
    Looplarda foydalanib oynaga quidagi shaklni 
    chiqaradigan dastur tuzing

#     
 #    
  #   
   #  
    # 
     #

3-oy-dars-vazifalari

1.1-masala
calculate nomli funksiya yozing, u a va b parameterlarni qabul 
qiladi,va ularni ko'paytmasini qaytaradi (return bilan).

1.2-masala
checkNumber nomli funksiya yozing, u num degan bitta son
parameter qabul qilsin va uning qiymatiga ko'ra "musbat", 
"manfiy", "nol" degan qiymatlarni qaytarsin (return bilan).
Shartli ifodani if buyrug'i bilan qiling.

1.3-masala
checkNumber nomli funksiya yozing, u num degan bitta son
parameter qabul qilsin va uning qiymatiga ko'ra "musbat", 
"manfiy", "nol" degan qiymatlarni qaytarsin (return bilan).
Shartli ifodani ternary operator bilan qiling.

1.4-masala
printNumbers nomli funksiya yozing, u son qiymat qabul qilsin
va 1 dan o'sha unga kiritilgan songacha (o'zini ham) konsolega
chiqarsin.
Takrorlanish uchun for buyrug'ini ishlating.

1.5-masala
printNumbers2 nomli funksiya yozing, u son qiymat qabul qilsin
va 1 dan o'sha unga kiritilgan songacha (o'zini ham) konsolega
chiqarsin.
Takrorlanish uchun while buyrug'ini ishlating.

1.6-masala
printNumbers3 nomli funksiya yozing, u son qiymat qabul qilsin
va 1 dan o'sha unga kiritilgan songacha (o'zini ham) konsolega
chiqarsin. Manfiy son kiritilsa funksiya hech nima chiqarmasin.
Takrorlanish uchun for buyrug'ini ishlating.

1.7-masala
getDayOfWeek nomli funksiya yozing, u son qiymat qabul qilsin
1-7 gacha, bu sonlar ga ko'ra hafta kunlarini qaytaring. Agar
1 kiritilsa "Dushanba", 2 kiritilsa "Seshanba", .., 7 kiritilsa
"Yanshanba". Funksiya bu qiymatlarni ("Dushanba", "Seshanba", ..)
return kalit so'zi bilan qaytarsin. Agar 1-7 dan boshqa qiymat
kiritilsa "Noto'g'ri hafta kuni" qiymatini qaytarsin.
funksiya ichida switch buyrug'ini ishlating.

1.8-masala
calculateFactorial nomli funksiya yozing, u son qiymat qabul
qilsin va o'sha sonni faktorialini hisoblasin. Misol uchun
5 sonining faktoriali 1, 2, 3, 4, 5 sonlarini ko'paytmasi, ya'ni
120. 0 sonini faktoriali 1. Agar 0 kiritilsa 1 qaytarishi kerak.
funksiya ichida while loop ishlating

1.9-masala
calculateFactorial nomli funksiya yozing, u son qiymat qabul
qilsin va o'sha sonni faktorialini hisoblasin. Misol uchun
5 sonining faktoriali 1, 2, 3, 4, 5 sonlarini ko'paytmasi, ya'ni
120. 0 sonini faktoriali 1. Agar 0 kiritilsa 1 qaytarishi kerak.
funksiya ichida for loop ishlating

1.10-masala
toqSonmi nomli funksiya yozing, u son qabul qilsin va agar o'sha
son toq bo'lsa true qaytarsin, aks holda (juft bo'ladi) false
qaytarsin.

1.11-masala
generateGreeting nomli funksiya yozing, u name degan parameter
qabul qilsin. Agar namega Abdulloh kiritilsa
"Assalomu alaykum, Abdulloh" degan yozuvni qaytarsin 
(return bilan). string concatenation bilan ishlang

1.12-masala
generateGreeting nomli funksiya yozing, u name degan parameter
qabul qilsin. Agar namega Abdulloh kiritilsa
"Assalomu alaykum, Abdulloh" degan yozuvni qaytarsin 
(return bilan). template literal bilan ishlang.

1.13-masala
convertToCelsius nomli funksiya yozing. U farangeytda berilgan
harorat qiymatini selsiyga o'girsin. C = (F - 32) * 5/9.
Agar 50 kiritilsa, 10 qiymat qaytarsin (return bilan)
(C = (50 - 32) * 5/9 -> 18 * 5 / 9 -> 10)

1.14-masala
generateRandomNumber nomli funksiya yozing. U 1 dan 100 gacha
(100 ham kiradi) sonlar ichida random tarzda sonni qaytarsin.
(return bilan)

1.15-masala
repeatString nomli funksiya yozing, u str, va n
degan ikkita parameter qabul qilsin. str yozuvni
n marta takrorlab chiqarsin
"hi!", 3 -> "hi!hi!hi!"