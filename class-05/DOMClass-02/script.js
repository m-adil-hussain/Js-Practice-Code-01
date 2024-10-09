const parent = document.querySelector(".parent");
/*
console.log(parent);
console.log(parent.children); // HTML Collection
console.log(parent.children[4]);

// HTML Collection Value Loop:
for (let i = 0; i < parent.children.length; i++) {
    const element = parent.children[i];
    console.log(element);
}

console.log(parent.firstElementChild); // First Element Child Return Krta Hai.
console.log(parent.lastElementChild); // Last Element Child Return Krta Hai.
*/
const childElem = document.querySelector(".day");
// console.log(childElem); // Return 👉 div.day
// console.log(childElem.parentElement); // Return 👉 div.parent
// console.log(childElem.nextElementSibling); // Return 👉 div.day

console.log("Node:", parent.childNodes); // Return 👉 NodeList(15)
// ISMY LINE BREAK AUR SPACE BHI INCLUDE HAI \\