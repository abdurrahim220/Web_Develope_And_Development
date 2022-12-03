/*
console.log("Before Error!")
// test ();
try{
    // text();
    // undefined.test();

}catch(err){
    // console.log(err);
    console.log(err.message);
    console.log(err.name);
}
finally{
    console.log("I am inside finally!1")
}

console.log("after Error!")
*/


let a = 9;

try{
    if(a>15) throw "Too Big";
    else if(a<24) throw "Too small";
} catch(err){
    console.log(err);
}