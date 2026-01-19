//Variables in a javascript is like a container where we store any type of data like number string booleans null undifiend etc.. 

//in javascript we have three types of variables (1) var (2) let (3) const

// var is the part of old javascript ES5 version and let & const is the new javascript part ES6 version which is introduce in 2015. 

// var avoid in modran javascript because var causes of unexpected bugs 

// var is global and functional scoped and let & const is blocked scoped which means we access only in { } curly braces and var is hoisted in javascript by defoult value is undifiend and let & const  is also hoisted but throgh Error because of DTZ temporal dead zone 

// var is redeclear re value asign both accepted but in let and const let is only re value asign and const are constant variable not re declear and re value asign refrenceError!.

// var add himself in window var is functional scoped 

var a = 10 // declear and initialize value 10 wehen console log
var a = 20 // still work no error redeclear value 20 when console log
a = 30  // work perfectly no error overide value re value asign value 30 when console log

let a = 10 // declear and initialize value 10 wehen console log
let a = 20 // throgh Error because let not accept redeclearization
a = 30 // work perfectly no error overide value re value asign value 30 when console log because let is accesptable revalue asign

const a = 10 // declear and initialize value 10 wehen console log
const a = 20 // throgh Error because const is absolutly not accept redeclearization 
a = 30 // throgh Error because const absolutly not accept re value sign

if(true){
    var potato = "vagetable"

    console.log(potato)
}

console.log(potato) //still work because var is function scoped and global scoped which mean you can access any place or area and var is accessable in outer of the curly { } braces

if(true){
    let apple = "fruit"

    console.log(apple)
}

console.log(apple) // through error because let is blocked scoped which mean you can access only in { } curly braces

if(true){
    const chili = "bad tast"
    
    console.log(chili)
}

console.log(chili) // through error because const is blocked scoped which mean you can access only in { } curly braces

// var is redeclear re value asignable and changeable and any area and place you can access 
// let is not redclear only re value asignable and you can access only in curly braces { } 
// const is contact variable not changeble not redreclear not re value asignable 

// var is function scoped view in bellow example 

function abc (){
    var iphone = "IOS" // <--- we declear var variable and initialize value IOS 
    return iphone // then we return the variable name which is iphone
}
console.log(abc()) // then we access outer side of the function scoped this is how we access function scoped variables.

// if we try like this 
console.log(iphone);  // Error: iphone is not defined outside the function

// the questions is how var is functional and global and how let const is blocked scoped
// point to be noted var is globale scoped which mean in all code any area we use it functional scoped use under in function not accessable in outer area  for example 

var b = 12; // this is accessable in all area all code no mattaer we have 60000 line of code global
{
    var b = 12 // still accessable in all area all code global
}

// functional mean
 
function point(){
 var b = 12; // this is functional scoped accessable only in all area of the point  function
 //if we have like this 
 if(true){
    var b =12; // same think accessable in all point function area

    console.log(b) // working
 }

 console.log(b) // working
}
//one more think in var look we have point function this is parant in inner area of the point function we have if statment this is child we access all the parants properties in child block and changeable but the child properties we do not access in parant this role only follow in let and const not in var beecause var is globale scoped access in all areas

//major point is 
// (1)  Global scoped     ---> accessable in all code any where var only 
// (2)  functional scoped  --->  accessable only in function where you declear var not let const 
// (3)  blocked scoped  ---> accessable only in curly braces let const not var because of global

//global means bellow 

var a = 12 ;
// line one 
//line two
//line three
//line one million
console.log(a)// existed declear etc this is global story

// functional means bellow

function okey(){
    var b = 12;
  // line one 
  //line two
  //line three
  //line one million
  console.log(b)// accessable only in all area of inner in okey function only not in outside of this okey function like bellow
}
console.log(b) // look not define any variable

// block means bellow

{
    var a = 12;
    // line one 
  //line two
  //line three
  //line one million
  console.log(a)//accessable
}
// line one 
  //line two
  //line three
  //line one million
  console.log(a)//accessable which means var is not respect the block but when we add let const so they are respected the block because these area blocked scoped so these area accessable in curly braces

  //lets understand TDZ temporal dead zone story
   
   console.log(a) // undifiend 
   var a = 12;
   console.log(a) // 12 

   console.log(a) // Error cannot access before initilization which mean js know but they do not allow you to access before initilize this is TDZ temporal dead zone means top line area 139 140


   let a = 12;
   console.log(a) // 12 

   console.log(a) // Error cannot access before initilization which mean js know but they do not allow you to access before initilize this is TDZ temporal dead zone means top line area 144 145


   const a = 12;
   console.log(a) // 12
