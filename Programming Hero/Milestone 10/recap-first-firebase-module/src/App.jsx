import { useState } from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import './App.css'
import app from './firebase.config';






function App() {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);

  const provider = new GoogleAuthProvider();
  const handlelogin = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const gUser = result.user;
        console.log(gUser);
        setUser(gUser)
      })
      .catch(err => console.log(err))



  }

  return (
    <div className="App">

      <h1>Firebase + React</h1>

      <button onClick={handlelogin}>Google Login</button>
      {
        user && <div>
          <h5>{user.displayName
          }</h5>
        </div>
      }
      <div className="card">

      </div>

    </div>
  )
}

export default App
