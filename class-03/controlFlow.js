// ******************** IF ******************** \\

const isUserLoggedIn = true;

if (2 == "2") {
    console.log("Execute!");
} else {
    console.log("Not Execute!");
}

// <, >, <=, >=, ==, !=, ===

const score = 200;

if (score > 100) {
    const power = "Fly";
    // var power = "Fly"; ❌ GLOBAL SCOP
    console.log(`User Power: ${power}`);
}
/* 
    Scope:
        console.log(`User Power: ${power}`); ❌
*/

const balance = 1000;

if (balance > 500) console.log("Test!"); // Implisit Scope

if (balance < 500) {
    console.log("True!");
} else if (balance < 700) {
    console.log("True!");
} else {
    console.log("False!");
}

const isLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true

if (isLoggedIn && debitCard && true == false) { // Ek Bhi Statment False Hui Tu Answer False Aye Ga
    console.log("Allow to By Course!");
}

if (loggedInFromEmail || loggedInFromGoogle) { // Ek Bhi Statment Agr True Hui TU Answer True Aye Ga
    console.log("True!");
}

const month = 3;

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    default:
        console.log("April");
        break;
}


const userEmail = "adil@gmail.com"; // True
const userEmail = ""; // False
const userEmail = []; // True

if (userEmail) {
    console.log("True!");
} else {
    console.log("False!");
}

// ******************** FALSY ******************** \\
/*
    false
    0
    -0
    BigInt 0n
    ""
    null
    undefined
    NaN
*/
// ******************** TRUTHY ******************** \\
/*
    "0"
    "false"
    " "
    []
    {}
    function() {}
*/

const emptyArr = [];

if (emptyArr.length === 0) {
    console.log("True!");
}

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
    console.log("True!");
}

// ******************** NULLISH COALESCING OPERATOR (??) ******************** \\

/*
    * Ye "Null" Aur "Undefined" Operator Pr Kam Krta Hai.
    * "Null" Aur "Undefined" Sai Bachne K Liye Hm "Nullish" Operator Ka Use Krte Hai.
*/

let val1;
val1 = 5 ?? 10; // 5
val1 = null ?? 10; // 10
val1 = null ?? undefined ?? 20; // 20
console.log(val1);

// ******************** TERNARY OPERATOR ******************** \\

condition ? true : false;

const teaPrice = 120;

teaPrice <= 150 ? "True!" : "False!";