//Multiselector
//document.getElementByClassName()

let list = document.getElementsByClassName("sample-class");
console.log(list)
list[0].style.background = "red";
list[0].style.color = "white";
list[0].style.padding = "10px";
list[0].textContent = "Hello World!"
// console.log(list[0])


//Calling by Tagname()

list = document.getElementsByTagName("li");
list = document.querySelector("ol").getElementsByTagName('li');

let lis = Array.from(list);
lis.forEach(function(item){
   // console.log(item);
})

/*

document.querySelectorall()
id -> #
clssname -> .
tagname -> nothing

*/

list = document.querySelectorAll('ol li');

lis.forEach(function(item){
    // console.log(item);
})

let liOdd = document.querySelectorAll('li:nth-child(odd)');
let lieven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(item)
{
    item.style.background='gray';
    item.style.color='white';
})

lieven.forEach(function(item)
{
    item.style.background='red';
    item.style.color='white';
})
console.log(list)