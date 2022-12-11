//! set

let mySet = new Set([1,2,3,4,4,2,2]);

//? Adding extra values
mySet.add("Hello World!");
mySet.add(2);
mySet.delete(4); //! delete

console.log(mySet.has(4)); //!has() checking index value


//! size

console.log(mySet.size);


//! Iterating sets 

// for ( x of mySet.entries()) 
// for ( x of mySet.values()) 
// for ( x of mySet.keys()) 
// {
//     console.log(x);
// }



///!! Entries 

/*
let iter = mySet.entries();
console.log(iter.next())
console.log(iter.next())
console.log(iter.next()) */

for (let [x] of mySet.entries()) {
    console.log(x);
}

let iter = [...mySet.entries()];

let iter2 = [...mySet.values()];
console.log(iter)
mySet.forEach(values => console.log(values))
