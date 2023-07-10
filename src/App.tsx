import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [isActive, setIsActive] = useState(false)

  const handleChangeColor = () => {
    setIsActive(!isActive)
  }

  return (
    <>
      <h1>React test - button color</h1>
      <dev>
        <button 
          onClick={handleChangeColor}
          style={{color: isActive ? 'black' : 'white', backgroundColor: isActive ? 'red' : 'green'}}
        >{isActive ? 'Active' : 'Deactive'}
        </button>
      </dev>
    </>
  )
}

export default App
