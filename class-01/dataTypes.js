"use strict" // treat all JS code as never version

// alert(3 + 3); we are using nodejs, not browser

/* console.log(
    "
        adil    
    "
); */ // code readability shound be high

let name = "adil";
let age = 20;
let userLogedIn = true;
let state = null;

// PREMETIVE DATA TYPES:
/*
    Number => 2 to power 53
    BigInt
    String => ""
    Boolean => TRUE / FALSE
    Null => Standalone Value
    Undefined
    Symbol => Unique
*/

// NON PREMITIVE DATA TYPES:
/*
    Object

*/

console.table(
    [
        typeof age,
        typeof name,
        typeof userLogedIn,
        typeof state,
        typeof undefined,
        typeof {},
        typeof [],
        typeof 9007199254740991n,
        typeof Symbol()
    ]
);
