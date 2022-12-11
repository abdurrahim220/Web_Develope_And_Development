let person = {
    firstName: "Fazle",
    lastName: "Rahat",
    dob: '22-11-1999'
}


/*
let fname = person.firstName,
lname = person.lastName,
dob = person.dob; 
*/

// let {firstName, lastName, dob} = person;
// let {firstName:fname, lastName:lname, dob:db} = person;

// // console.log(fname,lname,dob)
// console.log(firstName,lastName,dob);

/*
//? Normal way !!
function display(person) {
    let fname = person.firstName,
        lname = person.lastName,
        dob = person.dob;
    console.log(fname,lname,dob);
} 
display(person);
*/


//!Destructing way with arrow function

display = ({firstName:fname, lastName:lname, dob:db}) => {
    console.log(lname,fname,db);
}

display(person);