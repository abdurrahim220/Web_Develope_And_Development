const person = {fname:"john",lname:"Doe",age:25}

for(let x in person)
{
    console.log(person[x]);
}

// array

const numbers = [45,4,9,16,25];

for (let x in numbers)
{
    console.log(numbers[x])
}

function myFun(value,index,array)
{
    console.log(value);
}

numbers.forEach(myFun)