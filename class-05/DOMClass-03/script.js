const h1 = document.createElement("h1");

console.log(h1);
h1.className = "heading";
// h1.id = "mainHeading";
h1.id = Math.floor(Math.random() * 10);
h1.setAttribute("title", "Heading");
h1.style.backgroundColor = "black";
h1.style.color = "white";
h1.style.padding = "10px";

h1.innerText = "Hello World!";
const addText = document.createTextNode("Hello World!");
h1.appendChild(addText);

document.body.appendChild(h1);