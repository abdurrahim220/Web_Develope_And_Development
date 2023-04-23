import { useState } from 'react'

import './App.css'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
