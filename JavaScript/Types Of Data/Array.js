var countries = ["Bangladesh","USA","UK"]

console.log(countries)
console.log(countries.length)
console.log(countries[0])
console.log(countries[1])
console.log(countries[2])


// To change the value of the string & add into index directly


countries[1] = "Poland"

console.log(countries);

countries[3] = "Norway"

console.log(countries);


countries [countries.length]="Sweden"
console.log(countries);

//Push  used to add value in lust index of array

// countries.push("China")

countries.push("China","Japan")


console.log(countries);

//Pop used to remove the lust index in the array
console.log(countries.pop());


//Shift() it used to remove the first index of the array

countries.shift()

console.log(countries)


//Unshift it used to add fist index of the array

countries.unshift("Banglades")

console.log(countries);

//creating empty array

var number = []

console.log(number);

number.push(12) // Adding int values in array
console.log(number)

number.push("Two") // adding string values in array

console.log(number)


// Split method used to split the string and add values to the array

var x = "Bangladesh" //String 

var y = x.split("") 

console.log(y) // split x values convort to array 

var z = "Hello World"

e = z.split()

console.log(e)

e = z.split("")
console.log(e);

var b = "Bangladesh is a country"

c = b.split("n")
console.log(b)
console.log(c) // it separate the sting where is n

d = "Bangladesh ,Pakistan ,China, Japan"

f = d.split(",")

console.log(d)
console.log(f) // split used the , and separate the string 

var g = f.toString() //toString make the string of all arrays vale

console.log(g)

h = "Banglades is a country"
i =h.split(" ")
console.log(h)

console.log(i)

j = i.toString() // to string by default used , to separate

console.log(j);

k = i.join(" ") //using join i can separate the sting in my own way
console.log(k);


/////////////////

console.log(countries)
console.log(i)

l = countries.concat(i)
 
console.log(l)

console.log(l.sort()) // sorting the value it change the index of array
console.log(l.reverse()) // decending order .. reverse of the sort value





