const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayContries(data))
}

const displayContries = (countries) => {

    const countriesContainer = document.getElementById('all-countries');
    // console.log(cn)
    // for ( const coun of cn){
    //     console.log(coun)
    // }
    // using map 

    countries.forEach(country => {
        // console.log(country.cca2);
        const countrieDiv = document.createElement('div');
        countrieDiv.classList.add('country');
        countrieDiv.innerHTML = `
        <h3>name: ${country.name.common}</h3>
        <p>capital: ${country.capital ? country.capital[0] : 'no capital'}</p>
        <button onclick="loadContriesDetails('${country.cca2}')">Details</button>
        `;
        countriesContainer.appendChild(countrieDiv)

    });
}


const loadContriesDetails = (code) => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`;

    // console.log("details coming soon",code)
    // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => showCountryDetails(data[0]))
}

const showCountryDetails = (country) => {
    const detailsContainer = document.getElementById('country-detils')

    detailsContainer.innerHTML = `
    <h3>Name: ${country.name.common}</h3>
    <img src="${country.flags.png}"> 
    `;
}

loadCountries();

