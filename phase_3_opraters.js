//opraters in javascripts different types of opraters (1) Arithmetic , (2) Comparison , (3) Assignment opraters (4) Logical , (5) Assignment , (6) Unary , (7) Ternary

// Arithmetic oprators Bellow

// + - / * % **

// in plus we have two options mathods adding and concatinating like 11 55 100 for example if we take a string value and a number and we plus them "8" + 5 = 85 this is concatinating adding is pure number 5 + 2 = 7


5 + 5 // = 10
"He" + "llo" // = "Hello"
"2" + 5 // = 25

// in subtraction we have one options minis like -2 for example if we take a string value and a number and we minis them "8" - 5 = 3 and with the pure number 6 - 2 = 4 same same because one hi working minising 
10 - 5 // = 5
"4" - 2 // = 2

// in divition we have a two prices 50 and 100 so we divide into both guy equaly so look bellow
150 / 2 // = 75

//in * we have an option to multiplay thinks like 8 * 2 = 16
16 * 2 // = 32

//The % operator in JavaScript is called the Modulo operator. It gives the remainder of the division of two numbers.
12 % 5 // = 2
76 % 5 // = 1

// the ** opraters show the power of the number like 2 power 3 = 8
// 2 * 2 * 2 = bellow
2 ** 3 //  = 8
// 10 * 10 * 10 * 10 = bellow
10 ** 4 // = 10000

//Comparison oprators Bellow

// = == === != !== <= >=  <  >

// in = equal means i programming an adding or putting some values like
var a = 13; // this sign = use to put the value assignment oprator

// in == dubble equal means comparison oprator like
10 == 8 // false no 
5 == 5 // true yes
20 == "20" // true yes this is an issue == properly not checking the type directly compare the value equal or not if equal true 

// in === thripple equal means in programming comparison plus type check string or number or others like 
"5" === 5 // false
3 === 3 // true

// in not equal to !=  means in javascript like
2 != 3 // true because 2 is not equal to 3 
6 != 6 // false because 6 and 6 is == 

// in not dubble equal to !== mean type + value check like ===
4 !== "4" // true because 4 and string 4 is not equal 
5 !== 6 // true because 6 is grater then 5
6 !== 6 // false because both are equal

// < less then > grater then in js
5 > 6 // = false
5 < 6 // true 

// and equal less then and equal grater then => =<
30 <= 30 // true
20 >= 20 // true 


//Assignment oprators Bellow

// =  += -= *= /=  %=

let a = 12; // point is = putting the value
 a += 4 // point is += to the let a value 12 += new 4 value move it to add then 16
 a -= 6 // pont is -= to the let a value 6 remove it new value is 10
 a *= 2 // point is the a value is 10 and know *= to multiplay by 2 and added them so new is 20
 a /= 2 // ponit is /= divide a crrunt value is 20 / 2 = 10 
 a %= 3 // point is %= to modulus the value by reminder of crrunt value is 10 % 3 = 1 


 //Logical oprators Bellow

 // && || !

 true && true // = true because both side && accepted true final ans true this called AND oprator
 true && false // = false because both side && accepted true final ans false
 true || false // = true because in both side one is true so ans is true accept one side true || this is called OR oprator
 !false // = true because ! this is not oprator so we tell them false is not false so them convert them into true similarly we can this 
 !true // false ! this is the crrunt nature of truthy and falsy reverse like
 !50 // so the 50 nature is true but we add the ! so they became convert into false and if we add !! so they reverse convert the original nature true !!50 true

 // Unary opraters Bellow

 // + - ! typeof ++ --

 +"5" // +5 convert into number
 -5 // -5 number 
 !6 == 5 // true
 typeof"4" // string
 let a = 12;
 ++a // 13
 --a // 11

 // Ternary opraters Bellow

 // ? :

 // we make a condition ? then true code condition then : then false condition code 

30 > 40 ? console.log("true") : console.log("false")
// in this condition ? question mark and colon : define if true so true side is run otherwise : side run == false

// typeof story Bellow

// in some cases the typeof wrong like typeof null is object and typeof [] object wrong and this is good typeof {} object typeof NaN number wrong typeof function abc(){} function these all quriks