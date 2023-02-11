// console.log('append js');
//1. where to add
const placesList = document.getElementById('places-list');
//2. what to add
// console.log(placesList);
const li = document.createElement('li');
li.innerText = 'pahartoli bon';

//3.add the child
placesList.appendChild(li);

//1. where to add 
const mainContainer = document.getElementById('main-container');
// console.log(mainContainer);

// what to add
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = "My Food list";

section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'Birayani'
const li2 = document.createElement('li');
li2.innerText = 'borhani'
const li3 = document.createElement('li');
li3.innerText = 'salad'
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);

section.appendChild(ul);

mainContainer.appendChild(section);

// set innerHtml directly

const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>My dress Section</h1>
<ul>
<li>T-shirt</li>
<li>Lungi</li>
<li>Sando genji</li>
</ul>
`;

mainContainer.appendChild(sectionDress);

