// Function ek machine jaisa hota hai
// jo input leta hai
// us par process karta hai
// aur output deta hai


// normal function
// function keyword se banta hai
// ye hoisted hota hai
// matlab function upar define ho ya neeche
// kahin se bhi call kar sakte ho

function greet(name) {
    // name parameter hai
    // matlab input
    return "Hello, " + name + "!";
    // return ka matlab output dena
}

console.log(greet("Alice"));
// yahan "Alice" argument hai
// function ke andar name me "Alice" chala gaya
// output: Hello, Alice!


// arrow function
// ES6 me introduce hua
// short syntax hota hai
// arrow function ka apna this nahi hota

const greetArrow = (name) => {
    return `Hello, ${name}!`;
};

console.log(greetArrow("Bob"));
// same kaam kar raha hai
// bas syntax short hai


// function expression
// function ko variable ke andar store karte hain
// ye hoisted nahi hota
// matlab define se pehle call nahi kar sakte

const greetExpression = function (name) {
    return "Hello, " + name + "!";
};

console.log(greetExpression("Charlie"));


// IIFE function
// Immediately Invoked Function Expression
// function banta bhi hai
// aur turant execute bhi ho jata hai
// mostly private scope ke liye use hota hai

(function (name) {
    console.log("Hello, " + name + "!");
})("David");

// yahan function bana
// aur turant call ho gaya
// "David" argument gaya


// callback function
// jab ek function
// dusre function ke argument me jata hai

function greetCallback(name, callback) {
    const message = "Hello, " + name + "!";
    // yahan message bana
    callback(message);
    // callback function ko call kiya
}

greetCallback("Eve", function (message) {
    console.log(message);
});

// yahan anonymous function callback bana
// jo baad me call hua


// recursive function
// jo khud ko hi call karta hai
// base condition zaroori hoti hai
// warna infinite loop ho jata hai

function factorial(n) {

    if (n === 0) {
        // base condition
        return 1;
    }

    return n * factorial(n - 1);
    // function khud ko call kar raha hai
}

console.log(factorial(5));
// 5 * 4 * 3 * 2 * 1 = 120


// higher order function
// jo function ko argument me le
// ya function return kare

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function calculate(operation, a, b) {
    // operation ke andar function aa raha hai
    return operation(a, b);
}

console.log(calculate(add, 2, 3));
console.log(calculate(multiply, 2, 3));


// closure function
// jab inner function
// outer function ke variables ko yaad rakhe

function outerFunction(outerVariable) {

    return function innerFunction(innerVariable) {

        console.log("Outer Variable:", outerVariable);
        console.log("Inner Variable:", innerVariable);

    };
}

const newFunction = outerFunction("outside");
newFunction("inside");

// outerVariable function khatam hone ke baad bhi
// memory me rehta hai
// isi ko closure kehte hain


// currying function
// ek argument leta hai
// aur function return karta hai

function multiplyCurried(x) {

    return function (y) {

        return x * y;

    };
}

const multiplyByTwo = multiplyCurried(2);
console.log(multiplyByTwo(3));
// 2 * 3 = 6


// partial application
// kuch arguments pehle hi fix kar dete hain

function addPartial(a, b, c) {
    return a + b + c;
}

const addFive = addPartial.bind(null, 5);
console.log(addFive(3, 2));
// 5 fix ho gaya
// 5 + 3 + 2 = 10


// function composition
// ek function ka output
// dusre function ka input ban jata hai

function addOne(x) {
    return x + 1;
}

function square(x) {
    return x * x;
}

function compose(f, g) {

    return function (x) {

        return f(g(x));
        // pehle g chalega
        // phir uska output f me jayega
    };
}

const addOneThenSquare = compose(square, addOne);
console.log(addOneThenSquare(2));
// pehle 2+1 = 3
// phir 3*3 = 9


// memoization
// function ke result ko cache me save karte hain
// same input par dobara calculation nahi hoti

function memoize(fn) {

    const cache = {};

    return function (arg) {

        if (arg in cache) {
            return cache[arg];
        }

        const result = fn(arg);
        cache[arg] = result;
        return result;
    };
}

const factorialMemo = memoize(function (n) {

    if (n === 0) return 1;
    return n * factorialMemo(n - 1);

});

console.log(factorialMemo(5));
console.log(factorialMemo(6));
// factorial(5) cache se aaya


// arrow IIFE
// IIFE ka arrow version

((name) => {
    console.log("Hello, " + name);
})("Frank");


// callback with arrow function

greetCallback("Grace", (message) => {
    console.log(message);
});


// recursive arrow function

const factorialArrow = (n) => {

    if (n === 0) return 1;
    return n * factorialArrow(n - 1);

};

console.log(factorialArrow(5));


// closure with arrow function

const outerFunctionArrow = (outerVariable) => {

    return (innerVariable) => {

        console.log("Outer:", outerVariable);
        console.log("Inner:", innerVariable);

    };
};

const arrowClosure = outerFunctionArrow("outside");
arrowClosure("inside");


// currying with arrow function

const multiplyCurriedArrow = (x) => (y) => x * y;

const multiplyByTwoArrow = multiplyCurriedArrow(2);
console.log(multiplyByTwoArrow(5));


// memoization with arrow function
// fibonacci example

const memoizeArrow = (fn) => {

    const cache = {};

    return (n) => {

        if (n in cache) return cache[n];

        const result = fn(n);
        cache[n] = result;
        return result;
    };
};

const fibonacci = memoizeArrow((n) => {

    if (n <= 1) return n;

    return fibonacci(n - 1) + fibonacci(n - 2);
});

console.log(fibonacci(10));
console.log(fibonacci(15));
console.log(fibonacci(20));


// default parameters
// agar argument na mile
// default value use hoti hai

const greetDefault = (name = "Guest") => {
    return `Hello, ${name}!`;
};

console.log(greetDefault());
console.log(greetDefault("Hannah"));


// rest parameters
// multiple arguments ko
// ek array bana deta hai

const sumAll = (...numbers) => {

    return numbers.reduce((acc, curr) => acc + curr, 0);

};

console.log(sumAll(1, 2, 3, 4));
console.log(sumAll(5, 10, 15));


// spread operator
// array ko tod kar
// values pass karta hai

const multiplyThreeNumbers = (a, b, c) => a * b * c;

const nums = [2, 3, 4];

console.log(multiplyThreeNumbers(...nums));
// nums array toot gaya
// 2,3,4 alag alag pass ho gaye
