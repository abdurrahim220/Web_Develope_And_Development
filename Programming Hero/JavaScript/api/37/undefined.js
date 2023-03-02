/*
8 ways to get undefinded
1.variable that is not initialized will give undefined
2.function with no return 
3.parameter that is not passed will be undefined
4.if return has nothing on the right side will return undefined
5.property that dosen't exits will give an undefined
6.accessing array elements outside of the index range will give an undefined return
7.deleting an element inside an array
8.set a value directly undefined

*/

let first;
// console.log(first)

// 2

function second(a, b) {
    const total = a + b;
}

const result = second();
console.log(result)
// 3

function third(a, b, c, d) {
    const total = a + b + c + d;
    console.log(a, b, c, d);
}

// third(2, 5);

// 4
function noNegative(a, b) {
    if (a < 0 || b < 0) return

    return a + b;
}
const total = noNegative(2,-4);
// console.log(total)

// 5

const fifth = {
    id:2,name:"Rahim",age:24
}

console.log(fifth.salary,fifth.id);

const sixth = [4,5,6,8,57,85,22,55];
//you should not do it.. insted use splice
delete sixth[1]
console.log(sixth[1],sixth[8])
// console.log(sixth)




const eight = undefined;

const ninth = null;

const data = 