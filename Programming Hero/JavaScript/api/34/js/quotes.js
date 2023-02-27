
const loadQuat = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuotes(data))
};


// async await

const loadQuat2 = async()=>{
    try{
        const res =await fetch('https://api.kanye.rest/');
    const data = await res.json();
    displayQuotes(data);
    }
    catch(er){
        console.log(er)
    }
    
}
const displayQuotes = (quotes) => {
    const blockQuotes = document.getElementById('quote');
    // console.log(quotes)
    blockQuotes.innerHTML = quotes.quote;
};