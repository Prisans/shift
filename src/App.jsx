import React from 'react'
import Home from './Components/Home/Home'
import './App.css'
import HomeContent from './Components/HomeContent/HomeContent'
import gsap from 'gsap'

const App = () => {

  const handleMouseMove = (e)=>{
    gsap.to(".dot",{
      x:e.clientX,
      y:e.clientY,
      duration:0.5,
    })
  }

  return (
    <>
    <div className="dot"></div>
    <div className="app-container" onMouseMove={handleMouseMove}>

      <Home />
      <HomeContent/>
    </div>
    </>
  )
}

export default App