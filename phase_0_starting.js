// JavaScript ek programming language hai jo primarily web development ke liye design ki gayi thi
// Iska main purpose web pages ko interactive aur dynamic banana tha
// JavaScript ko pehle "Mocha" naam diya gaya tha, phir "LiveScript" aur finally "JavaScript"
// JavaScript ko 1995 mein Brendan Eich ne develop kiya tha Netscape Communications Corporation ke liye
// Initially JavaScript ka use web browsers mein hota tha, lekin aaj ke time mein ye server-side, mobile apps,
// desktop applications aur game development ke liye bhi use hota hai

// JavaScript ko aap "lightweight" aur "interpreted" programming language keh sakte hain
// Iska matlab hai ki aapko variables declare karte waqt unka type specify nahi karna padta
// Aur JavaScript ka code run-time pe interpret hota hai

// JavaScript ka use aaj kal har jagah hota hai: Web Development, Mobile Apps (React Native), 
// Server-side Programming (Node.js), Desktop Apps, Game Development aur bhi kai cheezon mein

// JavaScript ki Evolution (Versions):
// 1. **ES3 (ECMAScript 3)**: JavaScript ka pehla standard 1999 mein release kiya gaya
// 2. **ES5 (ECMAScript 5)**: 2009 mein aaya tha aur ismein kuch important features jaise 'strict mode' aur 'JSON' ka support add kiya gaya
// 3. **ES6 (ECMAScript 2015)**: Ye JavaScript ka major upgrade tha, ismein naye features jaise 'let', 'const', 'arrow functions',
//    'Promises', 'Classes', 'Modules' aur 'Template Literals' add kiye gaye
// 4. **ES7 aur Baaki Versions**: Har saal naye features aur improvements aate hain jaise async/await, Object.entries, 
//    Array.includes, etc.

// **Modules in JavaScript (CommonJS vs ES Modules)**:
// JavaScript mein do major tarike ke modules hote hain:
// 1. **CommonJS (CJS)**:
//    - CommonJS Node.js ka default module system hai
//    - Isme hum `require()` aur `module.exports` ka use karte hain
//    - Example: 
//      ```javascript
//      const myModule = require('./myModule');
//      module.exports = myModule;
//      ```
//    - Ye mainly server-side Node.js applications mein use hota hai

// 2. **ES Modules (ESM)**:
//    - ES6 mein introduced hua tha aur isme hum `import` aur `export` ka use karte hain
//    - Ye syntax cleaner aur zyada modular hai
//    - Example:
//      ```javascript
//      import { myFunction } from './myModule';
//      export { myFunction };
//      ```
//    - ES Modules ko use karne ke liye browser ya Node.js ko specific configuration ki zarurat hoti hai
//    - ES6 Modules ko zyada tar modern JavaScript applications mein use kiya jata hai

// **Types of Variables in JavaScript**:
// JavaScript mein variables declare karne ke liye 3 tarike hain:
// 1. **var**: Ye purane version mein use hota tha, aur globally ya function level pe scoped hota hai
// 2. **let**: ES6 se introduce hua tha aur block-level scoped hota hai, isko dobara declare nahi kiya ja sakta
// 3. **const**: Ye bhi ES6 se introduce hua tha aur constant value ko hold karta hai, iski value ko change nahi kiya ja sakta

// **Variable Scoping in JavaScript**:
// 1. **Global Scope**: Jab aap variable ko bahar declare karte hain to wo global hota hai
// 2. **Function Scope (var)**: Jab aap `var` ko function ke andar declare karte hain, to wo variable sirf us function ke andar accessible hota hai
// 3. **Block Scope (let, const)**: Jab aap `let` ya `const` ko block ke andar declare karte hain, to wo variable sirf us block ke andar accessible hota hai

// **Hoisting in JavaScript**:
// JavaScript mein variables ko hoist kiya jata hai, iska matlab hai ki variable declaration code ke top pe move kar jata hai
// `var` ko hoist karte waqt uska value `undefined` hota hai
// `let` aur `const` ko hoist kiya jata hai, lekin unka value initialization ke baad hi accessible hota hai, TDZ (Temporal Dead Zone) ke wajah se

// **JavaScript ke Main Features**:
// - **Dynamic Typing**: JavaScript mein variables ka type run-time pe decide hota hai, aapko variables declare karte waqt type specify nahi karna padta
// - **Asynchronous Programming**: JavaScript mein asynchronous programming kaafi important hai, aur `Promises` aur `async/await` ka use karke isko manage kiya jata hai
// - **First-Class Functions**: JavaScript mein functions ko pehli class citizens ke tarah treat kiya jata hai, isliye aap functions ko variables ke jaise pass aur return kar sakte hain
// - **Event-Driven Programming**: JavaScript mainly event-driven programming ka use karta hai, jisme user interactions aur events (click, scroll, etc.) ko handle kiya jata hai

// **JavaScript ke Modern Features**:
// - **Arrow Functions**: Short syntax for writing functions
// - **Template Literals**: Strings ko easily interpolate karne ke liye
// - **Destructuring**: Objects aur arrays ko easily unpack karna
// - **Classes**: Object-oriented programming ka support
// - **Modules**: Code ko alag-alag files mein modularize karna
// - **Promises/async-await**: Asynchronous code ko better tarike se handle karna

// **Conclusion**:
// JavaScript ek versatile aur powerful language hai jo har web developer ke liye essential hai
// Iska evolution ES5 se ES6 tak aur uske baad ke versions mein kaafi important features add kiye gaye hain
// JavaScript ke modules, scoping, aur variable declaration techniques ko samajhna bahut zaroori hai
// JavaScript ne modern web development ko shape diya hai aur aaj bhi ye web aur app development mein key role play karta hai
