const getData = new Promise((resolve, reject) => {
    const num = Math.random() * 10;
    console.log(num);
    if (num < 5) {
        resolve(555555);
    }
    else {
        reject('No data available')
    }
    // resolve(58888);
    reject('no data available');
})


// console.log(getData);

// getData.then(data => console.log(data));
// getData.then(data => console.log(data + 22));

getData
    .then(data => console.log(data + 22))
    .catch(err => console.log('err:', err))