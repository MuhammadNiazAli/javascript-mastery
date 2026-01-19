// ==================== JAVASCRIPT LOOPS COMPLETE GUIDE ====================

// Loop ka simple idea ye hai:
// jab ek hi kaam baar baar repeat karna ho
// to hum loop use karte hain
// warna hume same code 10, 100, 1000 dafa likhna parhta

// JS me common loops ye hain:
// 1) for           -> jab count clear ho (kitni baar chalna hai)
// 2) while         -> jab condition based chalana ho (pata na ho kitni baar)
// 3) do...while    -> kam az kam 1 dafa chalana hi hai
// 4) for...in      -> object ki keys pe loop
// 5) for...of      -> array ki values pe loop (ES6)


// ==================== 1. FOR LOOP ====================

// for loop ka structure 3 parts ka hota hai:
// for (initialization; condition; increment/decrement) { ... }

// initialization: loop start kahan se hoga
// condition: loop kab tak chalega
// increment: har round ke baad i ko change karna

console.log("----- FOR LOOP -----");
// ye just heading print karega taake output me clear ho

for(let i = 0; i < 5; i++){
    // let i = 0  -> i ko 0 se start kiya
    // i < 5      -> jab tak i 5 se chota hai loop chalega
    // i++        -> har iteration ke baad i 1 barh jayega

    console.log(i); 
    // har iteration me i print hoga
    // output: 0, 1, 2, 3, 4
}

// i++ ka matlab i = i + 1 hota hai
// i-- ka matlab i = i - 1 hota hai

for(let i = 5; i > 0; i--){
    // let i = 5  -> start 5 se
    // i > 0      -> jab tak i 0 se bada hai
    // i--        -> har round ke baad i 1 kam hota rahe

    console.log(i);
    // output: 5, 4, 3, 2, 1
}


// break aur continue loops ko control karte hain
// continue -> current iteration skip
// break    -> loop ko yahin end

for(let i = 0; i <= 5; i++){
    // i 0 se start
    // i 5 tak jayega (because <=)

    if(i === 3){
        // jab i 3 banay
        continue; 
        // continue ka matlab:
        // iss iteration ka bacha hua code skip
        // aur next i pe chale jao
        // is wajah se 3 print nahi hoga
    }

    if(i === 5){
        // jab i 5 ho
        break; 
        // break ka matlab:
        // loop ko yahin terminate kar do
        // 5 print hone se pehle hi loop end ho jayega
    }

    console.log("for loop value:", i);
    // yahan 0,1,2,4 print hoga
    // 3 skip ho gaya
    // 5 pe break lag gaya
}


// ==================== 2. WHILE LOOP ====================

// while loop ka rule:
// pehle condition check hoti hai
// agar true ho to block chalega
// agar false ho to loop ruk jayega

console.log("----- WHILE LOOP -----");
// heading print

let j = 0;
// loop counter j ko 0 se start kiya

while(j < 5){
    // jab tak j 5 se chota hai loop chalega

    console.log(j);
    // current j print

    j++; 
    // j ko increment kiya
    // agar ye na karo to j hamesha 0 rahega
    // aur condition j < 5 always true rahegi
    // phir infinite loop ban jayega
}


// while loop me bhi break/continue use ho sakta hai

let k = 0;
// k ko 0 se start

while(k < 5){
    // jab tak k 5 se chota

    k++;
    // yahan increment pehle ho raha hai
    // is wajah se first print 1 se start hoga

    if(k === 3){
        // jab k 3 ho
        continue;
        // 3 ko skip kar do
        // yani print wali line execute nahi hogi
    }

    console.log("while loop value:", k);
    // output: 1,2,4,5
    // 3 skip
}


// ==================== 3. DO...WHILE LOOP ====================

// do...while me difference ye hai:
// pehle do block run hota hai
// phir while condition check hoti hai

console.log("----- DO WHILE LOOP -----");

let m = 0;
// m start 0 se

do{
    // pehle ye block chalega
    console.log(m);
    // m print

    m++;
    // m increment
} while(m < 5);
// ab condition check hogi
// jab tak m 5 se chota hoga loop repeat hoga
// output: 0,1,2,3,4


// do...while ka special point:
// agar condition pehle se false bhi ho
// tab bhi do block ek dafa zaroor chalega

let n = 10;
// n = 10

do{
    console.log("Executed once even if false condition", n);
    // ye ek dafa print hoga

    n++;
    // n 11 ho jayega
} while(n < 5);
// condition n < 5 false hai
// lekin do block pehle run ho chuka
// isliye output ek baar aaya


// ==================== 4. FOR...IN LOOP ====================

// for...in mostly objects ke liye hota hai
// ye object ki keys iterate karta hai
// keys ka matlab property names

console.log("----- FOR IN LOOP -----");

let person = {
    name: "Ali",
    age: 25,
    city: "Delhi"
};
// person object me 3 properties hain

for(let key in person){
    // key variable me har baar ek property name aayega
    // pehle "name", phir "age", phir "city"

    console.log(key, ":", person[key]);
    // person[key] ka matlab:
    // jis key ka naam aaya uski value do
    // output: name : Ali
    // output: age : 25
    // output: city : Delhi
}


// for...in arrays pe bhi chal jata hai
// lekin ye values nahi, indexes return karta hai

let arr = ["apple","banana","mango"];
// arr array me 3 values hain

for(let index in arr){
    // index me 0,1,2 ayega
    console.log(index, arr[index]);
    // arr[index] se value milegi
    // output: 0 apple
    // output: 1 banana
    // output: 2 mango
}


// ==================== 5. FOR...OF LOOP ====================

// for...of ES6 me aaya
// ye array/iterables ki values return karta hai
// index nahi

console.log("----- FOR OF LOOP -----");

for(let fruit of arr){
    // fruit me direct value ayegi
    // apple, banana, mango
    console.log(fruit);
}


// for...of ke sath break/continue

for(let fruit of arr){
    // fruit me value

    if(fruit === "banana") continue;
    // agar banana aaye to skip

    console.log("fruit:", fruit);
    // output: apple, mango
}


// ==================== NESTED LOOPS ====================

// nested loop ka matlab:
// loop ke andar loop
// ye tab use hota hai jab data 2D ho
// jaise tables, matrix, grids

console.log("----- NESTED LOOPS -----");

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
// matrix ek 2D array hai
// 3 rows, har row me 3 items

for(let i=0;i<matrix.length;i++){
    // i rows pe chalega
    // matrix.length = 3

    for(let j=0;j<matrix[i].length;j++){
        // j columns pe chalega
        // matrix[i].length = 3

        console.log("matrix["+i+"]["+j+"] =", matrix[i][j]);
        // matrix[i][j] actual value dega
        // i row number
        // j column number
    }
}


// multiplication table example

console.log("----- MULTIPLICATION TABLE -----");

for(let i=1;i<=3;i++){
    // i 1 se 3

    for(let j=1;j<=3;j++){
        // j 1 se 3

        console.log(`${i} * ${j} = ${i*j}`);
        // i*j multiply karega
        // aur string me print karega
    }
}


// ==================== SUMMARY ====================

// for loop:
// jab fixed rounds pata ho (e.g 1 to 10)

// while loop:
// jab sirf condition pata ho (kab rukna)

// do...while:
// jab ek baar chalna guaranteed ho

// for...in:
// object ki keys pe loop

// for...of:
// arrays ki values pe loop

// break:
// loop ko end

// continue:
// current iteration skip
