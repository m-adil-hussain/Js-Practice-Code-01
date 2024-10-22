/*
    YE APPROACH GALAT HAI... ❌
    document.getElementById('img2').onclick = function () {
        alert('Hello World!');
    }
*/


// BEST APPROACH JS EVENTS... ✅ \\
document.getElementById('img2').addEventListener('click', () => {
    alert('hello world!');
});

document.getElementById('img2').addEventListener('click', (e) => {
    console.log(e);
}, false);

/*
    TYPE,
    TIME-STAMP,
    DEFAULT-PREVENTED,
    TARGET,
    TO-ELEMENT,
    SRC-ELEMENT,
    CURRENT-TARGET,
    CLIENT-X,
    CLIENT-Y,
    SCREEN-X,
    SCREEN-Y,
    ALT-KEY
    CTRL-KEY,
    SHIFT-KEY,
    KEY-CODE,

*/


// ******************** EVENT PROPAGATION ******************** \\

document.querySelector('ul').addEventListener('click', (e) => {
    console.log('Click Inside the UL!');  
}, false); // True

document.getElementById('img2').addEventListener('click', (e) => {
    console.log('Click 2nd Img!');
    e.stopPropagation(); // Is Sai Event Bubble Ho Kr Upr Tk Nahi Jaye Ga.
}, false); // 

/*
    * Inside Sai Out Side Jb Click Hota Hai tu Event Propagation Hota hai,
    Aur Usy Hm Event Bubbling Khete Hai,
    Q K Jb Click Hota Hai Tu Img Sai Li Pr Jata Hai Aur Li Se UL Pr Is Tarah Bubbling Hoti hai. 
    * Agr Hm False Ki Jagha True Likh de Tu Event Capturing Hota Hai,
    Phir UL Se Li Aur Li Sai Img Pr ata Hai Top Se Buttom.
*/


document.querySelector('ul').addEventListener('click', (e) => {
    console.log(e.target.tagName);
    if (e.target.tagName === 'IMG') {
        let removeElem = e.target.parentNode;
        removeElem.remove();   
    }
    // removeElem.parentNode.removeChild(removeElem);
});

const images = document.querySelectorAll('img');

images.forEach((imgs) => {
    imgs.addEventListener('click', (e) => {
        let removeElem = e.target.parentNode;
        removeElem.remove();
        // removeElem.parentNode.removeChild(removeElem);
    });
});
