const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('PromiseOne Task...!');
        resolve();
    }, 1000);
});

promiseOne.then(() => console.log('PromiseOne Task Complete!'));


new Promise((resolve, reject) => {
    setTimeout(() => {
        if(false) {
           console.log('PromiseTwo Task...!');
           resolve();
        } else {
            console.log('PromiseTwo Task...!');
            reject();
        }
    }, 1000)
})
.then(() => console.log('promiseTwo Task Complete!'))
.catch(() => console.log('PromiseTwo Task Reject!'));


const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({
                username: 'Adil Hussain',
                email: 'adilhussain@gmail.com'
            });
        } else {
            reject({
                message: 'Somthing Went Wrong...!'
            });
        }
    }, 1000);
});

promiseThree.then((user) => {
    console.log(user.username, user.email);
}).catch((error) => {
    console.log(error.message);
});


const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({
                username: 'Adil Hussain',
                email: 'adilhussain@gmail.com'
            });
        } else {
            reject('Somthing Went Wrong...!');
        }
    }, 1000);
});

promiseFour
.then((resolve) => {
    console.log('Pending...');
    return resolve.username;
})
.then((resolve) => {
    console.log(resolve);
})
.catch((reject) => {
    console.log(reject);
})
.finally(() => {
    console.log('Finally...!');
});


const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({
                username: 'Adil',
                password: '12345678'
            });
        } else {
            reject('Somthing Went Wrong...!');
        }
    }, 1000); 
});

async function consumePromiseFive() {
    try {
        let response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();


async function getUser() {
    try {
        let response = await fetch('https://api.github.com/users/madilhussain');
        let data = await response.json();
        console.log(data.name);
    } catch (error) {
        console.log(error);
    }
}

getUser();


fetch('https://api.github.com/users/madilhussain')
.then((data) => {
    return data.json();
})
.then((data) => {
    console.log(data.name);
})
.catch((err) => {
    console.log(err);
})
.finally(() => {
    console.log('Finally..!');
});