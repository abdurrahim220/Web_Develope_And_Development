import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      {/* <District name="Dhaka" specialty='overpopulated'></District>
      <District name="Rajshahi" specialty="Clean"></District> */}
      <LoadPost></LoadPost>
    </div>
  );
}




function LoadPost() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`).then(res => res.json()).then(data => setPosts(data))
  }, [])
  return (
    <div>
      <h1>Post : {posts.length}</h1>
      {
        posts.map(post => <Post post={post} userId={post.userId}></Post>)
      }
    </div>
  )
}


function Post(props) {
  const [title,body,id] = [props.post]
  return (
    <div>
      <h4>Post : {title}</h4>
      <p>Body : {body}</p>
      <p>Id : {id}</p>
      <p>User Id : {props.userId}</p>
    </div>
  )
}










const districtStyle = {
  backgroundColor: 'yellow',
  padding: '20px',
  margin: '20px',
  borderRadius: '20px'

}

function District(props) {
  const [power, setPower] = useState(1);

  const boostPower = () => {
    const newPower = power * 2;
    setPower(newPower);
  }

  const boostPower2 = () => {
    const newPower2 = power / 2;
    setPower(newPower2);
  }

  return (
    <div style={districtStyle}>
      <h2>Name: {props.name}</h2>
      <p>Specialty: {props.specialty}</p>
      <h4>Power : {power}</h4>
      <button onClick={boostPower}>Boost The Power</button><br />
      <button onClick={boostPower2}>Boost The Power</button>

    </div>
  )
}

export default App;
