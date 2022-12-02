//Class(ES6)
//class is a template for creating object
/*
let person1 = {
    firstN : "Abdur",
    lastN : "Rahim",
    dob : "11-13-1998",

    fullname: function() {
        console.log(`${this.firstN} ${this.lastN}`);
    }
}

let person2 = {
    firstN : "Rifat",
    lastN : "Uddin",
    dob : "02-12-1999",

    fullname : function(){
        console.log(`${this.firstN} ${this.lastN}`);
    }
}

console.log(person1)
console.log(person2) */





class Person {
    constructor(fname,lname,birthday)
    {
        this.firstname =fname;
        this.lastname =lname;
        this.dob =birthday;
    }

    calculateAge()
    {
        let birthday = new Date(this.dob);
        let diff = Date.now() - birthday.getTime();
        let ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
}
}

let person1 = new Person("Abdur","Rahim","22-11-1999");
let person2 = new Person("Rifat","uddin","12-10-1999");
let person3 = new Person("Royal","uddin","12-11-1987");

console.log(person1);
console.log(person2);
console.log(person3);

