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
*/

console.log(parent.firstElementChild);
console.log(parent.lastElementChild);

const childElem = document.querySelector(".day");
console.log(childElem);
console.log(childElem.parentElement);
console.log(childElem.nextElementSibling);

console.log("Node:", parent.childNodes);

