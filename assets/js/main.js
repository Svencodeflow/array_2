let getraenke = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
]

/*=================================
    lvl1_1
=================================*/


// let sort = getraenke.sort()

// let sortForEach = sort.forEach((myDrinks) => {
//     console.log(myDrinks);
//     document.write(myDrinks+"<br>")
// })


/*=================================
    lvl1_2
=================================*/

// let sortMap = getraenke.map((elt) => {
//     let vari = elt.toUpperCase()
//     return vari;
// })

// console.log(sortMap);

/*=================================
    lvl1_3
=================================*/

// let array = [
//     18,
//     16,
//     80,
//     51,
//     47,
//     38,
//     95,
//     42,
//     68,
//     61,
//     34,
//     51,
//     20,
//     17,
//     56,
//     31,
//     100,
//     6,
//     5,
//     30,
//     74,
//     97,
//     28,
//     99,
//     91,
//     27,
//     73,
//     12,
//     92,
//     6,
//     27,
//     71,
//     26,
//     15,
//     78
// ];

// array.sort((a, b) => a - b);
// console.log(array);

// let multi = array.map((elt) => {
//     return elt *2
// })

// console.log(multi);


/*=================================
    lvl1_4
=================================*/
// let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

// let celsius = fahrenheit.map((elt) => {
//     let vari2 = ((elt - 32) / 1.8).toFixed(2)
//     return vari2;
// }) 

// console.log(celsius);

/*=================================
    lvl1_5
=================================*/

let checkNumber = [
    18,
    16,
    80,
    51,
    47,
    38,
    95,
    42,
    68,
    61,
    34,
    51,
    20,
    17,
    56,
    31,
    100,
    6,
    5,
    30,
    74,
    97,
    28,
    99,
    91,
    27,
    73,
    12,
    92,
    6,
    27,
    71,
    26,
    15,
    78
];

checkNumber.sort((a, b) => a - b);

console.log(checkNumber);

let check = checkNumber.map((elt) => {
    if (elt % 3 == 0) {
        return elt +100;
    }else {
        return elt;
    }
})

console.log(check);