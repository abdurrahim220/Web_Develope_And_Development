function one(){
    console.log('A');
    two();
    console.log('C');
}
function two(){
    console.log('B');
}

one();