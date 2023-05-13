
import './App.css'

function App() {

  const handleUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email }

    console.log(user);

    fetch(`http://localhost:5001/users`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.insertedId) {
          alert("User Added SuccessFully");
          form.reset();
        }
      })
  }


  return (
    <>

      <h1>Simple Crud</h1>


      <form onSubmit={handleUser} >

        <input type="text" name='name' />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="submit" value="Add user" />
      </form>

    </>
  )
}

export default App

