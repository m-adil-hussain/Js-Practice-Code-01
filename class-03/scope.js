/*
const num1 = 33;
const num2 = 44;
const num3 = 55;

console.table([num1, num2, num3]);

{} // Scope

var firstName = "Ali"; // ❌
/*
    GLOBAK SCOPE:
        Jo Bhi Code Jo {} K Bahir Likha Jaye Usy Global Scope Khete Hai.
    LOCAL SCOPE:
        Jo Bhi Code Jo {} K Andr Likha Jaye Usy Local Scope Khete Hai.
*/
/*
let lastName = "Abbasi";

if(true) {
    var firstName = "Muhammad"; // ❌
    firstName = "Muhammad"; // ❌ Ye Bhi Same "var" Ki Tarah Hai.
    let midName = "Adil"; // ✅
    const lastName = "Hussain"; // ✅

    console.log(`Inner: ${lastName}`); // Hussain
}

console.log(firstName); // ❌ 
console.log(midName); // ❌
console.log(lastName); // Abbasi

/*
    "WINDOWN" (GOOGLE CONSOLE) KA GLOBAL/LOCAL SCOPE ALG HAI,
    "NODE" KA BHI GLOBAL/LOCAL SCOPE ALG HAI. 
*/

function one() {
    const username = "Adil";

    function two() {
        const email = "adil@google.com";
        console.log(username);
    }

    // console.log(email); // Not Access email variable
    two();

    /*
        Child Function Apne Parent Function K Variable Ko Access Kr Sakte Hai,
        Parent Function Apne Child Function K Variable Ko Access Nahi Kr Sakte.
    */
}

//one();

if (true) {
    let username = "Adil";
    if (username === "Adil") {
        let email = " adil@google.com";
        console.log(username + email);
    }
    // console.log(email); ❌
}

// console.log(username); ❌

// addOne(5);
function addOne(num) { // Basic Function
    return num + 1;
}
addOne(5);

// addTwo(5); // Hoisting* ❌
const addTwo = function (num) { // Expression
    return num + 2;
}
addTwo(5);
