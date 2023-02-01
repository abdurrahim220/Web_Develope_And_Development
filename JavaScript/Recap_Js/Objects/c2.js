const myObj2 = {
    name: "John",
    age: 30,
    cars: [
        {
            name: "Ford", models: ["Fiesta", "Focus", "Mustang"]
        },
        {
            name: "BMW", models: ["320", "X3", "X5"]
        },
        {
            name: "Fiat", models: ["500", "Panda"]
        }
    ]
}

for (let i in myObj2.cars) {
    console.log("\n"+myObj2.cars[i].name);
    for (let j in myObj2.cars[i].models) {
        console.log(myObj2.cars[i].models[j])
    }
}