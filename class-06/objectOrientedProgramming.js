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