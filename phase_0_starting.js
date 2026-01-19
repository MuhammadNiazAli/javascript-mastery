// JavaScript ek programming language hai jo web development ke liye use hoti hai.
// Iska full naam "JavaScript" hai, aur ye 1995 me Brendan Eich ne banayi thi.
// Shuru me iska naam "Mocha" tha, phir "LiveScript" aur finally "JavaScript" rakha gaya.
// JavaScript ko initially web browsers me run karne ke liye design kiya gaya tha,
// taaki web pages interactive ban sakein.
// Aaj ke time me JavaScript sirf browsers tak simit nahi hai,
// balki server-side programming (Node.js), mobile apps, desktop apps, aur game development me bhi use hoti hai.
// JavaScript dynamically typed, interpreted language hai,
// jiska matlab hai ki isme variables ko declare karte waqt unka type specify nahi karna padta,
// aur code ko run karte waqt interpret kiya jata hai.
// JavaScript ne web development me revolution la diya hai,
// aur ye aaj bhi web ka ek essential hissa hai.
console.log("JSON String:", jsonString);
// console me JSON string print ho jayega.
// ye string ab server ko bheji ja sakti hai ya storage me save ki ja sakti hai.
// output: {"employees":[{"firstName":"John","lastName":"Doe"},{"firstName":"Anna","lastName":"Smith"},{"firstName":"Peter","lastName":"Jones"}]}
// ==================== DOM Manipulation ====================
// DOM ka matlab Document Object Model.
// Ye ek tree structure hai jo HTML document ko represent karta hai.
// JavaScript se hum DOM ko manipulate kar sakte hain
// taaki web pages dynamic aur interactive ban sakein.
const heading = document.querySelector("h1");
// yahan humne document se pehla h1 element select kiya.
console.log(heading);
// console me heading element print hoga.
// ==================== Selecting Elements ====================
// 1 getElementById
// Ye method sirf id ke base par element deta hai.
const mainHeading = document.getElementById("main-heading");
console.log(mainHeading);
// 2 querySelector
// querySelector CSS selector ki tarah kaam karta hai.
const firstParagraph = document.querySelector("p");
console.log(firstParagraph.textContent);
// 3 querySelectorAll
// Ye multiple elements return karta hai.
const allParagraphs = document.querySelectorAll("p");
allParagraphs.forEach((para, index) => {
    console.log(`Paragraph ${index + 1}: ${para.textContent}`);
});
// ==================== Changing Text Content ====================
// 1 innerText
// Ye method text content ko change karta hai.
mainHeading.innerText = "Hello World";
// 2 textContent
// Ye method text content ko change karta hai.
firstParagraph.textContent = "This is a new paragraph.";
// 3 innerHTML
// Ye method HTML content ko change karta hai.
firstParagraph.innerHTML = "<strong>This is a bold paragraph.</strong>";
console.log("Updated Heading:", mainHeading.innerText);
console.log("Updated Paragraph:", firstParagraph.innerHTML);
console.log("Updated Paragraph Text:", firstParagraph.textContent);
// output:
// Updated Heading: Hello World
// Updated Paragraph: <strong>This is a bold paragraph.</strong>
// Updated Paragraph Text: This is a bold paragraph.
// ==================== Changing Styles ====================
// 1 Direct Style Manipulation
// Hum directly style properties ko change kar sakte hain.
mainHeading.style.color = "blue";
mainHeading.style.fontSize = "36px";
firstParagraph.style.backgroundColor = "yellow";
firstParagraph.style.padding = "10px";
console.log("Heading Color:", mainHeading.style.color);
console.log("Paragraph Background Color:", firstParagraph.style.backgroundColor);
// output:
// Heading Color: blue  
// Paragraph Background Color: yellow
// 2 CSS Classes
// Hum CSS classes ko add/remove/toggle kar sakte hain.
mainHeading.classList.add("highlight");
firstParagraph.classList.remove("old-class");
firstParagraph.classList.toggle("active");
console.log("Heading Classes:", mainHeading.className);
console.log("Paragraph Classes:", firstParagraph.className);
// output:
// Heading Classes: highlight
// Paragraph Classes: active
// ==================== Creating and Inserting Elements ====================
// 1 Creating Elements
const newDiv = document.createElement("div");
newDiv.innerText = "This is a new div element.";
newDiv.style.border = "1px solid black";
newDiv.style.padding = "10px";
// 2 Inserting Elements
document.body.appendChild(newDiv);
console.log("New Div Added:", newDiv.innerText);
// output: New Div Added: This is a new div element.

// ==================== Nested Objects & Arrays ====================
const student = {
    name: "Rahul",
    age: 22,
    marks: {
        math: 88,
        english: 92,
        science: 85
    },
    hobbies: ["cricket", "reading", "traveling"]
};

console.log("Student Name:", student.name);