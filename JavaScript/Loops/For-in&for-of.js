//for-in string/array /objects
//for-of string / array

let name = "I am learning JavaScript!";
let food = ["cake","Chocolate","Ice Cream"];

let person = {
    name:"Md Abdur Rahim",
    profession:"Student",
    Country:"Bangladesh",
    age : 33,
}

//we will get index number if we use in
// for(var x in name)
// {
//     console.log(`index ${x} and item ${name[x]}`)
// }

// for(var y in food)
// {
//     console.log(`Index: ${y} and items ${food[y]}`);
// }

for(var x in person) //object dosen't have index
{
    console.log(`Property : ${x}
    value: ${person[x]}`); // it access properies
}

console.log("Out of the Loops!!!");


/////////////////////////////////

// we will get item/vale if we use for
// for (var x of name)
// {
//     console.log(x);
// }

// for (var z of food)
// {
//     console.log(z);
// } 

//we can't access object though of 
// for (var y of person )
// {
//     console.log(y)// 
// }