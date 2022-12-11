let fruit = ["Apple","Grape","Orange"]

//?Normal Destruction

let fruit1 = fruit[0]
let fruit2 = fruit[1]

//!Array Destruction 
let [fruit3, fruit4,fruit5] =fruit;
let [fruit6, ,fruit7] =fruit; //skip
console.log(fruit1,fruit2,fruit5);
console.log(fruit6,fruit7);