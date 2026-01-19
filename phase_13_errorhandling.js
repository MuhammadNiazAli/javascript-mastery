// ==================== Error Handling ====================

// Error handling ka matlab:
// jab code run time pe crash ho sakta ho
// to hum us crash ko control karte hain.
// warna JS execution ruk jati hai aur app break ho jata hai.

// try / catch / finally ka use tab karte hain
// jab hume lagta hai koi risky code hai
// jaise API response, JSON parsing, undefined function call, etc.

// try: yahan risky code
// catch: yahan error ko pakar ke handle
// finally: yahan wo code jo hamesha chalega


try {
    // try block me hum wo code likhte hain
    // jahan error aane ka chance hota hai

    let result = someUndefinedFunction();
    // yahan JS try karegi function run karne ki
    // lekin someUndefinedFunction exist hi nahi karta
    // isliye ReferenceError throw ho jayega
    // aur JS direct catch me jump karegi

    console.log("Result:", result);
    // ye line execute nahi hogi
    // kyunki error upar wali line pe aa chuka
}
catch (error) {
    // catch block tab chalta hai
    // jab try block me koi error throw ho

    console.log("Error caught:", error);
    // error object print hoga
    // is object me name, message, stack trace hota hai
}
finally {
    // finally block hamesha run hota hai
    // chahe try successful ho ya catch run ho

    console.log("Finally block always runs");
    // is ka use aksar cleanup ke liye hota hai
    // example: loader off karna, file close karna, DB connection close
}


// ==================== throw new Error() ====================

// throw ka matlab:
// hum khud apni condition ke basis pe error create kar sakte hain.
// Ye real life me validation ke liye bohat use hota hai.

// new Error("message") ek Error object banata hai
// jiska message hum define karte hain

function divide(a, b) {

    if (b === 0) {
        // agar denominator zero hua
        // to math me division possible nahi
        // isliye hum custom error throw kar rahe hain

        throw new Error("Cannot divide by zero");
        // throw ka matlab:
        // function yahan pe stop ho jayega
        // aur control nearest catch block me chala jayega
    }

    return a / b;
    // agar b zero nahi
    // to normal division return ho jayegi
}


try {
    console.log(divide(10, 2));
    // yahan b=2, error nahi
    // output: 5

    console.log(divide(10, 0));
    // yahan b=0
    // throw new Error chalega
    // aur ye line error generate karegi
}
catch (error) {
    console.log("Caught custom error:", error.message);
    // error.message se sirf message milta hai
    // output: Cannot divide by zero
}


// ==================== Real-world example ====================

// Real world me API responses always trusted nahi hote.
// Kabhi data missing hota hai, kabhi null hota hai, kabhi wrong format hota hai.
// Isliye validation karna zaroori hota hai.

const apiResponse = {
    status: 200,
    data: null
};
// status 200 ka matlab normally request ok
// lekin data null hai
// yani server ne empty response bheja

try {

    if (!apiResponse.data) {
        // !apiResponse.data ka matlab:
        // agar data null, undefined, empty, false ho
        // to condition true ho jayegi

        throw new Error("No data found in API response");
        // yahan hum manually error throw kar rahe hain
        // taake app crash na ho
        // aur readable error mile
    }

    console.log("API data:", apiResponse.data);
    // ye line tab chalegi
    // jab data available ho

}
catch (error) {
    console.log("API Error:", error.message);
    // yahan user friendly message print
}


// ==================== Debugging ====================

// Debugging ka matlab:
// bug ka root cause find karna.
// Iske liye hum logs, warnings, errors aur devtools use karte hain.


// 1 console.log
// sabse basic tool
// values track karne ke liye

let x = 10;
let y = 20;

console.log("x:", x, "y:", y, "sum:", x + y);
// yahan hum dekh rahe hain
// x kya hai, y kya hai, aur sum kya aa raha hai
// output: x: 10 y: 20 sum: 30


// 2 console.error
// error ko highlight karne ke liye
// red color me show hota hai

try {
    throw new Error("This is an error");
    // ye line intentionally error throw kar rahi hai
}
catch (err) {
    console.error(err);
    // full error object print hoga
    // isme stack trace bhi hota hai
}


// 3 console.warn
// warning messages ke liye
// app crash nahi hoti
// bas warning show hoti hai

console.warn("This is a warning");


// 4 console.table
// arrays ya objects ko table form me show karta hai
// debugging bohat easy ho jati hai

const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
];

console.table(users);
// output: table me columns name, age


// 5 Breakpoints / debugger
// debugger; JS execution ko pause kar deta hai
// chrome devtools ya vscode me step-by-step code inspect hota hai
// tum variables ki current value dekh sakti ho

let a = 5;
let b = 10;

debugger;
// jab browser devtools open hoga
// is line pe code ruk jayega
// tum a aur b ki values live inspect kar sakti ho

let sum = a + b;
console.log("Sum:", sum);
// output: 15


// ==================== Notes ====================

// 1) try/catch/finally
// runtime errors handle karne ke liye

// 2) throw new Error
// custom errors create karne ke liye
// validation aur business rules me bohat use hota hai

// 3) console.log / error / warn / table
// debugging tools hain

// 4) debugger
// step-by-step execution aur inspection

// 5) error handling ka main faida
// app crash nahi hoti
// user ko clear message milta hai
// aur developer ko root cause find karna easy hota hai
