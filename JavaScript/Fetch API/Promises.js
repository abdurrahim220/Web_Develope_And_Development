//?Angular js  used

//?.then


let persons = [
    { first_n: "Abdur", Last_n: "Rahim" },
    { first_n: "Rifat", Last_n: "Uddin" }
]

function createPerson(person) {
    let pom = new Promise(function (resolve, reject) {
        persons.push(person);

        let error = false;
        if(!error) {
            resolve();
        }
        else {
            reject ('Error! Something went wrong!');
        }
        // resolve();
    });
    return pom;
}

function getPerson() {
    setTimeout(function () {
        let output = ``;

        persons.forEach(function (person) {
            output += `<li>${person.first_n} ${person.Last_n}</li>`
        })
        document.getElementById('output').innerHTML = output;
    }, 500);
}


createPerson({ first_n: "Rony", Last_n: "Chy" }).then(getPerson)
    .catch(function (err){
        console.log(err);
});