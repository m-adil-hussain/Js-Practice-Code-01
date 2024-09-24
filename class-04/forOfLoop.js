// ******************** FOR OF LOOP LOOP ******************** \\

let arr = [1, 2, 3, 4, 5, 6];
for (const val of arr) {
    console.log(val);
}

let str = "Hello World!";
for (const val of str) {
    if (val == " ") continue;
    console.log(val);
}