//!! async and await promise


async function getJokes() {
    return "All the Jokes!!"
}

// console.log(getJokes());

getJokes()
   .then(res => console.log(res))