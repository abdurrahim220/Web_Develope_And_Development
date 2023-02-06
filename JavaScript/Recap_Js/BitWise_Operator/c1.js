let x = 5 & 1;
let x1 = 5 | 1;
let x2 = 5 ^ 1;
console.log(x);
console.log(x1);
console.log(x2);

// left shift

let x3 = 5 << 1;
console.log(x3);
// right shift

let x4 = 5 >> 1;
console.log(x4);

// decimal to binary

dec2bin =(dec) =>{
    return (dec >>> 0).toString(2);}
// function dec2bin(dec){
//     return (dec >>> 0).toString(2);
// }

convert = dec2bin(10);
console.log(convert);

// bin to decimal!!

bin2dec = (bin)=>{
    return parseInt(bin,2).toString(10);
}

convert2 = bin2dec(10110);
console.log(convert2);