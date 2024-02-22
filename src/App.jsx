import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FirstPart from './Components/FirstPart'
import SecondHeader from './Components/secondHeader'
import SecondPart from './Components/SecondPart'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <FirstPart/>
    <SecondHeader/>
    <SecondPart/>
   </div>
  )
}

export default App
