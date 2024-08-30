// PRIMITIVE DATA TYPES

/*
    7 TYPES:
    String
    Number
    Boolean
    Null
    Undefined
    Symbol
    BigInt
*/

let name = "Adil Hussain"; // String
let age = 20; // Number
let male = true; // Boolean
let email = null; // Null
let fullName; // Undefined
let specialChar = Symbol("56423"); // Symbol
let ipAddress = 1119997772211n; // BigInt

console.table([name, age, male, email, fullName, specialChar, ipAddress]);
console.table([
    typeof name,
    typeof age,
    typeof male,
    typeof email,
    typeof fullName,
    typeof specialChar,
    typeof ipAddress
]);

// NON PRIMITIVE (Refrence) DATA TYPES

/*
    Array
    Objects
    Functions
*/


let array = [
    "Apple",
    "Banana",
    "Orange"
]; // Array

let object = {
    name: "Adil",
    email: "adil@gmail.com",
    phone: 923344556677
} // Object

let fun = function () {
    console.log("adil Hussain");
}();

console.table([array, object, fun]);
console.table([
    typeof array,
    typeof object,
    typeof fun
]);