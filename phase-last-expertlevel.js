// ==================== JAVASCRIPT EXPERT LEVEL GUIDE ====================


// ==================== EVENT LOOP ====================

// Event loop JS ka brain hota hai.
// Ye decide karta hai kaunsa code kab chalega.

// JS single-threaded hoti hai.
// Matlab ek time me ek hi kaam karti hai.

// Par asynchronous code ke liye
// browser Web APIs use karta hai.


// Example:

console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");


// Execution flow:

// 1) Call Stack
// "Start" print
// "End" print

// 2) Microtask Queue
// Promise.then chalega

// 3) Macrotask Queue
// setTimeout chalega

// Output:
// Start
// End
// Promise
// Timeout


// Priority order:
// Call Stack
// Microtasks (Promise)
// Macrotasks (setTimeout)


// ==================== MEMORY MANAGEMENT ====================

// JS automatically memory manage karti hai
// Isko Garbage Collection kehte hain.

// Jab koi variable use me nahi hota
// JS automatically uski memory free kar deta hai.


// Example:

let user = { name: "Ali" };
user = null;

// Ab object unreachable ho gaya
// Garbage collector memory free kar dega.


// Memory leaks tab hoti hain jab:

// 1) Global variables
// 2) Unused event listeners
// 3) Closures me unnecessary references


// ==================== WEB STORAGE ====================

// Browser me data store karne ke 2 tareeqe:

// 1) localStorage
// 2) sessionStorage


// localStorage:
// browser close hone ke baad bhi data rehta hai

localStorage.setItem("name", "Ali");
console.log(localStorage.getItem("name"));
localStorage.removeItem("name");


// sessionStorage:
// tab close hone par data delete

sessionStorage.setItem("age", 25);
console.log(sessionStorage.getItem("age"));


// ==================== MODULES ====================

// Modules ka matlab file ko parts me todna.

// export.js
export const name = "Ali";
export function greet() {
    console.log("Hello");
}

// import.js
import { name, greet } from "./export.js";
console.log(name);
greet();


// default export

export default function test() {
    console.log("Default export");
}

import test from "./file.js";


// ==================== STRICT MODE ====================

// strict mode JS ko zyada secure banata hai

"use strict";

x = 10; // Error
// bina let/var/const ke variable allowed nahi


// ==================== PERFORMANCE OPTIMIZATION ====================

// Debouncing
// frequent events ko control karna

function debounce(fn, delay) {
    let timer;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(fn, delay);
    };
}


// Throttling
// fixed time ke baad execute

function throttle(fn, limit) {
    let flag = true;
    return function () {
        if(flag){
            fn();
            flag = false;
            setTimeout(() => flag = true, limit);
        }
    }
}


// ==================== DESIGN PATTERNS ====================

// OBSERVER PATTERN

class Subject {
    constructor(){
        this.observers = [];
    }

    subscribe(fn){
        this.observers.push(fn);
    }

    notify(data){
        this.observers.forEach(fn => fn(data));
    }
}

const news = new Subject();

news.subscribe(data => console.log("User1:", data));
news.subscribe(data => console.log("User2:", data));

news.notify("Breaking News");


// ==================== TESTING ====================

// Jest example

test("sum test", () => {
    expect(1 + 2).toBe(3);
});


// ==================== BROWSER INTERNALS ====================

// Rendering steps:

// 1) HTML parse
// 2) DOM create
// 3) CSS parse
// 4) CSSOM
// 5) Render Tree
// 6) Layout
// 7) Paint


// ==================== SECURITY ====================

// XSS attack example

// NEVER DO:
element.innerHTML = userInput;

// SAFE:
element.textContent = userInput;


// CSRF:
// fake request from another website


// ==================== ADVANCED DOM ====================

// MutationObserver

const observer = new MutationObserver(() => {
    console.log("DOM changed");
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});


// ==================== SHADOW DOM ====================

