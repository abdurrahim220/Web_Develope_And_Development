
function* getFunction () {
    console.log("I am some code");

    yield 1;
    return ;
    console.log("I am some code");
    console.log("I am some code");
    console.log("I am some code");
    console.log("I am some code");
    yield "Rahim";
    yield 4;
    yield "Karim";
    yield "Hello World!";
}

let iter = getFunction();
console.log(iter.next().value)
console.log(iter.next().value)
console.log(iter.next().value)
console.log(iter.next().value)