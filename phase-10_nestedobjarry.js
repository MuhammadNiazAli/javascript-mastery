// ==================== Nested Objects & Arrays ====================

// Nested ka matlab:
// ek object ke andar aur objects ho sakte hain,
// aur object ke andar arrays bhi ho sakti hain.
// Real life data aksar aisa hi hota hai.
// Example: student ka record, jisme marks bhi object hai aur hobbies array.

let student = {
    // student ek object hai.
    // object curly braces { } me banta hai.
    // isme key:value pairs hote hain.

    name: "Alice",
    // name key hai, value "Alice" string hai.

    age: 20,
    // age key hai, value 20 number hai.

    marks: {
        // marks key ki value ek nested object hai.
        // nested object ka matlab object ke andar object.

        math: 90,
        // math subject ka score.

        english: 85,
        // english subject ka score.

        science: 95
        // science subject ka score.
    },

    hobbies: ["reading", "swimming", "coding"]
    // hobbies key ki value ek array hai.
    // array square brackets [ ] me hota hai.
    // isme multiple strings store kiye gaye.
};


// Access nested object
// dot notation se nested object ko access karte hain.

console.log(student.marks.math);
// student => main object
// marks => nested object
// math => marks ka property
// output: 90


// Access nested array
// array me index se access hota hai.
// index 0 se start hota hai.

console.log(student.hobbies[2]);
// hobbies array: ["reading"(0), "swimming"(1), "coding"(2)]
// output: coding


// Modify nested object/array

student.marks.english = 88;
// marks object ke andar english property update ho gayi.
// pehle 85 thi, ab 88 ho gayi.

student.hobbies.push("painting");
// push ka matlab array ke end me new item add karna.
// hobbies ab: ["reading", "swimming", "coding", "painting"]

console.log(student);
// console me updated student object print hoga.


// ==================== Object Methods using this ====================

// Object method ka matlab:
// object ke andar function.
// Ye functions object ka behavior define karte hain.
// this keyword method ke andar "current object" ko refer karta hai.

let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2023,

    getDetails: function() {
        // getDetails ek method hai.
        // function keyword se banaya gaya.
        // jab car.getDetails() call hoga
        // tab this => car object ko point karega.

        return `${this.brand} ${this.model} (${this.year})`;
        // this.brand => "Toyota"
        // this.model => "Camry"
        // this.year => 2023
        // template literal se string ban rahi hai.
    },

    greet: function(owner) {
        // greet method ek parameter leta hai: owner
        // owner caller pass karega.

        console.log(`Hi ${owner}, this is your ${this.brand}`);
        // owner variable string me inject ho raha.
        // this.brand car ka brand access kar raha.
    }
};

console.log(car.getDetails());
// getDetails string return karega.
// output: Toyota Camry (2023)

car.greet("John");
// greet method run hoga.
// owner = "John"
// output: Hi John, this is your Toyota


// ==================== Object.keys / Object.values / Object.entries ====================

// Ye teen methods object ko analyze karne ke liye use hote hain.
// Jab tumhe loop chalana ho ya data transform karna ho
// tab ye bohat help karte hain.

let person = {
    name: "John",
    age: 30,
    city: "New York"
};


// Object.keys(person)
// output array of keys

console.log(Object.keys(person));
// keys ka matlab property names.
// output: ["name", "age", "city"]


// Object.values(person)
// output array of values

console.log(Object.values(person));
// values ka matlab property values.
// output: ["John", 30, "New York"]


// Object.entries(person)
// output array of pairs [key, value]

console.log(Object.entries(person));
// har item ek array hota hai: [key, value]
// output: [["name","John"],["age",30],["city","New York"]]

// entries ka use aksar for..of loop me hota hai:
// for (const [key, value] of Object.entries(person)) { ... }


// ==================== Object.assign / Spread for cloning objects ====================

// Cloning ka matlab:
// object ki copy banana.
// direct assignment (clone = person) reference copy karta hai.
// isliye clone change karoge to original bhi effect ho sakta hai.
// cloning se new object banta hai.


// Shallow copy using Object.assign

let clone1 = Object.assign({}, person);
// Object.assign(target, source)
// {} empty object target hai.
// person source hai.
// result: person ke properties {} me copy ho gayi.

clone1.name = "Alice";
// clone1 ka name change hua.

console.log(person.name);
// output: John
// original unaffected, kyunki clone1 separate object hai.

console.log(clone1.name);
// output: Alice


// Shallow copy using spread operator

let clone2 = { ...person };
// ...person ka matlab person ki properties new object me copy.
// ye bhi shallow copy hai.

clone2.city = "London";
// clone2 ka city update.

console.log(person.city);
// output: New York
// original object still same.

console.log(clone2.city);
// output: London


// ==================== Deep vs Shallow Copy ====================

// Shallow vs Deep difference tab samajh aata hai
// jab nested object ho.

// yahan obj ke andar address ek nested object hai.

let obj = {
    name: "John",
    address: {
        city: "NY",
        zip: 10001
    }
};


// Shallow copy

let shallowCopy = { ...obj };
// shallowCopy bana
// BUT address nested object ka reference copy hua.
// matlab shallowCopy.address aur obj.address same object ko point kar rahe hain.

shallowCopy.address.city = "LA";
// city update ki shallowCopy me
// lekin kyunki address same reference hai
// original obj ka address bhi change ho jayega.

console.log(obj.address.city);
// output: LA
// yahan clearly dikh raha hai original change ho gaya.
// ye shallow copy ka main issue hai nested data me.


// Deep copy (nested objects copied independently)

let deepCopy = JSON.parse(JSON.stringify(obj));
// JSON.stringify(obj) => object ko JSON string banata hai.
// JSON.parse(...) => string ko wapas object banata hai.
// is process me nested structure bhi new ban jata hai.
// isliye deep copy milti hai (simple data ke liye).

deepCopy.address.city = "Chicago";
// deepCopy ke address me change hua.

console.log(obj.address.city);
// output: LA
// original same raha, deepCopy ne affect nahi kiya.

console.log(deepCopy.address.city);
// output: Chicago


// Important note:
// JSON deep copy limitations:
// - functions lost ho jate hain
// - undefined lost ho jata hai
// - Date string ban jati hai
// - Map/Set/BigInt handle nahi hota
// simple objects/arrays ke liye ye ok hai.


// ==================== Summary ====================

// 1) Nested objects/arrays:
// object ke andar object/array real world data structure.

// 2) this:
// method ke andar current object ko refer karta hai.
// "car.getDetails()" call ho to this => car.

// 3) Object.keys:
// keys (property names) ka array.

// 4) Object.values:
// values ka array.

// 5) Object.entries:
// [key, value] pairs ka array.

// 6) Object.assign / spread:
// shallow copy banate hain.
// nested objects ka reference share ho sakta hai.

// 7) Shallow copy:
// top-level properties copy hoti hain,
// nested cheezen reference hoti hain.

// 8) Deep copy:
// nested objects bhi separate ban jate hain.
// JSON trick simple cases me useful.
