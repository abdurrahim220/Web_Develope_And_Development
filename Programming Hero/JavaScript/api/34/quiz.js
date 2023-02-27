const data={ result: [ {userName: {title:'Mr.',name:"sakib khan"} } ] }

console.log(data.result[0].userName.name);

const p=[1,2,3]; 
const q=p.map( n=> Math.pow(n, 3));
console.log(q);

const array = { hobbies: ["dancing", "singing", "acting"] };
console.log(JSON.stringify(array));