import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {


  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUsers></ExternalUsers>
    </div>
  );
}



function ExternalUsers() {
  const [users, setUsers] = useState([]); //first step

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(res => res.json())
      .then(data => setUsers(data))
  },
    []); //second step data load


  return (
    <div>
      <h2>Enternal Users</h2>
      <p >
        {users.length}
      </p>
      {
        users.map(user => <User name={user.name} email={user.email}userName={user.username} address={user.address.city}></User>)
      }

    </div>
  )
}


function User(props) {
  return (
    <div style={{ border: '2px solid red', margin: '20px' }}>
      <h3>Name: {props.name}</h3>
      <h4>UserName: {props.userName}</h4>
      <p>Email : {props.email}</p>
      <address>Address: {props.address}</address>
      
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(55);
  // console.log(count);

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);

  // const increaseCount = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase</button>

      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}

















function Product(props) {
  return (
    <div className='product'>
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price}</p>
    </div>
  )
}

export default App;


/*
   const products = [
    { name: 'laptop', price: 76546 },
    { name: 'Mobile', price: 46523 },
    { name: 'Watch', price: 4656 },
    { name: 'Tablet', price: 4646 },
    // {name:'',price:77}
  ]

  // app function 
   {/* <Product name="Laptop" price="785522"></Product>
      <Product name="Phone" price="45665"></Product>
      <Product name="Watch" price="785"></Product> }

      {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      }


 */