// ********** SINGLETON ********** \\
// Object.create

// ********** OBJECT LITERALS ********** \\

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
Object.freeze(obj); // Object Frezz Jis Se Koi Value Change Nahi Kr Sakte
obj.email = "adil@gmail.com"; // Not Change
console.log(obj);

obj.greeting = function () {
    console.log("Hello World!");
};
// console.log(obj.greeting); // ❌ Ye Function Ka Refrence Deta Hai
console.log(obj.greeting()); // ✅ Ye Function Return Krta Hai

obj.greeting2 = function () {
    console.log(`Hello, ${this.name}`); // Same Object Ko Refrence Krne K liye THIS Ka Istmal Krte Hai
};
console.log(obj.greeting2());



// ********** SINGLETON & NON SINGLETON OBJECTS ********** \\
const singletonObj = new Object();
const nonSingletonObj = {};

const xyzApp = {};
xyzApp.id = "56423";
xyzApp.name = "Adil";
xyzApp.isLoggedIn = true;

console.log(xyzApp.id);
console.log(xyzApp);

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

const objThree = {objOne, objTwo}; ❌
const objThree = Object.assign({}, objOne, objTwo); // Empty Object {} Optional! ✅
const objThree = {...objOne, ...objTwo}; // ✅
console.log(objThree);

const users = [
    {
        id: 1,
        email: "adil@gmail.com"
    },
    {
        id: 2,
        email: "hussain@gmail.com"
    },
    {
        id: 3,
        email: "hamza@gmail.com"
    },
    {
        id: 4,
        email: "ameer@gmail.com"
    }
];

console.log(users[2].email);

console.log(Object.keys(xyzApp)); // Ye Sari Keys Ko Ek Array Me Dal Kr Return Krta Hai [] 👍
console.log(Object.values(xyzApp)); // Ye Sari Values Ko Ek Array Me Dal Kr Return Krta Hai [] 👍
console.log(xyzApp.hasOwnProperty("isLoggedIn")); // Check Value

const course = {
    course: "Web Development",
    price: 3500,
    courseInstructor: "Adil"
};

course.courseInstructor; // Best But It is Best 👇
const {courseInstructor} = course; // ✅
const {courseInstructor: instructor} = course; // ✅
console.log(courseInstructor);
console.log(instructor);