const shadowHost = document.querySelector("#box");
const shadow = shadowHost.attachShadow({ mode: "open" });

shadow.innerHTML = `
<style>
p { color:red }
</style>
<p>Shadow text</p>
`;


// ==================== WEB WORKERS ====================

// main.js

const worker = new Worker("worker.js");
worker.postMessage(10);

worker.onmessage = e => {
    console.log("Result:", e.data);
};


// worker.js

onmessage = e => {
    let num = e.data;
    postMessage(num * 2);
};


// ==================== TYPESCRIPT ====================

// TypeScript JS ka typed version hai

// let age:number = 25;
// let name:string = "Ali";

// function sum(a:number, b:number):number{
//     return a + b;
// }

// Ye file sirf advanced developers ke liye hai
// Yahan hum engine level, architecture level concepts dekhenge


// ==================== JS ENGINE WORKING ====================

// JS engine (V8, SpiderMonkey) ke parts:

// 1) Call Stack
// 2) Heap Memory
// 3) Event Loop
// 4) Task Queues

// Call Stack
// yahan synchronous functions push/pop hotay hain

function one(){
    two();
}

function two(){
    three();
}

function three(){
    console.log("Hello");
}

one();

// Flow:
// one -> two -> three -> pop -> pop -> pop


// Heap Memory
// objects yahan store hotay hain

let obj = {name:"Ali"};


// ==================== EXECUTION CONTEXT ====================

// Har function call pe ek execution context banta hai
// Context me 3 cheezen hoti hain:

// 1) Variable Environment
// 2) Scope Chain
// 3) this value


// Global Execution Context
// sab se pehle banta hai

var x = 10;

function test(){
    var y = 20;
}

test();


// ==================== SCOPE CHAIN ====================

// JS lexical scoping follow karti hai

let a = 10;

function outer(){
    let b = 20;

    function inner(){
        let c = 30;
        console.log(a,b,c);
    }

    inner();
}

outer();

// JS pehle local dekhti hai
// phir parent scope
// phir global


// ==================== HOISTING DEEP ====================

// Hoisting ka matlab:
// memory creation phase me declarations upar le jana

console.log(p); // undefined
var p = 5;

// var hoist hota hai undefined ke sath

// let/const hoist hotay hain
// par TDZ me rehte hain

// console.log(q); // ReferenceError
let q = 10;


// ==================== THIS KEYWORD DEEP ====================

// this depends on HOW function is called

// 1) global
console.log(this); // window

// 2) object
// let user = {
//     name:"Ali",
//     show(){
//         console.log(this.name);
//     }
// }
// user.show(); // Ali

// 3) function
function demo(){
    console.log(this);
}
demo(); // window / undefined (strict)

// 4) arrow
let obj2 = {
    name:"Sara",
    arrow:()=>{
        console.log(this.name);
    }
}
obj2.arrow(); // undefined


// ==================== BIND / CALL / APPLY ====================

function greet(city){
    console.log(this.name, city);
}

let p1 = {name:"Ali"};
let p2 = {name:"Zara"};

greet.call(p1,"Lahore");
greet.apply(p2,["Islamabad"]);

let binded = greet.bind(p1,"Karachi");
binded();


// ==================== IMMUTABILITY ====================

// Immutable ka matlab:
// original data change na karna

let state = {count:0};

let newState = {...state, count:1};

console.log(state.count); // 0
console.log(newState.count); //1


// ==================== FUNCTION COMPOSITION ====================

const add = x => x+1;
const mul = x => x*2;

const compose = (f,g) => x => f(g(x));

let result = compose(add,mul)(5);
// mul(5)=10 -> add(10)=11

console.log(result);


// ==================== MEMOIZATION ADVANCED ====================

function memo(fn){
    const cache = new Map();

    return function(n){
        if(cache.has(n)){
            return cache.get(n);
        }

        let res = fn(n);
        cache.set(n,res);
        return res;
    }
}

