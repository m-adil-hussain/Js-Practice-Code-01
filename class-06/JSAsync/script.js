// ******************** SETTIMEOUT ******************** \\

setTimeout(() => {
    console.log("Hello World!");
}, 1000);

setTimeout(() => {
    document.querySelector('H1').innerHTML = 'Asynchronous JavaScript';
}, 2000);

const changeText = () => {
    document.querySelector('H1').innerHTML = 'Asynchronous JavaScript';
}

const stopChangeText = setTimeout(changeText, 5000);

const stopButton = document.querySelector('#stop');

stopButton.addEventListener('click', () => {
    clearTimeout(stopChangeText);
})

console.log("Hello World!");

// ******************** SETINTERVAL ******************** \\

let count = 1;

setInterval(() => {
    count++
    document.querySelector('H1').innerHTML = count;
}, 1000);

const countNumber = () => {
    count++;
    document.querySelector('H1').innerHTML = count;   
}

const stopCountNum = setInterval(countNumber, 5000);

const stopButton = document.querySelector('#stop');

stopButton.addEventListener('click', () => {
    clearInterval(stopCountNum);
    console.log('STOP!');
})