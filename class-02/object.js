// ********** SINGLETON ********** \\
// Object.create

// ********** OBJECT LITERALS ********** \\

/*

const mySym = Symbol("KEY1");

const obj = {
    name: "Adil Hussain",
    "full name": "Muhammad Adil Hussain",
    // mysym: "myKey1", ❌
    [mySym]: "myKey1",
    age: 20,
    location: "Karachi",
    email: "adil@gmail.com",
    isLoggedIn: false,
    lasrLoginDays: ["Sunday", "Monday"]
};

console.log(obj.email); // ✅
// console.log(obj[email]); ❌
console.log(obj["email"]); // ✅

// console.log(obj.full name); ❌
console.log(obj["full name"]); // ✅

// console.log(typeof obj.mySym); ❌
console.log(typeof obj[mySym]); // ✅

obj.email = "adilhussain@gmail.com"; // Change Object Value
// Object.freeze(obj); // Object Frezz Jis Se Koi Value Change Nahi Kr Sakte
obj.email = "adil@gmail.com"; // Not Change
console.log(obj);

obj.greeting = function () {
    console.log("Hello World!");
};
console.log(obj.greeting); // ❌ Ye Function Ka Refrence Deta Hai
console.log(obj.greeting()); // ✅ Ye Function Return Krta Hai

obj.greeting2 = function () {
    console.log(`Hello, ${this.name}`); // Same Object Ko Refrence Krne K liye THIS Ka Istmal Krte Hai
};
console.log(obj.greeting2());

*/


// ********** SINGLETON & NON SINGLETON OBJECTS ********** \\
const singletonObj = new Object();
const nonSingletonObj = {};

/* const xyzApp = {};
xyzApp.id = "56423";
xyzApp.name = "Adil";
xyzApp.isLoggedIn = true; */

// console.log(xyzApp.id);
// console.log(xyzApp);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Adil",
            lastname: "Hussain"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);
console.log(regularUser.myname?.userfullname.firstname); // "?" Iska Mtlb Ye Hai K Agr Value Access Krti Hai Tu Value Return Karo Wrna Nahi

const objOne = { 1: "A", 2: "B" };
const objTwo = { 3: "C", 4: "D" };

// const objThree = {objOne, objTwo}; ❌
const objThree = {...objOne, ...objTwo}; // ✅
console.log(objThree);
