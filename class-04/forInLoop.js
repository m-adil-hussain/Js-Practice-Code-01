// ******************** FOR IN LOOP ******************** \\

const obj = {
    name: "Adil",
    fatherName: "Ghulam Hussain",
    course: "Web Development",
    fess: "5000 PKR"
}

/*
    * "For Of" Loop Ko Hm Object Me Use Nahi Kr Sakte,
      Object Mai Use Krne K Liye Hamy "For In" Loop Ki Zarurat Hai.
*/

for (const key in obj) {
    console.log(obj[key]);
}