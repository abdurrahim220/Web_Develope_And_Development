import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>


    <h5>New Component. YAY</h5>
    <p>Rock mama React Mama</p>

      <Friend></Friend>
      <Friend></Friend>
      <Friend></Friend>
      <Rahim></Rahim>
      <Rahim></Rahim>
    </div>
  );
}


function Person(props) {
  console.log(props);
  return (
    <div className='person'>
      <h1>Sakib Al Hasan</h1>
      <p>Professon: Cricket</p>
    </div>
  )
};

function Friend() {
  return (
    <div className='container'>
      <h3>Name : Ajay devgan</h3>
      <p>Job: Fight</p>
    </div>
  )
}

function Rahim(){
  return (
    <div className='person'>
      <h3>Name : Md Abdur Rahim</h3>
      <p>Job : Student</p>
      <p>Learning Full stack Web Development (Font-end)</p>
    </div>
  )
}

export default App;
