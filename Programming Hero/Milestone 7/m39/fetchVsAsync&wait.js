
function getFetch1(getUrl) {
    fetch(getUrl)
        .then(resp => resp.json())
        .then(data => console.log(data))
        .catch(err => console.log(err.message))
}

// async await

async function getFetch2(getUrl) {
    try {
        const resp = await fetch(getUrl)
        const data = await resp.json()
        console.log(data);

    }
    catch (err) {
        console.log(err);
    }
}