//Adding Element to DOM
//create element

/*let olItem= document.createElement("li")

// add id and class

olItem.className = "a new another-class!";
olItem.id = "new-element";

// add Attribute
olItem.setAttribute('title','A title to new element');

olItem.appendChild(document.createTextNode('JavaScript'));
document.querySelector('ol').appendChild(olItem)
// console.log(olItem);

let ulItem = document.createElement("li");
let link = document.createElement('a');
//add id and class

ulItem.className = "a new ul-class";
ulItem.id = "new-ulId";

//add attribute 
// ulItem.setAttribute('title-ul','A new ul title to new element');
// link.setAttribut('href','https://www.instagram.com');
link.setAttribute('herf','https://www.instagram.com')

///adding values
link.appendChild(document.createTextNode("Instagram"))
ulItem.appendChild(link);

console.log(ulItem);
// console.log(link);

document.querySelector('ul').appendChild(ulItem)

*/

//Replacing Element

let newHeading = document.createElement('h1');
newHeading.appendChild(document.createTextNode('H1 New Heading'));
newHeading.className = "sample-class";

let oldHeading = document.querySelector('h3');

let parent = document.querySelector('.container');

// parent = oldHeading.parentElement;

//Replacing 
parent.replaceChild(newHeading,oldHeading);

//Remove element

let listItem = document.querySelectorAll('li');
let list = document.querySelector('ul')
// listItem[0].remove();
// listItem[3].remove();

// list.removeChild(listItem[5])

list.classList.add("test");
list.classList.add("test-new");
list.classList.remove('sample-class');
let val = list.hasAttribute('class')
// let val = list.hasAttribute('true')

list.setAttribute('title','New-Title');
list.removeAttribute('title');

//calling all the JavaScript
// console.log(newHeading);
// console.log(oldHeading);
// console.log(parent);
console.log(list);
console.log(listItem);
console.log(val);
