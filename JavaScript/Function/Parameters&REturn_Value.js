//Function parameter/Argument

// alert("hello!")

// function saSomething(param1)
// function saSomething(fname = "Rifat",lname = "Uddin")
// {
//     // console.log(`Hello ${param1}`);
//     console.log(`Hello ${fname} ${lname}`);
// }
// saSomething("Bohubrihi"); 
// let val = "Abdur Rahim!";
// let firstName = "Abdur";
// let lustName = "Rahim";

// saSomething(val); 
// saSomething(firstName,lustName); 
// saSomething();

 
/////////////////////////////////////////

function addNum(a=0,b=0)
{
    //console.log(a+b);

    console.log(`${a} + ${b} = ${a+b}`)

    return a+b;

    console.log("After Return value!!")
}
// addNum();
// console.log(addNum(4,5)); //return vale print
let sum =addNum(3.6,2.3);

console.log(sum); 