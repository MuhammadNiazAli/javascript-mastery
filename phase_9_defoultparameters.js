// ==================== Modern JS Patterns ====================

// Is file ka goal:
// modern JavaScript ke kuch patterns samajhna
// jo daily coding me bohat use hote hain.
// In patterns se code zyada readable, reusable, aur clean banta hai.


// ==================== Default Parameters ====================

// Default parameter ka matlab:
// agar function call me koi argument missing ho
// to function khud ek default value use kar lega.
// Is se undefined problems kam hoti hain.

function greet(name = "Guest") {
    // name parameter ko default "Guest" diya gaya.
    // agar greet() bina argument call ho
    // to name automatically "Guest" ban jayega.

    console.log(`Hello, ${name}!`);
    // template literal se greeting print.
    // ${name} variable ko string me inject karta hai.
}

greet();
// greet() me koi value pass nahi ki.
// isliye default "Guest" use hua.
// Output: Hello, Guest!

greet("Alice");
// yahan "Alice" pass ki.
// default ignore ho gaya.
// Output: Hello, Alice!


// ==================== Rest Parameters ====================

// Rest parameter ka matlab:
// jab tumhe pata na ho kitne arguments aayenge,
// tab ...numbers un sab ko ek array me collect kar leta hai.
// Ye function ko flexible banata hai.

function sumAll(...numbers) {
    // ...numbers = rest parameter
    // jitne bhi arguments aayen
    // wo numbers array me pack ho jayenge.
    // Example: sumAll(1,2,3) => numbers = [1,2,3]

    return numbers.reduce((acc, curr) => acc + curr, 0);
    // reduce array ko ek single value me convert karta hai.
    // acc = accumulator (running total)
    // curr = current number
    // 0 initial value hai acc ki.
    // so [1,2,3,4] => ((((0+1)+2)+3)+4) = 10
}

console.log(sumAll(1, 2, 3, 4));
// numbers = [1,2,3,4]
// output: 10

console.log(sumAll(5, 10, 15));
// numbers = [5,10,15]
// output: 30


// ==================== Spread Operator ====================

// Spread operator ka matlab:
// array ya object ko "expand" kar dena.
// yani uske andar ki values ko alag alag values jaisa treat karna.

// ---------- Array spread ----------

let arr1 = [1, 2, 3];
// arr1 ek array hai.

let arr2 = [...arr1, 4, 5];
// ...arr1 ka matlab:
// arr1 ke elements copy karo aur yahan paste kar do.
// so arr2 ban gaya: [1,2,3,4,5]
// ye shallow copy hoti hai.

console.log(arr2);
// output: [1, 2, 3, 4, 5]


// ---------- Object spread ----------

let obj1 = { a: 1, b: 2 };
// obj1 ek object hai.

let obj2 = { ...obj1, c: 3 };
// ...obj1 ka matlab:
// obj1 ke saare key-values copy karo.
// phir c:3 add karo.
// obj2: {a:1, b:2, c:3}

console.log(obj2);
// output: { a: 1, b: 2, c: 3 }

// Important point:
// spread copy shallow hoti hai.
// nested objects me reference share ho sakta hai.


// ==================== Arrow Functions ====================

// Arrow function ka matlab:
// function likhne ka short syntax.
// normally use hota hai callbacks me aur small functions me.

// normal function:
// function add(x,y){ return x+y; }

// arrow version:

const add = (x, y) => x + y;
// agar function body single expression ho
// to curly braces aur return optional ho jate hain.
// yahan x+y direct return ho raha hai.

console.log(add(2, 3));
// output: 5


// Arrow function me 'this' lexical hota hai.
// lexical ka matlab:
// arrow function apna this nahi banata.
// wo outer scope ka this use karta hai.

// Example:

const person = {
    name: "John",

    greet: function() {
        // greet normal function hai.
        // is method me this => person object ko point karta hai.

        setTimeout(() => {
            // setTimeout me arrow function use hua.
            // arrow ka this => greet ke this se inherit hua.
            // greet ka this => person
            // isliye this.name => "John"

            console.log(`Hi, I'm ${this.name}`);
        }, 1000);
        // 1000ms = 1 second delay
    }
};

person.greet();
// 1 second baad output: Hi, I'm John

// Agar yahan arrow na hota
// aur normal function hota,
// to this window/undefined ban sakta tha.
// isliye arrow useful hai.


// ==================== Higher-order Functions ====================

// Higher-order function ka matlab:
// - function jo function ko argument me accept kare
// ya
// - function jo function return kare.

// yahan multiplyBy function return kar raha hai ek naya function.

function multiplyBy(factor) {

    // factor outer variable hai.
    // ye value return wale function ke andar bhi yaad rahegi (closure).

    return function(num) {
        // ye inner function num leta hai
        // aur factor se multiply karta hai.

        return num * factor;
    };
}

