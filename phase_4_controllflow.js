// ================== IF ELSE ==================

// if ka matlab hota hai condition check karo
// agar condition true hui to if ka block chalega
// warna next else if check hoga
// agar sab false hue to else chalega

if (20 > 40) {
    // yahan condition check ho rahi hai
    // 20 > 40 ?  -> false
    console.log("20 is greater than 40");
}
else if (30 > 20) {
    // pehla if false tha
    // ab else if check ho raha hai
    // 30 > 20 ? -> true
    console.log("30 is greater than 20");
    // kyunki yeh true hai
    // isliye ye block execute hua
}
else {
    // agar upar dono false hotay
    // to yahan aata
    console.log("none of the condition is true");
}


// ================== SIMPLE IF ELSE ==================

if (20 > 40) {
    // 20 > 40 false hai
    console.log("20 is greater than 40");
}
else {
    // kyunki if wali condition false hai
    // direct else chalega
    console.log("none of the condition is true");
}


// ================== MULTIPLE ELSE IF ==================

if (50 > 30) {
    // yahan pehli hi condition true ho gayi
    console.log("50 is greater than 30");
}
else if (20 > 10) {
    // ye check hi nahi hoga
}
else if (40 > 30) {
    // ye bhi skip
}
else if (60 > 50) {
    // ye bhi skip
}
else {
    console.log("none of the condition is true");
}

// important baat
// jaise hi ek condition true hoti hai
// baqi sab skip ho jaate hain
// JS niche check hi nahi karta


// ================== SWITCH CASE ==================

// switch ka use tab hota hai
// jab ek hi value ko multiple options se compare karna ho

switch (4) {

    case 1:
        // agar value 1 hoti
        console.log("this is case 1");
        break; // switch se bahar nikal jao

    case 2:
        console.log("this is case 2");
        break;

    case 4:
        // yahan value match ho gayi
        console.log("this is case 4");
        break;

    default:
        // agar koi bhi match na kare
        console.log("none of the case is true");
}

// break bohat zaroori hota hai
// break nahi lagaya
// to neeche wale cases bhi run ho jaate hain


// ================== SWITCH WITH STRING ==================

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

// yahan switch day ki value check kar raha hai
// jis case se match hua
// wahi block chala


// simple words
// if else -> jab logic conditions hoti hain
// switch -> jab ek value ko multiple options se match karna ho


// ================== EARLY RETURN ==================

// early return ka matlab
// agar koi special ya wrong case aaye
// to function wahi stop kar do
// neeche ka code execute hi na ho

function checkAge(age) {

    if (age < 0) {
        // age negative hai
        console.log("age can not be negative");
        return;
        // yahin function ruk gaya
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

// function calls
checkAge(-5);   // pehla if chalega
checkAge(10);   // child
checkAge(15);   // teenager
checkAge(30);   // adult
checkAge(70);   // senior citizen


// early return ka faida
// unnecessary nesting nahi hoti
// code clean aur readable hota hai


// ================== NORMAL IF ELSE ==================

let age = 22;

if (age >= 18) {
    console.log("you are eligible to vote");
}
else {
    console.log("you are not eligible to vote");
}


// ================== SAME CODE WITH EARLY RETURN ==================

function checkVotingEligibility(age) {

    if (age < 18) {
        console.log("you are not eligible to vote");
        return;
        // yahan function khatam
    }

    // agar upar wala if false hua
    // tab ye chalega
    console.log("you are eligible to vote");
}

checkVotingEligibility(16); // not eligible
checkVotingEligibility(20); // eligible


// ================== FINAL SUMMARY ==================

// if else -> decision making ke liye
// switch -> ek value ko multiple options se match karne ke liye
// early return -> function ko jaldi stop karne ke liye
// early return se code zyada clean aur maintainable hota hai
