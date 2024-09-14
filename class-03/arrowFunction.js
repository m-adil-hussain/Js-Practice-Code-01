const user = {
    username: "Muhammad Adil Hussain",
    email: "adil@gmail.com",
    welcomeMessage: function () {
        console.log(`${this.username}, Welcome To Website`);
        console.log(this); // Current Context (OBJECT)
    }
}

user.welcomeMessage; // ❌
user.welcomeMessage();
user.username = "Ahmed Raza";
user.welcomeMessage(); // Ahmed Raza

console.log(this); // Node Environment: > {}
console.log(this); // Browser Object: > {Window Object}

function abc() {
    let username = "adil";
    console.log(this.username); // ❌ Function K Andr Hm This Ko Use Nahi Kr Sakte.
    console.log(this); // Global Object
}
abc();

const arrowFun = () => {
    let username = "Adil";
    console.log(this); // Arrow Function K Andr This Ka Jb Use Krte Hai Tu Empty Object {} Return Krta Hai.
}
arrowFun(); // {}

const addTwoNum = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwoNum(5, 5));

/*
    Implicit: 
        mai man leta hu k ye value return krni hai, apko "return likhne ki zarurat nahi"*.
*/

const addTwoNum = (num1 + num2) => num1 + num2; // Implicit Return Function
const addTwoNum = (num1 + num2) => (num1 + num2); // Implicit Return Function

const addTwoNum = () => ({username: "Adil"}); // Agr Object Ko Return Krna Ho Tu Parentheses* () K Andr Likna Zaruri Hai.
console.log(addTwoNum());