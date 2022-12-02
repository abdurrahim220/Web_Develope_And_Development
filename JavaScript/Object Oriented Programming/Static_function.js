class Person{
    constructor(fname,lname)
    {
        this.firstname = fname;
        this.lastname = lname;
    }

    greething()
    {
        console.log(`Hello ${this.firstname} ${this.lastname}`);
    }
    static test()
    {
        console.log("I am static!!");
    }
}

let Person1 = new Person("Abdur","Rahim");

console.log(Person1.greething());//classed though method

console.log(Person.test()); //called though class