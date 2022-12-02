// var foods = ["Cake", "Ice Cream", "Chocolates", "Bread"];

// var numbers = [1, 32, 31, 2];

// let printEverything = function (item, i, abc) {
//     console.log(`Index: ${i} and Item ${item}`);
//     console.log(abc);
// }


// //1st parameter : item
// //2nd parameter : index
// //3rd parameter : whole array

//  foods.forEach(printEverything);
// // foods.forEach(function(item,i,abc)
// // {
// //     console.log(`Index: ${i} and Item ${item}`);
// //     console.log(abc)
// // })



////////////////////////////////////////////////////////

//array iteration using Maping

var foods = ["Cake", "Ice Cream", "Chocolates", "Bread"];

var numbers = [1, 32, 31, 2];

function addSomething(item){
    return `${item} is a food`;
}

let arr_res = foods.map(addSomething);

let arr_square = numbers.map(function(item){
    return item * item;
})

console.log(arr_res);
console.log(arr_square);

