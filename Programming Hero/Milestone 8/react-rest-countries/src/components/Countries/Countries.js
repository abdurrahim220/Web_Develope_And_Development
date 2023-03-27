import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/all`).then(res => res.json()).then(data => setCountries(data))
    }, [])

    return (
        <div className="App">
            <h3>Hello Galo mello  From Countries : {countries.length}</h3>
            <div className='countries-container'>
                {
                    countries.map(country =>
                        <Country
                            country={country}

                            border={country.borders}

                        ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;

{/* <div>
// name={country.name.common} 
                    // population={country.population} 
                    // area={country.area}
                    // region={country.region}
</div> */}