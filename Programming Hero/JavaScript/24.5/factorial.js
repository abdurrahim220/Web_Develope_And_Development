
/*let fact = 1;
for(let i =1 ;i<=5;i++)
{
    fact *= i;
}

console.log(fact);*/

function factorial(i){
    if(i==1){
        return 1;
    }
    return i * factorial(i-1);
}

const result = factorial(5);
console.log(result);
/*
    i * factorial(i-1);

    5 * factorial(5-1);
    5 * 4 * factorial(4-1);
    5 * 4 * 3 * factorial(3-1);
    5 * 4 * 3 * 2 * factorial(2-1);
    5 * 4 * 3 * 2 * 1;
*/