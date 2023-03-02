/*
True 
1. true
2. any number(+ve,-ve) will be truthy other than 0
3. any string other than empty string
4. empty object
5. '0' or 'false' string value will be true

False
1. false
2. 0
3. '' (empty string)
4. undefined
5. null
*/


const x = false;
if (x) console.log("true")
else console.log('false')


// optional 
//check falsy
const y = ''
if (!x) console.log('value is falsy')


// check truth

const z = ' ';

if(!!z) console.log('value is truty')