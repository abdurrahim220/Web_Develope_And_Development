//!1 Iterator

let iterable = "Hello";
iterable = [1,2,3,4,5,5]
let iter = iterable[Symbol.iterator]();
/*
console.log(iter);
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

*/


let names = ["Rahim","Karim","Rony","Rahat"]

//! Custom iterator

custom_Iterator = (arr) => { //Arrow Function
    let i = 0;
    return {
        next: function () {
            return i < arr.length ? { value : arr[i++], done:false} :
            { done : true };
        }
    };
}

let members = custom_Iterator(names);

console.log(members.next().value);
console.log(members.next().value);
console.log(members.next().value);
console.log(members.next().value);