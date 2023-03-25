import React from 'react';
import './Country.css'

const Country = (props) => {
    console.log(props.country); //showing output
    const { area, region, population, name,flags } = props.country; //object destructuring
    return (
        <div className='country'>
            <h2>Country Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <p>Population : {population}</p>
            <p>Area : {area}</p>
            <p>Region : {region}</p>


            {/* <h2>Country Name: {props.country.name.common}</h2>
            <p>Population : {props.country.population}</p>
            <p>Area : {props.country.area}</p>
            <p>Region : {props.country.region}</p> */}


            <p className='border'>Borders:
                <ul>
                    {props?.border?.map(item => <li>{item}</li>)}
                </ul>
            </p>
        </div>
    );
};

export default Country;