const arr = [1, 2, 3, 4, 5];
const frtArr = ["Banana", "Apple", "Mango"];
const newArr = new Array(5, 4, 3, 2, 1);

/* console.log(arr[1]);
console.log(arr);

// ******************** ARRAY METHODS ******************** \\

arr.push(6); // Value Add Last
arr.pop(); // Last Value Remove
arr.unshift(0); // Value Add Start
arr.shift(); // Fiest Value Remove

console.log(arr.includes(9)); // True/False
console.log(arr.indexOf(3)); // Array K Value Ki Index Deta Hai

console.log(arr);

const joinArr = frtArr.join();
console.log(joinArr);
console.log(typeof joinArr);

const arrSlice = arr.slice(0, 3); // 3 Include Nahi Hoga
console.log(arrSlice);

const arrSplice = arr.splice(1, 4); // Ye Array Ki Sari Value Return Krta Hai Jo Method Me define Ki Gayi Ho
console.log(arrSplice);

console.log(arr); // Old Array Mai Jo Yalue Reh Jati Hai Wo Return Krta Hai */

// arr.push(frtArr);
// console.log(arr); // ❌

// const concatArr = arr.concat(frtArr);
// console.log(concatArr); // ✅

// const sprdOprt = [...arr, ...frtArr];
// console.log(sprdOprt); // ✅

const arrInArr = [1, 2, 3, 4, [0, 1, 2, [3, 4, 5, 6], 7, 8, 9], 5, 6, 7];
const flatArr = arrInArr.flat(Infinity);
console.log(flatArr);


console.log(Array.isArray("Adil hussain")); // Question is Array??
console.log(Array.from("Adil hussain")); // Convert Array

const score1 = 100;
const score2 = 200;
const score3 = 300;

console.log(Array.of(score1, score2, score3));
