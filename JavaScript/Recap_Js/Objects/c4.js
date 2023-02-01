// create object 

const person ={
    firstName:"john",
    lastName:"Doe",
    // language:"en",
    language:"",
    // get lang() {
    //     return this.language;
    // }
    set lang(lang) { this.language=lang;},
    get fullName(){
        return this.firstName+" "+this.lastName;
    },
    fullName2: function(){
        return this.firstName+" "+this.lastName;
    }
};

person.lang = "English";

// console.log(person.language);
console.log(person.fullName2());
console.log(person.fullName);