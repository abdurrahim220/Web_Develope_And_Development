const user = {id:1,name:'Gorib Aamir',job:'actor'};
// javaScript object notation (json)

const stringified = JSON.stringify(user)
// console.log(user);
// console.log(stringified);

const shop ={
    owner : 'alia',
    address :{
        street:'kochukhet voot er goli',
        city:'dhaka',
        county:'BD',
    },
    products:['laptop','mic','monitor','keyboard'],
    revenue : 45000,
    isOpen:true,
    isNew : false
}

console.log(shop);
console.log(typeof shop);

const shopJson = JSON.stringify(shop);
console.log(shopJson);
console.log(typeof shopJson);

const js = JSON.parse(shopJson);
console.log(js);
console.log(typeof js);