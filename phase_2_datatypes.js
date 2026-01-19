//data types in javascript we have two types of data types in javascript Primitive data types , and non primitive data types means Refrences

// in primitve data types we have 7 parts  (1) String , (2) Number , (3) Booleans, (4) Null , (5)Undifiend , (6) bagInt , (7) Symbol .

// non primitive data types or refrences we have 3 parts  (1) object , (2) arry , (3) functions

// we directly copy primitives and we directly not copyed refrences 
// in primitive data types when we copyed values we find the real one copy 
// in refrence means non primitives when we copyed values we find refrence of the parant

let a = 12; // primitive no brackets means primitive data types define directly and immutable not changeble
let arr = [1 , 2 ,3] // refrences with brackets non primitive data types mutable means changeble

// what is string ? so string is an alphabits of a to z words of naming like Muhammad Niaz Ali , or Irfan or anyone like apple banana mango we wrote them into single quats '' dubble quats "" or backticks `` for example
'Hello' , "Okey" , `yes`

// what is number ? number is an integer 241 1234.124 0.111 3414 etc this is numbers we wrote them directly
11 , 20 , 50

//what is booleans ? booleans is forexample true false in simple form for understanding yes or no ON OFF etc 
true , false

//what is null ? mean null is nothing null is null empty 0
null

// what is undifiend ? undifiend is when we declear a variable but no initilize 
var c; // undifiend

// what is bigInt ? bigInt is a massive number of collaction is like a strong num
let pass = 9007199254740991n;
pass + 425125n //so this is how we add more values and the bagInt well represent with n

//what is symbol ? symbol is a unique charachter spacipic symbols which is immutable value if you gana same things do like this 

let boy1 = Symbol("ali")
let boy2 = Symbol("ali") //this looks value same asis both but if you check typeoff equality === the result shows you false because both are unique mean boy1 is different symbol and boy2 is different symbol
// so basicly symbol is a unique think which we can store it any place as an identifier

// in javascript we have not static data typing we have dynamic data typing because you have change dynamic data types for example
let b = 21;
b = "Hello";
b = true;
b = null;
b = [];
b = undefined;


//truthy and falsy values
// Falsy value  =====>   0 , false , "" , null , undifiend , NaN , document.all
if(null){

}// in this if statement the null is falsy nature so this behiend the sence convert into false

//why the typeof NaN is Number ? because if you plus string and number like  "Hello" + 2 = // NaN not a number

