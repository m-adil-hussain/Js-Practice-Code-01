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

