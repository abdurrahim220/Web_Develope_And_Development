//document.getElementbyid()
//

let val ;
//getting an element
val = document.getElementById('Document-title');
// val = document.getElementById(`Document-title`).id;
// val = document.getElementById(`Document-title`).className;

//changing style


document.getElementById('Document-title').style.background='#333';
document.getElementById('Document-title').style.background='#fff';
document.getElementById('Document-title').style.padding='10px';
document.getElementById('Document-title').style.display = "block";

//changing content

document.getElementById("Document-title").textContent = "New Title";
document.getElementById("Document-title").textContent = "Again New Title";
document.getElementById("Document-title").innerText = "<i>Again New Title</i>";
document.getElementById("Document-title").innerHTML = "<i>Again New Title</i>";

val = document.getElementById("Document-title");
val.innerText = "Ha Ha Ha";

//querySelector

val = document.querySelector('#Document-title'); //id
val = document.querySelector('.title-class'); //class
val = document.querySelector('h3'); //Using Tag
val = document.querySelector('ol'); //order list
val = document.querySelector('ol li'); //parent access to child
val.style.background='red';
val.style.color='white';

val = document.querySelector('li:last-child');
val = document.querySelector('li:nth-child(even)').innerText="Even";
val = document.querySelector('li:nth-child(odd)').innerText="Odd";
val = document.querySelector('li:nth-child(3)').innerText="Number value";

console.log(val);