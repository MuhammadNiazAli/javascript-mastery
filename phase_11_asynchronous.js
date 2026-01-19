// ==================== ASYNCHRONOUS JAVASCRIPT ====================

// Asynchronous ka matlab hota hai
// JS code ek jagah wait nahi karta
// balkay baaki code parallel chal jata hai
// real life examples:
// API calls, timers, user clicks, file reading

// ==================== CALLBACK FUNCTIONS ====================

// Callback function wo hota hai
// jo kisi dusre function ke argument me pass hota hai
// aur baad me call hota hai

function greetCallback(name, callback) {

    const message = "Hello, " + name + "!";
    // message variable me greeting store ki

    callback(message);
    // yahan callback function call ho raha hai
    // jo argument me mila tha
}

greetCallback("Alice", function(message) {
    // yeh anonymous function callback bana
    // jab callback(message) call hua
    // to ye function execute hua
    console.log("Callback:", message);
});

// Output:
// Callback: Hello, Alice!

// Important baat:
// Callback by default async nahi hota
// ye sirf ek technique hai
// async code banane ke liye


// ==================== PROMISES ====================

// Promise ek object hota hai
// jo future me kisi value ka wada karta hai
// iske 3 states hoti hain:
// 1) pending  -> wait mode
// 2) fulfilled -> resolve ho gaya
// 3) rejected  -> fail ho gaya

const promiseExample = new Promise((resolve, reject) => {

    let success = true;
    // success true hai
    // agar false hota to reject hota

    setTimeout(() => {
        // setTimeout async function hai
        // ye 2 second baad chalega

        if (success) {
            resolve("Promise resolved successfully!");
            // resolve ka matlab success
        } else {
            reject("Promise rejected!");
            // reject ka matlab failure
        }

    }, 2000); // 2 seconds delay
});

// Promise consume karna

promiseExample
    .then((res) => {
        // jab promise resolve ho
        console.log("Promise then:", res);
    })
    .catch((err) => {
        // jab promise reject ho
        console.log("Promise catch:", err);
    });

// .then() success ke liye
// .catch() error ke liye


// ==================== ASYNC / AWAIT ====================

// async/await promise handle karne ka modern tareeqa hai
// code synchronous jaisa lagta hai
// par background me async hota hai

async function asyncExample() {

    try {
        // await ka matlab
        // jab tak promise complete na ho
        // yahin wait karo

        const result = await promiseExample;

        console.log("Async/Await:", result);

    } catch (error) {
        // agar promise reject hua
        console.log("Async/Await Error:", error);
    }
}

asyncExample();
// function call


// ==================== setTimeout ====================

// setTimeout ka use
// kisi function ko delay ke baad chalane ke liye

console.log("Start timeout");

setTimeout(() => {
    // ye function 3 second baad chalega
    console.log("Executed after 3 seconds");
}, 3000);

console.log("End timeout");

// Output order:
// Start timeout
// End timeout
// Executed after 3 seconds

// Ye prove karta hai
// JS wait nahi karti
// baaki code pehle run hota hai


// ==================== setInterval ====================

// setInterval function
// har fixed time ke baad repeatedly run hota hai

let count = 0;
// counter

const intervalId = setInterval(() => {

    count++;
    console.log("Interval count:", count);

    if (count === 5) {
        clearInterval(intervalId);
        // interval stop
        console.log("Interval stopped");
    }

}, 1000);
// har 1 second me run

// Output:
// 1
// 2
// 3
// 4
// 5
// Interval stopped


// ==================== FETCH API ====================

// fetch browser ka built-in function hai
// server se data lene ke liye
// fetch Promise return karta hai

fetch("https://jsonplaceholder.typicode.com/users")

    .then(response => {
        // response raw hota hai
        // usko JSON me convert karte hain
        return response.json();
    })

    .then(users => {
        // users array hai

        console.log("Fetched users using fetch:");

        users.forEach(user => {
            // user object
            console.log(user.name, "-", user.email);
        });
    })

    .catch(error => {
        console.log("Fetch Error:", error);
    });


// ==================== ASYNC/AWAIT WITH FETCH ====================

// same kaam async/await se

async function fetchUsers() {

    try {

        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        // wait for server

        const users = await response.json();
        // wait for JSON parse

        console.log("Fetched users using async/await:");

        users.forEach(user => {
            console.log(user.id, user.name, user.email);
        });

    } catch (error) {
        console.log("Error fetching users:", error);
    }
}

fetchUsers();


// ==================== POST REQUEST ====================

// POST ka matlab
// server ko data bhejna

async function createUser() {

    const newUser = {
        name: "Ali",
        username: "ali123",
        email: "ali@example.com"
    };
    // JS object

    try {

        const response = await fetch("https://jsonplaceholder.typicode.com/users", {

            method: "POST",
            // HTTP method

            headers: {
                "Content-Type": "application/json"
                // server ko bataya
                // data JSON me hai
            },

            body: JSON.stringify(newUser)
            // object ko JSON string banaya
        });

        const data = await response.json();
        // response parse

        console.log("New user created:", data);

    } catch (error) {
        console.log("Error creating user:", error);
    }
}

createUser();


// ==================== AXIOS (OPTIONAL) ====================

// Axios external library hai
// fetch ka alternative
// npm se install hoti hai

// axios.get(url)
// axios.post(url, data)

// Axios promise-based hoti hai
// response.data me actual data hota hai


// ==================== NOTES ====================

// 1) Callback
// function ko argument me pass karna

// 2) Promise
// future value ka object

// 3) then / catch
// success / error handle

// 4) async / await
// promise ko readable style me handle

// 5) setTimeout
// delay ke baad function

// 6) setInterval
// repeated execution

// 7) fetch
// browser API call

// 8) Axios
// third-party library

// 9) try / catch
// async error handling
