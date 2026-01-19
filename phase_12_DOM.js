// ==================== DOM (Document Object Model) ====================

// DOM ka matlab:
// Browser HTML ko ek tree ki form me convert karta hai.
// Is tree me har tag (div, p, h1, button) ek node / object hota hai.
// JS in objects ko use karke HTML ko read aur change karti hai.

// Simple example samjho:
// HTML page ek ghar hai.
// DOM us ghar ka blueprint hai.
// JS us blueprint ke through rooms (elements) ko paint, move, hide, show karti hai.


// ==================== Selecting Elements ====================

// Selecting ka matlab:
// HTML ke kisi element ko JS me pakar lena
// taake uske text, style, class ya events handle kar sako.


// 1 getElementById
// Ye method sirf id ke base par element deta hai.
// Id unique hoti hai.
// Ye fast hota hai, kyunki direct id lookup hota hai.

const heading = document.getElementById("main-heading");
// yahan JS HTML me dekhegi
// jiska id="main-heading" ho
// aur us element ka reference heading me store kar degi.

console.log(heading);
// yahan console me pure element ka object print hoga.
// tum dekh sakti ho tag name, attributes, etc.

console.log(heading.textContent);
// textContent ka matlab element ke andar ka sirf text.
// agar andar html tags bhi hon to wo ignore ho jayenge.


// 2 querySelector
// querySelector CSS selector ki tarah kaam karta hai.
// Ye first match return karta hai.
// Agar multiple <p> hain to sirf pehla milega.

const firstParagraph = document.querySelector("p");
// yahan "p" selector diya.
// is ka matlab first <p> element.

console.log(firstParagraph.textContent);
// pehle paragraph ka text print hoga.


// 3 querySelectorAll
// Ye multiple elements return karta hai.
// Output NodeList hota hai (array jaisa).
// NodeList pe forEach chal jata hai.

const allParagraphs = document.querySelectorAll("p");
// yahan sab <p> elements select ho gaye.

allParagraphs.forEach((p, index) => {
    // p current paragraph element
    // index current position (0 se)
    console.log(`Paragraph ${index + 1}:`, p.textContent);
    // index + 1 isliye taake counting 1 se start lage
});


// ==================== Manipulating Content ====================

// Manipulating content ka matlab:
// element ke andar ka text ya HTML change karna.


// innerHTML
// innerHTML se tum HTML tags ke sath content set kar sakti ho.
// Ye powerful hai, lekin risky bhi ho sakta hai.
// Agar user input directly innerHTML me daal do to XSS attack ho sakta hai.

heading.innerHTML = "Hello <em>World</em>!";
// yahan heading ke andar content replace ho gaya.
// <em> tag apply hoga aur World italic ho jayega.


// textContent
// textContent sirf plain text set karta hai.
// Isme HTML tags text ban ke show honge.
// Ye zyada safe hota hai.

heading.textContent = "Hello World!";
// ab heading me simple text set ho gaya.
// koi HTML render nahi hoga.


// ==================== Adding/Removing Classes ====================

// classList ek helper object hai
// jo classes ko easy tarike se manage karta hai.
// add/remove/toggle use karke CSS classes change hoti hain.

heading.classList.add("title", "bold");
// add ka matlab heading me classes add kar do.
// yahan do classes add ho rahi hain: title aur bold.

heading.classList.remove("bold");
// remove ka matlab bold class hata do.

heading.classList.toggle("highlight");
// toggle ka matlab:
// agar highlight class nahi hai to add kar do.
// agar highlight class already hai to remove kar do.

console.log(heading.classList);
// console me current classes ka list print hoga.


// ==================== Event Listeners ====================

// Event listener ka matlab:
// kisi action pe code run karna.
// Example: click, input, submit, mouseover, keydown, etc.


// click event

const button = document.querySelector("#my-button");
// yahan #my-button ka matlab id="my-button" wala element.
// querySelector me # id ke liye use hota hai.

button.addEventListener("click", () => {
    // jab button pe click hoga
    // ye function run hoga.

    console.log("Button clicked!");
    // click ka log

    heading.textContent = "You clicked the button!";
    // click hone pe heading ka text change
});


