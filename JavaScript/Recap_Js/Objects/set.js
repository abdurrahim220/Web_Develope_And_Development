// creating set

const letters = new Set();

// letters.add("a")
// letters.add("b")
// letters.add("c")

const a = "a";
const b = "b";
const c = "c";
letters.add(a)
letters.add(b)
letters.add(c)
console.log(letters)
console.log(letters.keys())
console.log(typeof letters)
console.log(letters.size)

// for each method

// list all entries

// letters.forEach = (value) =>    console.log(value);
letters.forEach(function(value){
    console.log(value);
})

// list of all elements 


for (const entry of letters){
    console.log(entry);
}

const myIterator = letters.entries();
for(const entry of myIterator){
    console.log(entry);
}