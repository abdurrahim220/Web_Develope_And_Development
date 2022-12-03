let val;
let list = document.querySelector("ul");
let listitem = document.querySelector(`ul li:first-child`);
val = list;
val = listitem;
//get the child notdes

val = list
val = list.childNodes
val = list.childNodes[0]
val = list.childNodes[1]
val = list.childNodes[2]
val = list.childNodes[1].nodeName;
val = list.childNodes[0].nodeType;

/*
1 element
2 attribute
3 text Node
8 comment
9 Document Itself
10 Doctype
*/
val = list.childNodes;
val = list.children;
val = list.children[1];
list.children[0].textContent="Hello";
list.children[1].children[0];
list.children[1].children[0].href;
val = list.firstChild;
val = list.firstElementChild;
val = list.lastChild;
val = list.lastElementChild;

val = list.childElementCount;
val = listitem;
val = listitem.children;
val = listitem.parentElement;
val = listitem.parentNode;
val = listitem.parentElement.parentElement;

val = listitem.nextSibling.nextSibling;
val = listitem.nextElementSibling;
val = listitem.nextElementSibling.nextElementSibling;

val = document.querySelector(`ul li:last-child`);
val = val.previousSibling;
val = val.previousElementSibling;
console.log(val)

