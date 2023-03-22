import logo from './logo.svg';
import './App.css';

const singers = [
  { name: 'dr.Mahfuz', job: "Singer" },
  { name: 'Eva Rahman', job: "Singer2" },
  { name: 'Agun', job: "Sopno" },
  { name: 'Shuvro', job: "pathor" }
]

function App() {
  const nayoks = ['Rubel', 'Baparaz', 'Kubir', 'Rahim', 'Bindaas', 'Jamil', 'Rafik', 'Riyaz', 'Razzak', 'Ashik', 'Anwar']
  return (
    <div className="App">
      {
        nayoks.map(nayok => <li>{nayok}</li>)
      }
      {/* <Person name={nayoks[0]} nayika="Moushomi"></Person> */}
      {/* <Person name={nayoks[1]} nayika="Cheka"></Person> */}
      {/* <Person name={nayoks[2]} nayika="Kopila"></Person> */}

      {
        nayoks.map(nayok => <Person name={nayok}></Person>)
      }


      {
        singers.map(singer => <Person name={singer.name}></Person>)
      }


      <h5>New Component. YAY</h5>
      <p>Rock mama React Mama</p>

      <Friend phone="01777" movie="Singam"></Friend>
      <Friend phone="0173377" movie="Rahim"></Friend>

    </div>
  );
}


function Person(props) {
  // console.log(props);
  return (
    <div className='person'>
      {/* <h1>Sakib Al Hasan</h1> */}
      <h1>Name: {props.name}</h1>
      {/* <p>Profession: Cricket</p> */}
      <h1>Nayika : {props.nayika}</h1>
    </div>
  )
};

function Friend(props) {
  console.log(props);
  return (
    <div className='container'>
      <h3>Name : {props.movie}</h3>
      <p>Phone: {props.phone}</p>
    </div>
  )
}

function Rahim() {
  return (
    <div className='person'>
      <h3>Name : Md Abdur Rahim</h3>
      <p>Job : Student</p>
      <p>Learning Full stack Web Development (Font-end)</p>
    </div>
  )
}

export default App;
