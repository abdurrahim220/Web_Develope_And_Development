

const loadCountries = () => {
    fetch(`https://restcountries.com/v3.1/all`)
        .then(res => res.json())
        .then(data => displayCountries(data));
}

const displayCountries = (countries) => {
    console.log(countries[0]);

    const countriesHtml = countries.map(country => getContryHtml(country));
    const container = document.getElementById('countries');
    container.innerHTML = countriesHtml.join(' ');
}



// option 2
const getContryHtml = ({ name, flags,area,region}) => {
    // console.log();
    // distructuring method to fucks
    // const {name,flags} = country;
    return `
    <div class="country">
    <h2>${name.common}</h2>
     <h2>Area: ${area}</h2>
     <h2>Region: ${region}</h2>
    <img src="${flags.png}">
    </div>
    `;
}

// const getContryHtml = () => {
// option 1
//     // console.log();
//     return `
//     <div class="country">
//     <h2>${country.name.common}</h2>
//     <img src="${country.flags.png}">
//     </div>
//     `;
// }

loadCountries();

