const fib = memo(function(n){
    if(n<2) return n;
    return fib(n-1)+fib(n-2);
});

console.log(fib(40));


// ==================== GENERATORS ====================

// generator pause/resume function

function* gen(){
    yield 1;
    yield 2;
    yield 3;
}

let g = gen();

console.log(g.next()); // {value:1,done:false}
console.log(g.next()); // {value:2,done:false}


// ==================== SYMBOL & ITERATORS ====================

let obj3 = {
    values:[1,2,3],
    [Symbol.iterator](){
        let i=0;
        return{
            next:()=>{
                if(i<this.values.length){
                    return {value:this.values[i++],done:false};
                }
                return {done:true};
            }
        }
    }
}

for(let v of obj3){
    console.log(v);
}


// ==================== PROXY ====================

// Proxy = object wrapper

let target = {name:"Ali"};

let proxy = new Proxy(target,{
    get(obj,prop){
        console.log("Accessed:",prop);
        return obj[prop];
    },
    set(obj,prop,val){
        console.log("Updated:",prop,val);
        obj[prop]=val;
    }
});

proxy.name;
proxy.age=25;


// ==================== REFLECT ====================

// Reflect = meta programming API

Reflect.set(target,"city","Lahore");
console.log(Reflect.get(target,"city"));


// ==================== WEAKMAP / WEAKSET ====================

// Garbage collection friendly

let wm = new WeakMap();

let userObj = {id:1};

wm.set(userObj,"secret");

// userObj delete hone par
// memory auto free


// ==================== MICRO FRONTENDS CONCEPT ====================

// JS large apps ko small apps me tod deta hai
// independent deployable units


// ==================== SERVER SIDE JS ====================

// Node.js me:

// process
// fs
// streams
// buffers
// clustering


// ==================== STREAMS ====================

// chunk based data

const fs = require("fs");

let stream = fs.createReadStream("file.txt");

stream.on("data",chunk=>{
    console.log(chunk.toString());
});


// ==================== BUFFER ====================

let buf = Buffer.from("Hello");
console.log(buf);


// ==================== CLUSTER ====================

// multi core CPU use

const cluster = require("cluster");

if(cluster.isMaster){
    cluster.fork();
}else{
    console.log("Worker");
}


// ==================== EVENT EMITTER ====================

const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("login",user=>{
    console.log("User logged:",user);
});

emitter.emit("login","Ali");


// ==================== DESIGN PRINCIPLES ====================

// SOLID
// DRY
// KISS
// YAGNI


// ==================== ARCHITECTURE LEVEL ====================

// MVC
// MVVM
// Clean Architecture
// Hexagonal


// ==================== INTERVIEW LEVEL ====================

// Explain Event loop
// Explain closures
// Explain this
// Explain hoisting
// Explain memory leaks
// Explain promises
// Explain prototype chain


// ==================== FINAL JAVASCRIPT LEVEL ====================
// Yahan wo sab cheezen hain jo JS ko COMPLETE banati hain
// Browser APIs + System APIs + Real world tools


// ==================== INTERNATIONALIZATION (i18n) ====================

// Multi-language support ke liye
// Dates, currency, numbers format karne ke liye

const price = 123456.78;

const us = new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});
const pk = new Intl.NumberFormat("ur-PK",{style:"currency",currency:"PKR"});

console.log(us.format(price)); // $123,456.78
console.log(pk.format(price)); // Rs 123,456.78


// ==================== WEBSOCKETS ====================

// Real-time communication
// Chat apps, live updates

const socket = new WebSocket("wss://echo.websocket.org");

socket.onopen = ()=>{
    socket.send("Hello Server");
}

socket.onmessage = e=>{
    console.log("Server:",e.data);
}


// ==================== SERVER SENT EVENTS (SSE) ====================

// Server se continuous data
// Live notifications

