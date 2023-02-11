console.log("this is javaScript Dom Event!!");

// option 2 js
function makeRed() {
    document.body.style.backgroundColor = 'red';
}
makeBlue = () => document.body.style.backgroundColor = 'blue';

// option 3
const makeGreen = document.getElementById('make-green');
//    console.log(makeGreen);
makeGreen.onclick = onGreen;
// onGreen = () => document.body.style.backgroundColor = 'green';
function onGreen() { document.body.style.backgroundColor = 'green'; }


// another option 3
const pp = document.getElementById('purple');
//    console.log(pp);
pp.onclick = makePurple = () => {
    document.body.style.backgroundColor = 'purple';
}
// pp.onclick = function makePurple(){
//     document.body.style.backgroundColor = 'purple';}

// option 4 

const pinkButton = document.getElementById('pink');
// console.log(pinkButton)
pinkButton.addEventListener('click', makePink);

// makePink = () =>{
//     document.body.style.backgroundColor = 'pink';
// }
function makePink() {
    document.body.style.backgroundColor = 'pink';
}

// another opetion 4 
const tomatoButton = document.getElementById('tomato');
// console.log(pinkButton)
tomatoButton.addEventListener('click', makeTomato = () => {
    document.body.style.backgroundColor = 'tomato';
});
