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