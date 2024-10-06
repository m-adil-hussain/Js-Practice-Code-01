const title = document.getElementById("title");

title.innerHTML; // 'Document Object Model | Chai aur Code <b>JavaScript</b>'
title.innerText; // 'Document Object Model | Chai aur Code'
title.textContent; // 'Document Object Model | Chai aur Code JavaScript'


document.getElementById("title"); // <h1 id="title" class="heading">Document Object Model | Chai aur Code <b>JavaScript</b></h1>
document.getElementsByClassName("heading"); // Return HTMLCollection | Ismai Hm ForEach Loop Wagera Nahi Laga Sakte.
document.querySelector("li"); // <li>one</li>
document.querySelectorAll(".list-item"); // Retun NodeList | Ismai Hm ForEach Laga Sakte Hai Ye Arry Return Nahi Krta Laki Array Jesa Lagta Hai.

/*
    // NODELIST/HTMLCOLLECTION TO ARRAY
        * NodeList Ya HTMLCollection Ko Array Me Convert Krne K liye:
    Array.from(variable);
*/

const convertIntoArray = document.querySelectorAll(".list-item");
const myConvertArray = Array.from(convertIntoArray);