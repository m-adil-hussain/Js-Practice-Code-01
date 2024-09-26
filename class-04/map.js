const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.map((num) => num + 5);

const newNums = myNums.map((num) => {
    return num + 5;
});

const newNums = myNums
.map((num) => num * 10)
.map((num) => num + 10)
.filter((num) => num <= 50);

console.log(newNums);

/*
    * Map Orignal Array Mai Bina Koi Changes Kiye Ek Naya Array Return Krta Hai.
*/