// ******************** IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE) ******************** \\

/*
    *   Immediately Invoke Function Ko Execute Krne K Liye Hm Iife Ka Use Krte Hai.
    *   Global Scope K Polution Se Kahi Bar Problem Hoti Hai,
        tu us Global Scope K Variable Hai,
        Unke Polution Ko Hatane K Liye Hm Iife Ka Use Krte Hai.
*/

(function invoke () { // Named IIFE
    console.log("Hello World!");
}()); // ✅ Is Function Ko End Krna Lazmi Hai > ";"*


( () => {
    console.log("Hello World!");
} )(); // ✅


( (name) => {
    console.log(`Hello! ${name}`);
} )("Adil Hussain"); // ✅

