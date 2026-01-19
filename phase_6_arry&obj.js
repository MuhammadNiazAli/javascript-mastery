// JAVASCRIPT ARRAYS & OBJECTS COMPLETE GUIDE

// ================== ARRAYS ==================

// Array ek container hota hai
// jisme hum multiple values ek hi jagah store kar sakte hain
// Array banane ke liye square brackets [ ] use hote hain
// Har value comma se separate hoti hai

let arr = [1, 2, 3, 4, 5]; 
// yahan arr ek number array hai
// isme 5 numbers store kiye gaye hain

let fruits = ["apple", "banana", "mango"]; 
// yahan fruits ek string array hai
// isme fruit ke naam store hain


// Array elements ko index se access karte hain
// index hamesha 0 se start hota hai

console.log(arr[0]); 
// arr[0] ka matlab first element
// output: 1

console.log(fruits[1]); 
// fruits[1] ka matlab second element
// output: banana


// length property
// array ke andar total items batati hai

console.log(arr.length); 
// output: 5
// kyunki 5 values hain

console.log(fruits.length); 
// output: 3
// kyunki 3 fruits hain


// Array element modify karna

arr[2] = 10; 
// index 2 pe pehle 3 tha
// ab uski jagah 10 aa gaya

console.log(arr); 
// output: [1, 2, 10, 4, 5]


// ================== ARRAY METHODS ==================


// push()
// array ke end me new element add karta hai

arr.push(6);
// 6 last me add ho gaya

console.log(arr); 
// [1, 2, 10, 4, 5, 6]


// pop()
// last element remove karta hai

arr.pop();
// last element 6 remove ho gaya

console.log(arr); 
// [1, 2, 10, 4, 5]


// shift()
// first element remove karta hai

arr.shift();
// first element 1 remove ho gaya

console.log(arr); 
// [2, 10, 4, 5]


// unshift()
// beginning me element add karta hai

arr.unshift(0);
// 0 start me add ho gaya

console.log(arr); 
// [0, 2, 10, 4, 5]


// slice()
// array ka part copy karta hai
// original array change nahi hota

let newArr = arr.slice(1, 4);
// index 1 se start
// index 4 exclude hota hai

console.log(newArr); 
// [2, 10, 4]


// forEach()
// har element pe loop lagata hai

arr.forEach((item, index) => {
    // item = current value
    // index = position
    console.log(`Index ${index}: ${item}`);
});


// map()
// har element pe operation karke
// new array banata hai

let squaredArr = arr.map((item) => item * item);
// har item ka square

console.log(squaredArr); 
// [0, 4, 100, 16, 25]


// filter()
// condition ke base pe values filter karta hai

let filteredArr = arr.filter((item) => item > 3);
// sirf wo values jin ki value 3 se badi ho

console.log(filteredArr); 
// [10, 4, 5]


// reduce()
// sab values ko combine karke
// ek single value banata hai

let sum = arr.reduce((acc, curr) => acc + curr, 0);
// acc = total
// curr = current value
// 0 starting value

console.log(sum); 
// output: 21


// ================== MULTIDIMENSIONAL ARRAY ==================

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
// yeh 2D array hai
// array ke andar array

console.log(matrix[1][2]); 
// pehla [1] = second row
// doosra [2] = third column
// output: 6


// Nested array iteration

matrix.forEach((row) => {
    // row = inner array
    row.forEach((item) => {
        console.log(item);
    });
});


// Traditional nested loops

for (let i = 0; i < matrix.length; i++) {

    for (let j = 0; j < matrix[i].length; j++) {

        console.log(matrix[i][j]);
    }
}


// ================== ARRAY DESTRUCTURING ==================

let [first, second, ...rest] = arr;
// first = first value
// second = second value
// rest = baqi sari values

console.log(first); 
// 0

console.log(second); 
// 2

console.log(rest); 
// [10, 4, 5]


// ================== OBJECTS ==================

// Object key-value ka container hota hai

let person = {
    name: "John",
    age: 30,
    isStudent: false
};


// Object properties access karna

console.log(person.name); 
// dot notation
// output: John

console.log(person["age"]); 
// bracket notation
// output: 30


// Modify properties

person.age = 31;
// age update ho gaya

person["isStudent"] = true;
// bracket method se update

console.log(person);


// New property add karna

person.city = "New York";

console.log(person);


// Property delete karna

delete person.isStudent;

console.log(person);


// Object method

person.greet = function() {
    // this ka matlab current object
    console.log(`Hello, my name is ${this.name}`);
};

person.greet();


// Object iteration

for (let key in person) {
    // key = property name
    console.log(`${key}: ${person[key]}`);
}


// Object destructuring

let { name, age } = person;

console.log(name); 
// John

console.log(age); 
// 31


// ================== NESTED OBJECT ==================

let student = {
    name: "Alice",
    marks: {
        math: 90,
        english: 85
    }
};

console.log(student.marks.math); 
// output: 90


// Nested destructuring

let { marks: { english } } = student;

console.log(english); 
// 85


// ================== THIS KEYWORD ==================

let car = {
    brand: "Toyota",
    model: "Camry",

    getDetails: function() {
        // this current object ko refer karta hai
        return `${this.brand} ${this.model}`;
    }
};

console.log(car.getDetails());


// ================== ARRAY + OBJECT COMBINATION ==================

let library = {

    books: [
        { title: "Book A", author: "Author A" },
        { title: "Book B", author: "Author B" }
    ],

    addBook: function(book) {
        // new book push kar rahe
        this.books.push(book);
    },

    listBooks: function() {

        this.books.forEach((book) => {
            console.log(`${book.title} by ${book.author}`);
        });
    }
};


// New book add karna

library.addBook({ title: "Book C", author: "Author C" });


// List print karna

library.listBooks();
// Book A by Author A
// Book B by Author B
// Book C by Author C


// ================== SUMMARY ==================

// Arrays:
// push -> end me add
// pop -> end se remove
// shift -> start se remove
// unshift -> start me add
// slice -> part copy
// map -> new array banata
// filter -> condition based values
// reduce -> single value banata

// Objects:
// key-value storage
// dot aur bracket access
// add / update / delete
// methods
// this keyword

// Nested:
// array ke andar array
// object ke andar object

// Destructuring:
// array aur object se values nikalna

// Combination:
// real world data handling
// arrays ke andar objects
// objects ke andar arrays
