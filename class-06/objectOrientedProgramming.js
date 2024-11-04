// ******************** NEW & THIS KEYWORD ******************** \\
const user = {
    username: 'Adil Hussain',
    email: 'adil@google.com',
    password: '876543210',
    getUserID: function() {
        console.log(`${this.username} (56423)`);
    }
}

console.log(user.username);
console.log(user.getUserID());

const userOne = function(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
    return this;
}

const user1 = new userOne('Adil Hussain', 'adil@gmail.com', '223344');
const user2 = new userOne('Ahmed Raza', 'ahmed@gmail.com', '556677');
console.log(user1);
console.log(user2);

const multiplyByFive = function (num) {
    return num * 5;
}

console.log(multiplyByFive(5));
console.log(multiplyByFive.power = 2);
console.log(multiplyByFive.prototype);

// ******************** PROTOTYPE ******************** \\

const createUser = function (username, score) {
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function () {
    this.score++;
}

createUser.prototype.printMe = function () {
    console.log(`${this.username} your Score is: ${this.score}`);
}

const user3 = new createUser('Adil', 25);
user3.increment();
user3.printMe();

const myHeros = ['SpiderMan', 'SuperMan', 'BatMan'];
const heroPowers = {
    spiderman: 'Spider Power',
    superman: 'Super Power',
    batman: 'Bat Power'
}

Object.prototype.myObjFun = function () {
    console.log('myObjectFunction is Present in All Objects...!');
}

Array.prototype.myArrFun = function () {
    console.log('myArrayFunction is Present in All Array...!');
}

myHeros.myObjFun();
heroPowers.myObjFun();
myHeros.myArrFun();
// heroPowers.myArrFun(); ❌

// ******************** INHERITANCE ******************** \\

const user4 = {
    name: 'Adil Hussain',
    email: 'adil@github.com'
}

const teacher = {
    subject: 'English',
    class: '12th'
}

const teachingSupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: teacher
}

teacher.__proto__ = user4;
// modern syntax
teacher.setPrototypeOf(user4, teacher);