
import './App.css'
import Dashboard from './component/Dashboard/Dashboard'
import Navbar from './component/Navbar/Navbar'
import PriceList from './component/PriceList/PriceList'

function App() {

  return (
    <div className="App">

      <Navbar></Navbar>
     <h1 className='text-red-300 text-5xl' >This is tailwind css</h1>
     <PriceList></PriceList>
     <Dashboard></Dashboard>
    </div>
  )
}

export default App
