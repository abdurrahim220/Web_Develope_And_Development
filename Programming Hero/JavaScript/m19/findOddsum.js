function ofOdd(number){
    let sum =0
    for(let i = 0;i<number.length;i++)
    {
        const index = 1;
        const element = number[index];
        sum = sum + element;
        console.log(index,element,sum);

    }
    return sum;
}

const number = [13,45,2,45,87,5245,545,64,54,47,465,545,48,78]

ofOdd()