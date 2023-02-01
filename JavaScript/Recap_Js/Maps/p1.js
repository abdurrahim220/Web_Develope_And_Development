// creating a Map

const fruits = new Map(
    [
        ["apples",500],
        ["banana",300],
        ["orange",200],
    ]
)

console.log(fruits)
console.log(fruits.size)
console.log(typeof (fruits))

// set method

const fruits2 = new Map()

// set map values

fruits2.set("mango",600)
fruits2.set("guava",60)
fruits2.set("jackfruit",70)
fruits2.set("pineapple",580)
fruits2.set("pineapple",80) //set method can be change existing map values

// get_item = fruits2.clear("mango")
console.log(fruits2.get("mango"))
console.log(fruits2)
console.log(fruits2.size)

fruits2.delete("pineapple")
console.log(fruits2)

console.log(fruits.has("mango"))
console.log(fruits2.has("mango"))

for (const x of fruits2.entries())
{
    console.log(x)
}