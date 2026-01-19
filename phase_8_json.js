// ==================== JSON & API FETCHING IN JAVASCRIPT ====================

// JSON ka full naam JavaScript Object Notation hai.
// Ye data ko text form me store aur transfer karne ka format hai.
// Server aur client aksar JSON me data send/receive karte hain.
// JSON dikhta object jaisa hai, lekin actually ye string hoti hai.

// Example: static JSON string
// Real life me ye string server se response me aati hai.

const jsonData = `{
    "employees": [
        { "firstName": "John", "lastName": "Doe" },
        { "firstName": "Anna", "lastName": "Smith" },
        { "firstName": "Peter", "lastName": "Jones" }
    ]
}`;
// jsonData ek string hai, object nahi.
// Backticks isliye use hue kyunki multi-line string easy ho jati hai.
// JSON rules: keys mostly double quotes me hoti hain.

// ==================== JSON.parse() ====================

// JSON.parse() ka kaam: JSON string ko JS object me convert karna.
// Jab tak parse nahi karoge, dot notation se access nahi kar sakte.

const data = JSON.parse(jsonData);
// ab data ek real JS object ban gaya.
// ab data.employees access ho sakta hai.

console.log("Parsed JS Object:", data);
// console me object print ho jayega.
// tum dekh sakti ho employees naam ki property hai.

// ==================== Access array inside object ====================

const employees = data.employees;
// data ke andar employees ek array hai.
// employees variable me ab array store ho gaya.

// ==================== Loop employees ====================

// forEach array ka method hai.
// ye har item ke liye function run karta hai.
// employee current object hai.
// index current position hai.

employees.forEach((employee, index) => {
    // index + 1 isliye kiya kyunki human counting 1 se start hoti hai.
    // employee.firstName aur employee.lastName object properties hain.
    console.log(`Employee ${index + 1}: ${employee.firstName} ${employee.lastName}`);
});

// ==================== JSON.stringify() ====================

// JSON.stringify() ka kaam: JS object ko JSON string me convert karna.
// Ye tab use hota hai jab tum data server ko send karna chahti ho.
// Ya storage me save karna ho.

const jsonString = JSON.stringify(data);
// ab jsonString ek long string ban gaya.
// default me string single line me aa sakti hai.

console.log("JSON String:", jsonString);
// output me JSON string print hogi.

// ==================== FETCH API EXAMPLE ====================

// fetch() browser ka built-in function hai.
// Ye network request karta hai aur Promise return karta hai.
// Promise ka matlab result baad me milega.

// Ye demo API hai practice ke liye.

fetch("https://jsonplaceholder.typicode.com/users")
    // first then me response milta hai.
    // response.json() body ko read karke JSON me convert karta hai.
    // response.json() bhi Promise return karta hai.
    .then(response => response.json())

    // second then me users milte hain.
    // users normally array hota hai.
    .then(users => {
        console.log("Users from API:", users);

        // yahan loop laga ke naam aur email print kar rahe hain.
        users.forEach(user => {
            // user ek object hai.
            // user.name aur user.email properties hain.
            console.log(user.name, "-", user.email);
        });
    })

    // catch tab chalega jab request fail ho.
    // example: internet off, URL wrong, server down.
    .catch(error => {
        console.log("Error fetching data:", error);
    });

// Note:
// fetch me HTTP error codes pe catch automatically nahi chalta.
// Example 404 me fetch resolve ho jata hai.
// Us case me response.ok check karna hota hai.

// ==================== ASYNC / AWAIT ====================

// async/await Promise handle karne ka readable style hai.
// async function hamesha Promise return karta hai.
// await Promise ko wait karwata hai jab tak result na aa jaye.

// Async function define

async function fetchUsers() {
    // try block me normal flow hota hai.
    // catch block me errors handle hote hain.

    try {
        // await fetch ka matlab request complete hone tak wait.
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        // yahan response status check karna useful hota hai.
        // response.ok false ho to manual error throw kar sakte ho.

        // await response.json ka matlab body parse hone tak wait.
        const users = await response.json();

        console.log("Users fetched using async/await:");

        // users array ko loop kar rahe hain.
        users.forEach(user => {
            // id, name, email properties print.
            console.log(user.id, user.name, user.email);
        });

    } catch (error) {
        // network failure ya parsing error yahan aata hai.
        console.log("Error:", error);
    }
}

// Async function call
// function execute hota hai aur background me request run hoti hai.

fetchUsers();

// ==================== FETCH + POST EXAMPLE ====================

// POST ka matlab server ko data bhejna.
// Body me hum JSON string bhejte hain.
// headers me batate hain ke format JSON hai.

async function createUser() {

    const newUser = {
        name: "Ali",
        username: "ali123",
        email: "ali@example.com"
    };
    // newUser ek JS object hai.
    // is object ko body me bhejne se pehle stringify karna hota hai.

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            // method POST set ki.
            headers: {
                "Content-Type": "application/json"
                // server ko bataya ke body JSON me hai.
            },
            body: JSON.stringify(newUser)
            // object ko string banaya.
            // fetch body string accept karta hai.
        });

        const data = await response.json();
        // server response ko JSON me convert kiya.

        console.log("New user created:", data);
        // demo APIs aksar fake created data return kar deti hain.

    } catch (error) {
        console.log("Error creating user:", error);
    }
}

// function call
createUser();

// ==================== JSON & API NOTES ====================

// 1) JSON.parse: string ko object banata hai.
// 2) JSON.stringify: object ko string banata hai.
// 3) fetch: network request karta hai.
// 4) then/catch: promise chain handle karta hai.
// 5) async/await: same kaam easy style me karta hai.
// 6) try/catch: async errors handle karta hai.
// 7) GET: data lena.
// 8) POST: data bhejna.
// 9) Content-Type header JSON ke liye zaroori hota hai.

// ==================== BONUS: JSON + loops + filter ====================

// employees array pe filter laga rahe hain.
// startsWith("J") ka matlab firstName J se start ho.

const employeesFiltered = employees.filter(emp => emp.firstName.startsWith("J"));
// employeesFiltered ek new array ban gaya.
// original employees array change nahi hota.

employeesFiltered.forEach(emp => console.log("Filtered Employee:", emp.firstName));
// filtered employees print ho rahe hain.

// ==================== END ====================
