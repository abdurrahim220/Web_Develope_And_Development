/*
console.log(document);
console.log(document.body);
console.log(document.head);
console.log(document.URL);
console.dir(document);
console.dir(document.head);
console.log(typeof(document));
console.log(typeof(document.head));


// changing

document.title = "PLay with Dom";

console.log(document.all); // not an array
console.log(document.all[6]); // not an array
console.log(typeof(document.all));
console.log(document.images)
console.log(document.forms)

// ittt
for(let element of document.all)
{
    console.log(element);
}



// class 3

// seeing method
console.dir(document); //method

// get element by id

console.log(document.getElementById('new-task'));
console.log(document.getElementById('header'));

const headerElement =(document.getElementById('header'));
console.dir(headerElement)
headerElement.innerHTML = "To Do Apps";
// headerElement.innerText = "AR"
console.log(headerElement.textContent)
console.log(headerElement.innerText)
console.log(headerElement.innerHTML)

headerElement.style.fontSize = "50px"; //styling

// get element by class

console.log(document.getElementsByClassName('item'))
console.log(document.getElementsByClassName('item')[3])


//selecting the three list item by their id... ul>li css like this..
// prototype chian .. inheretance 
let itemUL = document.getElementById('items');
let items = (itemUL.getElementsByClassName('item'));
// let items = (document.getElementsByClassName('item'));
for(let i = 0; i<items.length;i++)
{
    items[i].style.color = 'red';
}

// tag name

let items2 = document.getElementsByTagName('h2')
console.log(items2);

// query selector

let header = document.querySelector('.header');
let header2 = document.querySelector('#new-task');
console.log(header);
console.log(header2);

// last item

let item4 = document.querySelector('.item:last-child');
console.log(item4);

item4.style.color = 'blue'; 

// class 4 up to down
const grandparent = document.querySelector('.todo-list');
// const parent = document.querySelector('#items');
// const parent = grandparent.children;
// const children = parent[1].children;
const children = grandparent.querySelectorAll('.items');

console.log(children);

// down to up

const children_downToUP = document.querySelector('.item');
// const parent2 = children_downToUP.parentElement;
// const grandparent2 = children_downToUP.closest('.todo-list')
// console.log(parent2);
console.log(grandparent2);

//! cousin bother up to down

const childrenOne = document.querySelector('.item');
const childrenTwo = childrenOne.nextElementSibling;
const children3 = childrenTwo.nextElementSibling;

childrenTwo.style.color = 'red';
children3.style.color = 'blue'; 

// cousin brother down to up!!

const children5 = document.querySelector('.item').nextElementSibling;

const children4 = children5.previousElementSibling;

children4.style.color = 'red';


// class 5 manipulate the DOM -- dynamic element add

const divElement = document.createElement('div');

console.dir(divElement);

divElement.className = 'red';

divElement.setAttribute('id','red Div');

const container = document.querySelector('.todo-list')

const h2Element = container.querySelector('h2');

container.insertBefore(divElement,h2Element);


// container.appendChild(divElement)
container.append('hello World')

// const a = container.appendChild('divElement');
const b = container.append('divElement');
console.log(b);
container.append(divElement,document.createElement('p'),'Hello World!');


//class  6 listening to dom

// const headerElement = document.querySelector('#header');
// const headerElement = document.querySelector('.mouse');
// const headerElement = document.querySelector('input[type="text"]');
const formElement = document.querySelector('form');
const inputElement = document.querySelector('input[type="text"]');

formElement.addEventListener('submit',(event) =>{
    event.preventDefault();
    console.log(event.target);
})

// headerElement.addEventListener('keydown',(event) =>{
//     console.log(event);
// })
inputElement.addEventListener('keydown',(event) =>{
   console.log(event.target.value);
})*/

