/*
function myName() {
    console.log("Muhammad");
    console.log("Adil");
    console.log("Hussain");
}

myName; // Refrence
myName(); // Execution

function addTwoNum(num1, num2) { // Function Perameters
    console.log(num1 + num2);
}

addTwoNum(5, 5); // Function Execution & Arguments
// const result = addTwoNum(3, 4); ❌

function addTwoNum(num1, num2) {
    let result = num1 + num2;
    return result; // Direct bhi Return Kr Sakte Hai Num1 Aur Num2 Ko
    console.log("Hello World!"); // Return K Bad Koi Bhi Code Execute Nahi Hota Hai
}

const numResult = addTwoNum(5, 5);
console.log("Result:", numResult);

function loginUserMessage(username = "Ahmed") { // Default Value

    /* 
        if (username === undefined) {
            console.log("Please Enter a Username");
            return;
        }
    */ /*

    if (!username) { // Ye True Ko False Me Convert Krta Hai Aur False Ko True Mai
        console.log("Please Enter a Username");
        return;
    }

    return `${username} Just Logged In`;

}

// loginUserMessage("Adil Hussain"); ❌
const result = loginUserMessage("Adil Hussain"); // ✅
const result = loginUserMessage(); // Undefined
console.log(result); */

// ******************** REST AND SPREAD OPERATORS ******************** \\
/* 
    *   Jb "Rest" Operator Function K Perameters K Sath Use Hota Hai Tu Usy Rest* Operator Khete Hai.
    *   Jb "Spread" Operator Object/Array K Sath Use Hota Hai Tu Usy Spread* Operator Khete Hai.
*/

function calculateCartPrice(val1, val2, ...cart) { // Rest Operator "..."
    return val1, valcart;
}

console.log(calculateCartPrice(100, 200, 300, 400, 500, 600));
// Function Mai Multiple Values Pass Krne K Liye Rest Operator Ka Use Krte Hai, Aur Ye Array [] Return Krta Hai