// input event

const inputField = document.querySelector("#my-input");
// id="my-input" wala input element

inputField.addEventListener("input", (event) => {
    // input event tab fire hota hai
    // jab user type karta hai ya value change hoti hai.

    console.log("Input changed:", event.target.value);
    // event.target ka matlab jis element pe event laga.
// value ka matlab input ka current text.
});


// submit event

const form = document.querySelector("#my-form");
// id="my-form" wala form element

form.addEventListener("submit", (event) => {
    // submit tab hota hai jab form submit button click karein
    // ya enter press karein.

    event.preventDefault();
    // default behavior form ka ye hota hai:
// page reload ya navigation.
// preventDefault se reload stop hota hai.

    console.log("Form submitted:", inputField.value);
    // submit pe inputField ki current value print
});


// ==================== Event Delegation ====================

// Event delegation ka matlab:
// multiple children ke events handle karne ke liye
// parent pe ek listener lagao.
// phir check karo click kis child pe hua.

// Ye efficient hai.
// Kyunki 100 li items ke liye 100 listeners nahi lagte.

const list = document.querySelector("#my-list");
// id="my-list" wala UL/OL container

list.addEventListener("click", (event) => {
    // yahan event parent pe laga hai
    // lekin click child pe bhi ho sakta hai
    // isliye event.target se actual clicked element milta hai.

    if (event.target.tagName === "LI") {
        // tagName uppercase me aata hai.
        // agar clicked element LI hai to hi code chale.

        console.log("Clicked item:", event.target.textContent);
        // clicked item ka text print

        event.target.classList.toggle("selected");
        // clicked li pe selected class toggle
        // highlight on/off
    }
});


// ==================== Traversing DOM ====================

// Traversing ka matlab:
// element relationships use karke move karna.
// parent, children, siblings.

const firstItem = document.querySelector("#my-list li");
// #my-list ke andar first <li> select hoga.

console.log("Parent:", firstItem.parentNode);
// parentNode ka matlab: firstItem ka parent element.
// likely UL/OL hoga.

console.log("Children of list:", list.children);
// children ka matlab: list ke direct children.
// yahan list ke andar sare li elements collection me ayenge.

console.log("Next sibling:", firstItem.nextElementSibling);
// nextElementSibling ka matlab:
// firstItem ke baad wala next li element.

console.log("Previous sibling:", firstItem.previousElementSibling);
// previousElementSibling ka matlab:
// firstItem se pehle wala element.
// kyunki firstItem first hai, isliye null aayega.


// ==================== BOM (Browser Object Model) ====================

// BOM ka matlab:
// browser environment ke objects.
// DOM sirf HTML ke liye hai.
// BOM browser ki cheezon ke liye hai.
// Example: window size, URL, history, navigator details.

console.log("Window inner width:", window.innerWidth);
// innerWidth ka matlab browser viewport ki width.

console.log("Window location href:", window.location.href);
// location.href current page ka full URL.

console.log("User agent:", navigator.userAgent);
// navigator.userAgent browser + OS info deta hai.


// Alert / confirm / prompt

// alert("Hello World!");
// alert simple popup message show karta hai.
// user OK press karega tab close hoga.

// const userName = prompt("Enter your name:");
// prompt user se input leta hai.
// agar cancel kare to null milta hai.

// console.log("User name:", userName);

// const isConfirmed = confirm("Are you sure?");
// confirm true/false return karta hai.
// OK => true, Cancel => false.

// console.log("User confirmed?", isConfirmed);


// ==================== Notes ====================

// 1) getElementById
// fastest aur single element.
// id unique hona chahiye.

// 2) querySelector / querySelectorAll
// CSS selector based.
// querySelector = first match.
// querySelectorAll = all matches.

// 3) innerHTML vs textContent
// innerHTML = HTML render karega.
// textContent = safe plain text.

// 4) classList
// add/remove/toggle classes.

// 5) addEventListener
// click, input, submit etc handle.

// 6) event delegation
// parent pe listener, child detect.

// 7) traversal
// parentNode, children, siblings.

// 8) BOM
// window, navigator, location, history.

// 9) dialogs
// alert/prompt/confirm basic popups.