const eventSource = new EventSource("/events");

eventSource.onmessage = e=>{
    console.log("SSE:",e.data);
}


// ==================== INDEXED DB ====================

// Browser ka database
// Offline apps ke liye

let request = indexedDB.open("MyDB",1);

request.onupgradeneeded = e=>{
    let db = e.target.result;
    db.createObjectStore("users",{keyPath:"id"});
}


// ==================== SERVICE WORKERS ====================

// Offline support
// Cache API
// PWA

navigator.serviceWorker.register("sw.js");


// ==================== PROGRESSIVE WEB APPS (PWA) ====================

// Offline
// Installable
// Push notifications


// ==================== CANVAS ====================

// Graphics drawing

const canvas = document.getElementById("c");
const ctx = canvas.getContext("2d");

ctx.fillStyle="red";
ctx.fillRect(10,10,100,100);


// ==================== WEBGL ====================

// 3D graphics
// Games
// Heavy visualization


// ==================== WEB ASSEMBLY ====================

// High performance code
// C/C++/Rust -> wasm


// ==================== TC39 PROCESS ====================

// JS new features aise aate hain:
// Stage 0 -> idea
// Stage 1 -> proposal
// Stage 2 -> draft
// Stage 3 -> candidate
// Stage 4 -> final


// ==================== ABORT CONTROLLER ====================

// Fetch cancel karna

const controller = new AbortController();

fetch("https://api.com",{signal:controller.signal});

controller.abort();


// ==================== PERFORMANCE API ====================

performance.mark("start");

for(let i=0;i<100000;i++){}

performance.mark("end");

performance.measure("loop","start","end");

console.log(performance.getEntriesByType("measure"));


// ==================== INTERSECTION OBSERVER ====================

// Lazy loading
// Scroll detection

// const observer = new IntersectionObserver(entries=>{
//     entries.forEach(e=>{
//         if(e.isIntersecting){
//             console.log("Visible");
//         }
//     })
// });

// observer.observe(document.querySelector("#box"));


// ==================== RESIZE OBSERVER ====================

// Element resize detect

const resize = new ResizeObserver(entries=>{
    console.log(entries[0].contentRect.width);
});

resize.observe(document.querySelector("#box"));


// ==================== REQUEST ANIMATION FRAME ====================

// Smooth animations

function animate(){
    console.log("Frame");
    requestAnimationFrame(animate);
}

animate();


// ==================== HISTORY API ====================

// SPA routing

history.pushState({}, "", "/home");
console.log(location.pathname);


// ==================== URL API ====================

let url = new URL("https://site.com?name=ali");

console.log(url.searchParams.get("name"));


// ==================== CRYPTO API ====================

// Secure random

crypto.getRandomValues(new Uint32Array(1));


// ==================== TEMPORAL API (NEW DATE API) ====================

// Better date handling (future standard)


// ==================== PACKAGE MANAGEMENT ====================

// npm
// yarn
// pnpm


// ==================== BUILD TOOLS ====================

// Webpack
// Vite
// Rollup
// Parcel


// ==================== LINTING & FORMATTING ====================

// ESLint
// Prettier


// ==================== TESTING ====================

// Jest
// Cypress
// Playwright


// ==================== CI / CD ====================

// Github Actions
// Gitlab CI
// Jenkins


// ==================== ACCESSIBILITY (A11y) ====================

// aria-label
// keyboard support
// screen readers


// ==================== TIME API ====================

// setTimeout
// setInterval
// requestIdleCallback


// ==================== FINAL SUMMARY ====================

// Tumne seekh liya:

// ✔ Core JavaScript
// ✔ Async JS
// ✔ DOM
// ✔ Browser APIs
// ✔ Performance
// ✔ Security
// ✔ Architecture
// ✔ Node.js
// ✔ PWA
// ✔ Real-time systems
// ✔ Graphics
// ✔ Databases
// ✔ Dev tooling

