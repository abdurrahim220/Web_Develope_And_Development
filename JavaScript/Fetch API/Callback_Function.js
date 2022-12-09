//?Callback function


/* setTimeout (function(){
    console.log("Hello world!!")
}, 1000); */
/*
let person = [
    {first_n:"Abdur",Last_n:"Rahim"},
    {first_n:"Rifat",Last_n:"Uddin"}
]

function createPerson (person) {
    setTimeout(function () {
        person.push(person);
    },4000);
}

function getPerson () {
    setTimeout(function() {
        let output = ``;

        person.forEach(function (person){
            output += `<li>${person.first_n} ${person.Last_n}</li>`
        })
        document.getElementById('output').innerHTML = output;
    },1000);
}


createPerson({first_n:"Rony",Last_n:"Chy"});

getPerson();
*/

let persons = [
    {first_n:"Abdur",Last_n:"Rahim"},
    {first_n:"Rifat",Last_n:"Uddin"}
]

function createPerson (person , Callback) {
    setTimeout(function () {
        persons.push(person);
        Callback();
    },2000);
}

function getPerson () {
    setTimeout(function() {
        let output = ``;

        persons.forEach(function (person){
            output += `<li>${person.first_n} ${person.Last_n}</li>`
        })
        document.getElementById('output').innerHTML = output;
    },500);
}


createPerson({first_n:"Rony",Last_n:"Chy"} , getPerson);

// getPerson();

