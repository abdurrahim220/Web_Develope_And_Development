import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyLocation from './component/Location/MyLocation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <MyLocation></MyLocation>
    </div>
  )
}

export default App
