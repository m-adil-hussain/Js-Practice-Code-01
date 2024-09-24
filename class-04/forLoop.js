// ******************** FOR LOOP ******************** \\

for (let index = 0; index <= 10; index++) {
    const element = index;
    if (element == 5) {
        console.log("True!");
    }
    console.log(element);
}

for (let index = 0; index <= 10; index++) {
    console.log(`Outer Loop Value ${index}`);
    for (let i = 0; i <= 10; i++) {
        console.log(`Inner Loop Value ${i} & Outer Loop Value ${index}`);
        console.log(`${index} * ${i} = ${index*i}`);
    }
}

const arr = ["Apple", "Banana", "Mango"];

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element);
}

// ***** BREAK AND CONTINUE ***** \\

for (let index = 0; index < 20; index++) {
    const element = index;
    if (index == 5) {
        console.log(`Detected: ${index}`);
        break;
    }
    console.log(element);
}

for (let index = 0; index < 20; index++) {
    const element = index;
    if (index == 5) {
        console.log(`Detected: ${index}`);
        continue;
    }
    console.log(element);
}