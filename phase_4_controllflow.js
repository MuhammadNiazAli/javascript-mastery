// ================== IF ELSE ==================

// if-else statement ka use tab kiya jata hai jab aapko conditions check karni hoti hain
// Agar if ki condition true hoti hai to uska block execute hota hai
// Agar if ka block false hota hai, toh else if ya else ka block execute hota hai
// Agar sab conditions false ho, toh else block execute hota hai

// Example:
if (20 > 40) {
    // yahan condition 20 > 40 check ho rahi hai
    // 20 > 40 ? -> false
    console.log("20 is greater than 40");
}
else if (30 > 20) {
    // pehla if false tha
    // ab else if check ho raha hai
    // 30 > 20 ? -> true
    console.log("30 is greater than 20");
    // kyunki yeh true hai, isliye yeh block execute hoga
}
else {
    // agar upar dono false hote
    // toh else ka block execute hota
    console.log("none of the conditions is true");
}

// ================== SIMPLE IF ELSE ==================

// Simple if-else statement
// Agar condition true ho toh if block execute hoga
// Agar condition false ho toh else block execute hoga

if (20 > 40) {
    // 20 > 40 false hai
    console.log("20 is greater than 40");
}
else {
    // kyunki if condition false hai
    // directly else execute hoga
    console.log("none of the conditions is true");
}

// ================== MULTIPLE ELSE IF ==================

// Multiple else if statements ka use karte hain jab aapko multiple conditions check karni hoti hain
// Jaise hi koi ek condition true hoti hai, baaki conditions ko skip kar diya jata hai

if (50 > 30) {
    // pehli hi condition true ho gayi
    console.log("50 is greater than 30");
}
else if (20 > 10) {
    // yeh condition check nahi hogi
}
else if (40 > 30) {
    // yeh bhi skip hoga
}
else if (60 > 50) {
    // yeh bhi skip hoga
}
else {
    console.log("none of the conditions is true");
}

// Important baat:
// Jaise hi ek condition true hoti hai, baaki sab conditions skip ho jaati hain
// JavaScript baaki conditions ko check nahi karta

// ================== SWITCH CASE ==================

// Switch-case ka use tab hota hai jab aapko ek hi value ko multiple options se compare karna ho
// Jaise ki days of the week ko check karna

switch (4) {

    case 1:
        // agar value 1 hoti
        console.log("this is case 1");
        break; // yeh break switch ke andar se bahar nikalne ka kaam karta hai

    case 2:
        console.log("this is case 2");
        break;

    case 4:
        // yahan value match ho gayi
        console.log("this is case 4");
        break;

    default:
        // agar koi bhi case match na kare toh default execute hoga
        console.log("none of the cases is true");
}

// **Important**: 
// Agar aap break nahi lagate, toh neeche wale cases bhi execute ho jaate hain
// Switch-case ka structure simple hai jab aapko ek hi value ko multiple conditions se match karna ho

// ================== SWITCH WITH STRING ==================

// Switch-case ko strings ke saath bhi use kiya ja sakta hai
// Yahan hum din ke naam ko compare kar rahe hain

let day = "monday";

switch (day) {

    case "monday":
        // monday match hua
        console.log("today is monday");
        break;

    case "tuesday":
        console.log("today is tuesday");
        break;

    case "wednesday":
        console.log("today is wednesday");
        break;

    case "thursday":
        console.log("today is thursday");
        break;

    case "friday":
        console.log("today is friday");
        break;

    default:
        // agar koi match na kare
        console.log("today is weekend");
}

// Yahan switch statement day variable ki value ko check kar raha hai
// Aur jab value match karti hai, toh woh block execute hota hai

// ================== EARLY RETURN ==================

// Early return ka use tab kiya jata hai jab kisi condition pe directly function ko stop karna ho
// Jab aapko special ya wrong case aaye, toh aap directly function ko stop kar dete hain aur baaki code execute nahi hota

function checkAge(age) {

    if (age < 0) {
        // agar age negative hai, toh directly return karte hain
        console.log("age cannot be negative");
        return; // function yahin pe stop ho jaata hai
    }

    if (age < 13) {
        console.log("you are a child");
    }
    else if (age < 20) {
        console.log("you are a teenager");
    }
    else if (age < 60) {
        console.log("you are an adult");
    }
    else {
        console.log("you are a senior citizen");
    }
}

// Function calls
checkAge(-5);   // pehla if condition true ho gaya, function yahi stop ho gaya
checkAge(10);   // "you are a child"
checkAge(15);   // "you are a teenager"
checkAge(30);   // "you are an adult"
checkAge(70);   // "you are a senior citizen"

// Early return se code kaafi clean aur readable ho jaata hai
// Yeh unnecessary nesting ko avoid karta hai aur function ko jaldi terminate karne mein madad karta hai

// ================== NORMAL IF ELSE ==================

// Normal if-else statement ka example hai

let age = 22;

if (age >= 18) {
    console.log("you are eligible to vote");
}
else {
    console.log("you are not eligible to vote");
}

// ================== SAME CODE WITH EARLY RETURN ==================

// Yeh same logic early return ke saath

function checkVotingEligibility(age) {

    if (age < 18) {
        console.log("you are not eligible to vote");
        return; // yeh yahin function ko rok dega
    }

    console.log("you are eligible to vote");
}

checkVotingEligibility(16); // "you are not eligible to vote"
checkVotingEligibility(20); // "you are eligible to vote"

// ================== FINAL SUMMARY ==================

// if-else -> Decision making ke liye use hota hai jab aapko multiple conditions ko check karna ho
// switch-case -> Jab ek hi value ko multiple options se compare karna ho
// early return -> Jab aapko kisi condition pe function ko jaldi rokna ho
// Early return ka use code ko clean, readable aur maintainable banane ke liye kiya jata hai
