const coding = ["JavaScript", "Python", "PHP", "C++", "C#"];

coding.forEach(function (val) {
    console.log(val);
});

coding.forEach((val) => {
    console.log(val);
});

function printMe(val) {
    console.log(val);
}

coding.forEach(printMe); // Function Ka Refrence Dena Hai Execute❌ Nahi Krna.

coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
});

const arrObj = [
    {
        name: "Adil Hussain",
        fatherName: "Ghulam Hussain"
    },
    {
        name: "Muhammad Ahmed",
        fatherName: "Iqbal"
    },
    {
        name: "Muhammad Awais",
        fatherName: "Hanif"
    }
]

arrObj.forEach((val) => {
    console.log(val.name, val.fatherName);
});

const result = coding.forEach((item) => {
    console.log(item);
    return item;
});

console.log(result); // Undefined

/*
    * ForEach Loop Koi Bhi Value Return Nahi Krta.
*/