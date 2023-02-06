for (const x of "W3Schools")
{
    console.log(x);
}
// over array

for (const x of [1,3,24,4,5]){
    console.log(x);
}

// home made Iterable
function myNumber(){
    let n = 0;
    return {
        next:function(){
            n += 10;
            return {value : n, done:false}
        }
    };
}

// create iterable
const n = myNumber();
console.log(n.next());
console.log(n.next());
console.log(n.next().value);
console.log(n.next().value);

// Symbol.iterator

// create empty object
const myNumber2 = {}

// make it iterable
myNumber2 [Symbol.iterator] = 
function() {
    let n =0;
    done = false;
    return {
        next(){
            n += 10;
            if(n == 100) {
                done:true
            }
            return {value : n,done:done};
        }
    };
}
// for (const num of myNumber2){
//     console.log(num);
// }

let iterator = myNumber3[Symbol.iterator]();

while(true){
    const result = iterator.next();
    if(result.done)break;
}
