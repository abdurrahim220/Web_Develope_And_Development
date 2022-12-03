let val ;

val = this;
val = window;

val = window.document;
val = document;

val = document.all;
val = document.all[0];
val = document.all.length;

val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.characterType;
val = document.forms;
val = document.forms[1];
val = document.forms[0].method;
val = document.forms[0].action;
val = document.links;
val = document.links[1];
val = document.links[1].href;
val = document.links[1].className;
val = document.links[0].classList;
val = document.images;

val = document.scripts;
val = document.scripts[0];
val = document.scripts[1].src;
val = document.scripts[1].getAttribute(`src`);
links = document.links;
let linkArr = Array.from(links);

linkArr.forEach(function(link) {
    console.log(link);
});

console.log(val);
console.log(links);