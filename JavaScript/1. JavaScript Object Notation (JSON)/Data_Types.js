/*

https://jsonlint.com
1.String
2.Number 
3.Object(JSON object)
4.Array
5.boolean
6.null
*/

//Doesn't suppor undefined,data(support String data),function

var person = {
    name : "Rahim",
    age : 24, hometown:"Dhaka",married:false,dob:1998-05-12,test_null:null,test_undefined:undefined,
    greet: function()
    {
        console.log(`Hello ${this.name}!`);
    }
}

var person_json = JSON.stringify(person);
console.log(person_json);