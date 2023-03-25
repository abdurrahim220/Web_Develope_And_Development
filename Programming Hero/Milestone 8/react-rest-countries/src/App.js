import logo from './logo.svg';
import './App.css';
import Countries from './components/Countries/Countries';

// import { useEffect, useState } from 'react';
// import Countries from './components/Countries/Countries';
// import Person from './components/Person/Person';
// import Header from './components/Header/Header';

function App() {
 return(
  <div className='App'>
  <Countries></Countries>
  </div>
 )
  
}


/*
// api load  
div call main app
// { <LoadCountries></LoadCountries> }

function LoadCountries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all
`)
      .then(res => res.json())
      .then(data => setCountries(data))
  }, []);
  return (
    <div>
      <h1>Visiting Every Countries of The World!</h1>
      <h1>Available Countries : {countries.length}</h1>
      {
        countries.map(country => <Country name={country.name.common} population={country.population}></Country>)
        // countries2.map(country => console.log(country.name.common))
        // countries.map(country => console.log(country))
      }
    </div>
  )
}

function Country(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <p>Population: {props.population}</p>
    </div>
  )
}
*/

export default App;
