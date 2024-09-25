// ******************** DO WHILE LOOP ******************** \\

let index = 0;
do {
    console.log(index);
    index++
} while (index < 10);


let arr = ["Apple", "Banana", "Mango"];
let arrNum = 0;

do {
    console.log(arr[arrNum]);
    arrNum++;
} while (arrNum < arr.length);


// ********** MAP ********** \\

const map = new Map();

map.set("PKR", "Pakistan");
map.set("IND", "India");
map.set("USA", "United States of America");

console.log(map);

/*
    * Unique Values Ko Accept Krta Hai.
    * Map K Sath Hm For "In Loop" Ka Istmal Nahi Kr Sakte.
*/

for (const [mapKey, mapVal] of map) { // Ye Bhi Loop Ko Likhne Ka Ek Tariqa Hai.
    console.log(mapKey);
}