const double = multiplyBy(2);
// multiplyBy(2) run hua.
// isne ek function return kiya.
// jiske andar factor = 2 locked ho gaya.

console.log(double(5));
// double(5) => 5 * 2
// output: 10


// ==================== Callbacks vs Promises vs async/await ====================

// Ye teen techniques async code handle karti hain.
// Callback older style.
// Promises modern.
// async/await promises ka readable style.

// ---------- Callback example ----------

function fetchDataCallback(callback) {
    // fetchDataCallback ek function hai
    // jo callback function argument me leta hai.

    setTimeout(() => {
        // 1 second delay simulate kiya
        // jaise network request.

        callback("Data received via callback");
        // delay ke baad callback ko call kiya
        // aur data pass kar diya.
    }, 1000);
}

fetchDataCallback((data) => {
    // yahan callback function pass kiya.
    // jab fetchDataCallback data ready karega
    // tab ye function run hoga.

    console.log(data);
});
// output after 1s: Data received via callback

// Callback ka issue:
// nested callbacks se "callback hell" ho jata hai.
// error handling bhi messy hoti hai.


// ---------- Promise example ----------

function fetchDataPromise() {

    return new Promise((resolve, reject) => {
        // Promise constructor me function milta hai.
        // resolve => success
        // reject => failure

        setTimeout(() => {
            resolve("Data received via Promise");
            // success case me resolve call kiya.
            // is se promise fulfilled ho jata hai.
        }, 1000);
    });
}

fetchDataPromise().then((data) => console.log(data));
// fetchDataPromise() promise return karta hai.
// .then me data milega jab resolve ho.
// output after 1s: Data received via Promise


// ---------- async/await example ----------

async function fetchDataAsync() {
    // async function ka matlab:
    // ye function promise return karega.

    const data = await fetchDataPromise();
    // await ka matlab:
    // jab tak promise resolve na ho wait karo.
    // resolved value data me aa jayegi.

    console.log(data);
}

fetchDataAsync();
// output after 1s: Data received via Promise

// async/await ka faida:
// code synchronous jaisa dikhta hai.
// error handling try/catch se easy hoti hai.


// ==================== Closures ====================

// Closure ka matlab:
// inner function outer function ke variables ko remember karta hai.
// outer function finish ho jaye, phir bhi variable memory me reh sakta hai.

// Example:

function outer() {
    let count = 0;
    // count outer ka variable hai.

    return function inner() {
        // inner function count ko access kar raha hai.
        // is liye count memory me alive rahega.

        count++;
        console.log(count);
    };
}

const counter = outer();
// outer run hua.
// inner function return hua.
// counter me inner function store ho gaya.
// count variable ab closure ke through connected hai.

counter();
// count 0 -> 1
// output: 1

counter();
// count 1 -> 2
// output: 2

counter();
// count 2 -> 3
// output: 3


// ==================== Currying ====================

// Currying ka matlab:
// ek function jo multiple arguments leta ho,
// usko chain me convert karna
// jahan har function ek argument le.

// Example:

function multiply(x) {

    return function(y) {
        return x * y;
    };
}

const multiplyBy3 = multiply(3);
// x = 3 fixed ho gaya.

console.log(multiplyBy3(5));
// y = 5
// 3 * 5 = 15
// output: 15

// Currying ka faida:
// reusable functions bante hain.
// config jaisa behavior milta hai.


// ==================== Partial Application ====================

// Partial application ka matlab:
// function ke kuch arguments pehle se fix kar do
// baaki baad me pass karo.

// yahan add 3 arguments leta hai.

function add(a, b, c) {
    return a + b + c;
}

const add5And = add.bind(null, 5);
// bind ka kaam:
// ek naya function return karta hai.
// null yahan this binding ke liye.
// 5 first argument fix ho gaya.
// ab add5And ko sirf b aur c chahiye.

console.log(add5And(2, 3));
// internally: add(5,2,3)
// output: 10

// Partial application aur currying similar lagte hain.
// difference:
// currying chain banata hai.
// partial me ek hi function me kuch args fix ho jate hain.


// ==================== Summary ====================

// 1) Default params
// missing argument pe default value.

// 2) Rest params
// multiple unknown arguments ko array me pack.

// 3) Spread operator
// array/object ko expand karke copy/merge.

// 4) Arrow functions
// short syntax, lexical this.

// 5) Higher-order functions
// function accept/return function.

// 6) Callbacks
// old async style, nesting issue.

// 7) Promises
// structured async, then/catch.

// 8) async/await
// promises ka readable style.

// 9) Closures
// inner function outer variables remember.

// 10) Currying
// multi-arg function ko chain me todna.

// 11) Partial Application
// kuch args pre-set, baaki later.
