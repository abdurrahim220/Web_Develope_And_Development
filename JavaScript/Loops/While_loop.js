//While loop Structure
//print 1 to 10
//Sum of i to 10
var i = 1;

var sum = 0;
var product = 1;
// while(i<=5)
// {
//     console.log("Value of i : "+i);
//     i++;
// }

//Do while loop
// do
// {
//     console.log("Value of i : "+i);
//     i++;
// }while(i<=5);

//console.log("Out of the loop!");

while(i <= 10)
{
    // if(i==4)
    // {
    //     console.log("Value of i is : "+i);
    // }
   // console.log(i);
    sum += i; // 1 + 2 + 3 +...+10
    product *= i;
    i++;
}

console.log("Result of Sum: " + sum);
console.log("Result Of Product: " + product);



