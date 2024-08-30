/* *********************** MEMORY *********************** */

// STACK (Primitive) & HEAP (Non Primitive)
/*
    Stack:
        Agr Memory Stack K Andr Define Hoti Hai Tu Uska Copy Return Krti Hai,
        Agr Hm Koi Value Change Kary Ge Tu Orignal Variable/Array Me Koi Changes Nahi Aye Ga.
    Heap:
        Agr Memory Heap K Andr Define Hoti Hai Tu Uska Refrence Return Krti Hai,
        Agr Hm Koi Value Change Kary Ge Tu Orignal Variable/Array Me Bhi Changes Aye Gy.
*/

// STACK EXAMPLE:

let name = "Adil Hussain";
let fullName = name;
fullName = "Muhammad Adil Hussain";

console.log(fullName);
console.log(name);


// HEAP EXAMPLE:

let objOne = {
    name: "Adil Hussain",
    email: "adil@gmail.com"
};
let objTwo = objOne;
objTwo.name = "Muhammad Adil Hussain";

console.log(objOne);
console.log(objTwo);
