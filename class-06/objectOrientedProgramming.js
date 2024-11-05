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

// ******************** PRACTICE ******************** \\

const name = 'Muhammad Adil Hussain     ';

String.prototype.trueLength = function () {
    console.log(`${this.trim().length}`);
}

name.trueLength();
'Ahmed Raza    '.trueLength();

// ******************** JAVASCRIPT CLASSES ******************** \\

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    securePassFun() {
        return `||@${this.password}//!`;
    }
}

const newUser = new User('adil', 'adil@gmail.com', 445566);
console.log(newUser.securePassFun());

class User2 {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`username is ${this.username}`);
    }
}

class Teacher extends User2 {
    constructor(username, email, password) {
        super(username);
        this.email = email;
        this.password = password;
    }

    course() {
        console.log(`new course added by ${this.username}`);
    }
}

const newTeacher = new Teacher('adil', 'adil@gmail.com', 123);
const newUser2 = new User2('hussain', 'hussain@gmail.com', 321);

console.log(newTeacher.course());
console.log(newUser2.logMe());

console.log(newTeacher === newUser2);
console.log(newTeacher instanceof User);

class user3 {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`username is ${this.username}`);
    }

    static createID() {
        return `123_`;
    }
}

const newUser3 = new user3('Adil');
console.log(newUser3.createID());

class Teacher2 extends user3 {
    constructor(username, email, password) {
        super(username);
        this.email = email;
        this.password = password;
    }
}

const newTeacher2 = new Teacher2('adil', 'adil@google.com', 123);
console.log(newTeacher2.createID());
