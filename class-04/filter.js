const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

myNum.filter((num) => num <= 5); // ❌

// const result = myNum.filter((num) => num <= 5); // ✅
const result = myNum.filter((num) => { // ✅
    return num <= 5;
});

console.log(result);

/*
    * Filter Value Ko Return Krta Hai aur ForEach Value Ko Return Nahi Krta,
    * Filter Mai Hm Condition Lagate Hai aur Jo Condtion True Hoti Hai Wahi Value Return Krta Hai Filter,
      Jiko Hm Ek Variable Mai Rakh Kr Print Kr Sakte Hai.
*/

let newNum = [];

myNum.forEach((num) => {
    if (num <= 5) {
        newNum.push(num);
    }
});

console.log(newNum);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 }
];

let objFilter = books.filter((bk) => bk.edition > 2000); // ✅
objFilter = books.filter((bk) => { // ✅
    return bk.genre === 'Fiction' && bk.edition > 2004;
});

console.log(objFilter);