
let prom = new Promise((resolve, reject) => {
    let a;
    setTimeout(() => {
        a = 1 + 1;
        if (a == 2) {
            resolve('Success');
        } else {
            reject('Failed');
        }
    }, 4000);
})

//! then. catch the error

prom.then((message) => {
    console.log("I am from then " + message);
}).catch((message) => {
    console.log("I am from catch " + message)
})

console.log("I am after Promise!!")

//! Exaple : Image File 