//objects method

let person = {
    firstname: "fazle",
    lastname: "rahat",
    dob : "9-10-1995", //number ,string , date
   // array , object

   fullname:function()
   {
    return `${this.firstname} ${this.lastname}`;
   }

}

console.log(person.firstname);

console.log(person.fullname());