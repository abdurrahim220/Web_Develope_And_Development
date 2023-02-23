const y = x => x * x;
const z = y(5);

console.log(z);

// const myFunction => console.log("nayok");

// const division= (num1, num2) => console.log(num1 /num2)
const numbers=[10,20,30,40.50,60,70 ]

console.log(Math.max(...numbers));

const cars=['toyota', 'honda','mercedes']; 
const newCars= [...cars , 'ferrari'];

console.log(newCars)
