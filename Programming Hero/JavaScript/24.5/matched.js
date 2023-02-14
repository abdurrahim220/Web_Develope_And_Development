const number = [45, 65, 23, 98, 19];
/* 
for(let i = 0;i<=number.length;i++){
    const element = number[i];
    console.log(element);
} */

for (const x of number) {
    // console.log(x);
}

const products = [
    { id: 1, name: "walton phone", price: 49654 },
    { id: 2, name: "vivo phone", price: 49654 },
    { id: 3, name: "nokia phone", price: 49654 },
    { id: 4, name: "samsung phone", price: 49654 },
    { id: 5, name: "i phone", price: 49654 },
    { id: 6, name: "asus phone", price: 49654 },
    { id: 7, name: "laptop phone", price: 49654 },
    { id: 8, name: "alcatel phone", price: 49654 },
    { id: 9, name: "vision phone", price: 49654 }
];

// for(const x of products){
//     console.log(x);
// }

function matchedProduct(products, search) {
    const matched = [];
    for (const x of products) {
        //console.log(x.name.includes(search));
        if (products.name.toLowerCase().includes(search.toLowerCase)) {
            matched.push(products);
        }
        return matched;

    }
}
    const result = matchedProduct(products, 'phone');