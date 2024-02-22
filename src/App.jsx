import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FirstPart from './Components/FirstPart'
import SecondHeader from './Components/secondHeader'
import SecondPart from './Components/SecondPart'
import ThirdHeader from './Components/ThirdHeader'
import ThirdPart from './Components/ThirdPart'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <FirstPart/>
    <SecondHeader/>
    <SecondPart/>
    <ThirdHeader/>
    <ThirdPart/>
    <Footer/>
   </div>
  )
}

export default App
