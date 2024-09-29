const newArr = [1, 2, 3, 4, 5];

const arrTotal = newArr.reduce((acc, curVal) => { // ✅
    console.log(`acc: ${acc} and curVal: ${curVal}`);
    return acc + curVal;
}, 0);

// const arrTotal = newArr.reduce((acc, curVal) => (acc + curVal), 0); // ✅

console.log(arrTotal);

/*
    Reduce Ko Start Value Required Hai Jis Se Wo Array Ki Sari Value Ko Sum Kr K Return Kr Sake.
    RESULT:

        acc: 0 and curVal: 1
        acc: 1 and curVal: 2
        acc: 3 and curVal: 3
        acc: 6 and curVal: 4
        acc: 10 and curVal: 5

    Total = "15"
*/

const shoppingCart = [
    {
        course: "Digital Markiting",
        teacher: "Sir, Junaid",
        price: 2999
    },
    {
        course: "Web Development",
        teacher: "Sir, Abdul Wahab",
        price: 4999
    },
    {
        course: "App Development",
        teacher: "Sir, Tufail",
        price: 3999
    }
];

const cartPriceTotal = shoppingCart.reduce((acc, item) => (acc + item.price), 0);

console.log(cartPriceTotal);
