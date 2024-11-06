import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import {FiSun } from"react-icons/fi"
import { FiMoon } from "react-icons/fi" 

const App = () => {
  const [colorMode, setColorMode] = useState({
    backgroundColor: 'black',
    color: 'white'
  })

  const [icon, setIcon] = useState(<FiSun />)

  const toggleColorMode = () => {
    if (colorMode.backgroundColor === 'black' && colorMode.color === 'white') {
      setColorMode({
        backgroundColor: 'white',
        color: 'black'
      })
      setIcon(<FiMoon />)
    } else {
      setColorMode({
        backgroundColor: 'black',
        color: 'white'
      })
      setIcon(<FiSun />)
    }
  }

  return (
    <div className='min-h-[100vh]' style={colorMode}>
      <Navbar icon={icon} toggleColorMode={toggleColorMode} />
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/create" element={ <CreatePage /> } />
      </Routes>
    </div>
  )
}

export default App