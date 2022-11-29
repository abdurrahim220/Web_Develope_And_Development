//declaring array 

var arr = [1,2,3]

console.log(arr)
console.log(arr.length) //length is a property of array

//object declaration ob.name = {name: vale .....}

var student = {name:"Rahim" , age:23,hometown:"Rajshahi"}

console.log(student)

//Accessing object 

console.log(arr[0])  ////Accessing arrays index vales
console.log(student["name"]) //Accessing object index values 
console.log(student["age"]) //Accessing object index values 
console.log(student["hometown"]) //Accessing object index values 
console.log(student.name) //Accessing object index values properties
console.log(student.age) //Accessing object index values properties
console.log(student.hometown) //Accessing object index values properties

//Adding values to the arrays and objects

arr[3] = 4 //adding index values to array
console.log(arr)

student["occu"] = "Student" // adding objects index values

console.log(student)


student.village = "Bhatopara"

//how to delete index from object 

console.log(student);

delete student.village
console.log(student) 

// creating empty object

student_e = {}

student_e.name = "royal"
student_e.age = "27"

console.log(student_e);