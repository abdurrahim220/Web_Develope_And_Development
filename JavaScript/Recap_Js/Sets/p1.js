const letter = new Set(["a", "b", "c"])

console.log(typeof (letter))
console.log(letter.size)
console.log(letter)

// create empty set
const letter_emt = new Set()

// Adding value to empty set 

letter_emt.add("a")
letter_emt.add("b")
letter_emt.add("c")
letter_emt.add("d")
letter_emt.add("e")

console.log(letter_emt.size)
console.log(letter_emt)

// create a set and variables to the set

// creating set 
const letter_var = new Set();

// create variables 

const a = "a";
const b = "b";
const c = "c";

// adding variables to the set

letter_var.add(a)
letter_var.add(b)
letter_var.add(c)

console.log(letter_var)

// forEach method
let text = "";
letter_var.forEach(function (value) {
    console.log(value)
})

// letter_var.forEach = (value)=> console.log(value)

console.log(letter.values())

for (const x of letter_var.values()) {
    console.log(x);
}