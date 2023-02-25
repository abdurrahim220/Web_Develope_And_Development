// var let const 
// break up with var
const number = [12, 456, 45, 98];
let salary = 450;
salary = 455;

// 2. default parameters
function calculateSalary(salary, tax = 2.5, bonus = 0) {
    const reamining = salary - tax * salary;
    const total = reamining + bonus;
    return total;
}

// 3.template string
// document.getElementById('')

const element = `
<div>Name: </div>
<p>address : </p>
<p>Salary : </p>
`

// 4 arrow function
const doubleLeft = x => x * 2;
const calculateSalary = (salary, tax, bonus) => salary - salary * tax + bonus;
// 5. spread

const ages = [11, 12, 13, 15, 14, 78, 45, 145, 77];

const newAges = [...ages];

// destructuring 

const { x, y, z, ...c } = { x: 45, y: 12, z: 33, name: "shakib al hasan", salary: 40 };

const { a, b, ...r } = [12, 45, 21, 65, 68]

