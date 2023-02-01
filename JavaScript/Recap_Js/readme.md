function hello() {
	return "hello edabit.com"
}

####    Create a function that takes the age in years and returns the age in days.
function calcAge(age) {
	return age * 365;
}
	let ageInDays = (age*365)>=0 && typeof(age*365) == 'number' ? (age*365) : []
	return ageInDays
    return age < 0 ? null : age * 365

const calcAge = age => {
	return age >= 0 ? age * 365 : undefined
}

console.log(calcAge(10))

#### Create a function that takes a number as an argument, increments the number by +1 and returns the result.
function addition(num) {
	return ++num;
}

#### Return the Remainder from Two Numbers
function remainder(x, y) {
	return x%y;
}
const remainder = (x, y) => x % y // arrow function

#### Write a function that converts hours into seconds.
const howManySeconds = (x) => x * 60 * 60;

#### Write a function that takes the base and height of a triangle and return its area.

const triArea = (base, height) =>  0.5 * base * height 