
import { useEffect, useState } from 'react';
import './App.css'


function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/users`)
      .then(res => res.json())
      .then(data => setUsers(data))
  }, []);


  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;

    const user = { name, email }
    console.log(name, email);
    console.log(user);



    // update the user data to the server 

    fetch(`http://localhost:5000/users`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const newUser = [...users,data];
        setUsers(newUser)
        form.reset();
      })


  }


  return (
    <>

      <h1>User Management</h1>

      <h3>The numbers of user : {users.length}</h3>


      <form onSubmit={handleSubmit}>
        <input type="text" name='name' />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="submit" value="Add User" />
      </form>

      <div>
        {
          users.map(user => <p>{user.id} : {user.name} : {user.email}</p>)
        }
      </div>

    </>
  )
}

export default App;
