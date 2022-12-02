//sub class 
//inheritance

class Person{ // base class
    constructor(fname,lname){
        this.f_n = fname;
        this.l_n = lname;
    }
    greeting(){
        return `Hello ${this.f_n} ${this.l_n}!` ;
    }
}

// class Customer {
//     constructor()
//     {
//         this.f_n = fname;
//         this.l_n = lname;
//         this.phone = phone;
//         this.membership = membership;
//     }
// }

class Customer extends Person { //sub class
    constructor(fname,lname,phone,membership)
    {
        super(fname,lname);

        this.phone=phone;
        this.membership = membership;

    }

    fullname() {
        console.log(this.f_n,this.l_n);
    }
}

let Person1 = new Person("Abdur","Rahim") ;

console.log(Person1);
console.log(Person1.greeting());

let Customer1 = new Customer("Rony","choy","01711416732","1234");

console.log(Customer1);
console.log(Customer1.greeting());
console.log(Customer1.fullname());