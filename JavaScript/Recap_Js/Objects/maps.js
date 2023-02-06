const fruits = new Map(
    [
        ["apple", 500],
        ["banana", 300],
        ["mango", 400],
    ]
)

console.log(fruits);
console.log(typeof fruits);

// create empty map
const desiFruits = new Map();

// set Map values:
desiFruits.set("jackfruit", 200);
desiFruits.set("guava", 100);
desiFruits.set("pineapple", 150);


console.log(desiFruits);

// i can change the existing map values

desiFruits.set("jackfruit", 250);
console.log(desiFruits);

// get method
console.log(fruits.get("apple"));
console.log(fruits.size);
// clear method
fruits.clear();
console.log(fruits);
var b = fruits.has("apple");
console.log(b);


desiFruits.forEach(function (value, key) {
    console.log(key + " = " + value);
})

// maps keys

for (const x of desiFruits.keys()) {
    console.log(x);
}

// maps values
total = 0
for (const x of desiFruits.values()){
    console.log(x);
    total += x;
    console.log(total);
}