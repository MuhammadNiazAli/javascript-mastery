// ==================== 8Advanced Patterns ====================

// Ye section advanced patterns cover karta hai.
// In patterns ka main goal hota hai:
// - code ko organized rakhna
// - reuse easy banana
// - data ko private/protected rakhna
// - memory efficient banana
// - large projects me structure maintain karna


// ==================== Module Pattern ====================

// Module pattern ka idea:
// hum ek IIFE (Immediately Invoked Function Expression) banate hain.
// IIFE ke andar variables/functions private rehte hain.
// aur return ke andar sirf public methods expose karte hain.
// Is tarah encapsulation hoti hai (private cheezen hidden).

const CounterModule = (function () {
    // yahan function create hua aur turant run bhi ho gaya.

    let count = 0;
    // count private variable hai.
    // ye sirf is IIFE ke andar accessible hai.
    // bahar se koi direct count ko touch nahi kar sakta.

    function increment() {
        // increment private function hai.
        // ye count ko 1 increase karega.
        count++;
    }

    function decrement() {
        // decrement private function hai.
        // ye count ko 1 decrease karega.
        count--;
    }

    function getCount() {
        // getCount public banane ka plan hai
        // kyunki hum isko return kar rahe hain.
        // ye count ka current value return karega.
        return count;
    }

    return {
        // yahan hum public API return kar rahe hain.
        // jo cheez return hoti hai woh bahar accessible hoti hai.
        // jo return me nahi hoti woh private rehti hai.

        increment,
        decrement,
        getCount
    };
})();
// })(); ka matlab IIFE execute ho gaya.
// CounterModule ke andar ab sirf 3 methods available hain.

CounterModule.increment();
// count 0 tha, ab 1 ho gaya.

CounterModule.increment();
// count 1 tha, ab 2 ho gaya.

console.log(CounterModule.getCount());
// getCount current count return karega.
// output: 2

CounterModule.decrement();
// count 2 tha, ab 1 ho gaya.

console.log(CounterModule.getCount());
// output: 1

// yahan important cheez:
// count variable direct access nahi hota
// kyunki wo return me nahi hai.

// console.log(CounterModule.count);
// output: undefined
// kyunki CounterModule object me count property exist hi nahi.


// ==================== Revealing Module Pattern ====================

// Revealing module pattern bhi module pattern jaisa hai.
// difference ye hai:
// hum return object me clear naming ke sath map kar dete hain.
// matlab public names aur private function names alag ho sakte hain.

const RevealingCounter = (function () {

    let count = 0;
    // private variable again

    function increment() {
        // private function
        count++;
    }

    function decrement() {
        // private function
        count--;
    }

    function getCount() {
        // private function but public expose hogi
        return count;
    }

    return {
        // yahan hum explicitly reveal kar rahe hain:
        // inc -> increment function ko point kar raha
        // dec -> decrement function ko point kar raha
        // value -> getCount function ko point kar raha

        inc: increment,
        dec: decrement,
        value: getCount
    };
})();

RevealingCounter.inc();
// count 0 -> 1

RevealingCounter.inc();
// count 1 -> 2

console.log(RevealingCounter.value());
// output: 2

RevealingCounter.dec();
// count 2 -> 1

console.log(RevealingCounter.value());
// output: 1


// ==================== Factory Functions ====================

// Factory function ka concept:
// ek function jo naya object bana kar return kare.
// "new" keyword use nahi hota.
// ye simple aur readable approach hoti hai.

function createPerson(name, age) {

    return {
        // property shorthand:
        // name: name
        // age: age
        name,
        age,

        greet() {
            // method shorthand syntax (ES6)
            // yahan name aur age outer function ke parameters hain.
            // ye closure ki tarah behave karte hain.
            console.log(`Hi, my name is ${name} and I'm ${age} years old`);
        }
    };
}

const person1 = createPerson("Alice", 25);
// createPerson ne object return kiya.
// person1 me wo object store ho gaya.

const person2 = createPerson("Bob", 30);
// person2 me separate naya object.

person1.greet();
// output: Hi, my name is Alice and I'm 25 years old

person2.greet();
// output: Hi, my name is Bob and I'm 30 years old


// ==================== Constructor Functions ====================

// Constructor function ka concept:
// function ko "new" ke saath call karte hain.
// new 3 kaam karta hai:
// 1) ek empty object banata hai
// 2) this ko us object se bind karta hai
// 3) prototype link set karta hai
// 4) object return karta hai

function Person(name, age) {

    this.name = name;
    // this ka matlab: jo new object create hua
    // us object me name property set ho rahi hai.

    this.age = age;
    // age property set ho rahi hai.

    this.greet = function() {
        // greet method har object ke andar alag copy ban jata hai.
        // is wajah se memory heavy ho sakta hai.
        console.log(`Hi, my name is ${this.name}`);
    };
}

