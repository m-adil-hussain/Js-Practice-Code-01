// ******************** CREATE ******************** \\

const addLanguage = (langName) => {
    const li = document.createElement("li");
    li.innerHTML = `${langName}`;
    document.querySelector("ol").appendChild(li);
}

// addLanguage("Urdu");
// addLanguage("Hindi");

const addOptiLang = (langName) => {
    const li = document.createElement("li");
    const textNode = document.createTextNode(langName);
    li.appendChild(textNode);
    document.querySelector("ol").appendChild(li);
}

addOptiLang("Urdu");
addOptiLang("Arbic");

// ******************** EDIT ******************** \\

const editLanguage = (langNum, langName) => {
    const editLangVal = document.querySelector(`li:nth-child(${langNum})`);
    const createElem = document.createElement("li");
    const textNode = document.createTextNode(langName);
    createElem.appendChild(textNode);
    editLangVal.replaceWith(createElem);
}

editLanguage(3, "Farsi")

const editLang2ndFun = (langNum, langName) => {
    const selctLangName = document.querySelector(`li:nth-child(${langNum})`);
    selctLangName.outerHTML = `<li>${langName}</li>`;
}

editLang2ndFun(1, "Turkish");

// ******************** REMOVE ******************** \\

const removeLang = (num) => {
    const removeElem = document.querySelector(`li:nth-child(${num})`);
    removeElem.remove();
}

removeLang(2);