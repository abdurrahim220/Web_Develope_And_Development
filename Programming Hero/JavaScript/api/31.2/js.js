// function add(a,b){
//     // console.log(a,b);
//     if(b === undefined){
//         b = 0;
//     }

//     const sum = a + b;
//     return sum;
// }

function add(a, b = 0) {


    const sum = a + b;
    return sum;
}

const result = add(10);
console.log(result)