const person3 = new Person("Charlie", 22);
// new Person call hua, new object bana, this bind hua,
// person3 me object store ho gaya.

person3.greet();
// output: Hi, my name is Charlie


// ==================== Prototypes & Inheritance ====================

// Prototype ka concept:
// JS me objects methods prototype se inherit karte hain.
// Agar method prototype pe ho, to wo shared hota hai.
// is se memory save hoti hai.

Person.prototype.sayAge = function() {
    // sayAge method prototype pe add hua.
    // ab Person se bane har object ko ye method mil jayega.
    console.log(`I am ${this.age} years old`);
};

person3.sayAge();
// output: I am 22 years old


// ==================== Inheritance Example (Student inherits Person) ====================

// Inheritance ka matlab:
// Student ko Person ki properties/methods milen.

function Student(name, age, grade) {

    Person.call(this, name, age);
    // Person.call ka matlab:
    // Person function ko run karo
    // lekin this = current Student object
    // is se name, age Student me copy ho jayenge.

    this.grade = grade;
    // grade Student ka extra property.
}


// Prototype inheritance setup:

Student.prototype = Object.create(Person.prototype);
// Object.create(Person.prototype) ka matlab:
// ek naya object banao jiska prototype Person.prototype ho.
// ab Student.prototype ka parent Person.prototype ban gaya.

Student.prototype.constructor = Student;
// constructor ko reset karna zaroori hota hai.
// warna constructor Person show karega.

Student.prototype.study = function() {
    // Student ka apna method.
    console.log(`${this.name} is studying in grade ${this.grade}`);
};

const student1 = new Student("David", 18, 12);
// new Student object create hua
// name, age Person.call se aay
// grade Student se set hua.

student1.greet();
// greet Student ke object me milta hai
// kyunki Person constructor me greet define hua tha.

student1.sayAge();
// sayAge prototype chain se milta hai
// Person.prototype se inherited.

student1.study();
// Student ka own method.


// ==================== Class Syntax (ES6+) ====================

// ES6 classes JS me syntactic sugar hain.
// Under the hood prototype based hi hai.
// Lekin syntax clean ho jata hai.

class Animal {

    constructor(name, type) {
        // constructor object create hote hi run hota hai.
        this.name = name;
        this.type = type;
    }

    speak() {
        // class methods prototype pe hi store hoti hain.
        // is liye memory efficient hoti hain.
        console.log(`${this.name} makes a sound`);
    }
}

class Dog extends Animal {

    constructor(name, breed) {
        // super() parent class constructor call karta hai.
        super(name, "Dog");
        // yahan parent Animal ke constructor ko call kiya.
        // name set hua, type "Dog" set hua.

        this.breed = breed;
        // Dog ka extra property.
    }

    speak() {
        // method overriding:
        // parent speak ko replace kar diya.
        console.log(`${this.name} barks`);
    }
}

const dog1 = new Dog("Buddy", "Golden Retriever");
// Dog object create hua
// Animal constructor run hua via super
// breed set hua

dog1.speak();
// output: Buddy barks


// ==================== Singleton Pattern ====================

// Singleton ka concept:
// app me sirf ek instance create ho.
// baar baar new object create na ho.
// har jagah same instance use ho.

const Singleton = (function() {

    let instance;
    // private variable
    // isme created instance store hoga.

    function createInstance() {
        // ye function new object create karega.
        return { name: "MySingletonObject" };
    }

    return {

        getInstance: function() {
            // agar instance abhi tak create nahi hua
            // to createInstance chala ke banado.

            if (!instance) {
                instance = createInstance();
            }

            // phir instance return karo
            return instance;
        }
    };

})();

const obj1 = Singleton.getInstance();
// pehli call me instance null tha
// create hua aur obj1 ko mila.

const obj2 = Singleton.getInstance();
// dusri call me instance already available
// same instance return hua.

console.log(obj1 === obj2);
// output: true
// dono same memory reference point kar rahe hain.


// ==================== Notes ====================

// 1) Module & Revealing Module:
// private data hide, public methods expose.
// encapsulation milti hai.

// 2) Factory functions:
// simple object creation without new.
// readable, flexible.

// 3) Constructor functions:
// new keyword se object creation.
// this binding, prototype linking.

// 4) Prototypes & inheritance:
// methods share, memory efficient.
// prototype chain se inherit hota hai.

// 5) ES6 classes:
// clean syntax.
// under the hood prototype hi.

// 6) Singleton:
// application me single shared object.
// same instance everywhere.
