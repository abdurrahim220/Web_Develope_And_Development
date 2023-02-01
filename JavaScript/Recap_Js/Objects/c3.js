const person = {
    firstName:"Md.Abdur",
    lastName:"Rahim",
    id:5566,
    fullName: function(){
        return (this.firstName+" "+this.lastName).toUpperCase();
    }
}

console.log(person.fullName())