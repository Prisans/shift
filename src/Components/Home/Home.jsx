import React from 'react'
import './Home.css'
import gsap from 'gsap'

const Home = () => {

  const handleMouseMove = (e)=>{
    gsap.to(".dot",{
      x:e.clientX,
      y:e.clientY,
      duration:0.5,
    })
  }

  return (
    <div className="home-container" onMouseMove={handleMouseMove}>
      <div className="dot">

      </div>

        <div className="home-nav">

            <div className="nav-logo">
              <p>THE SHIFT</p>
            </div>

            <div className="nav-navbar">
              <ul>
                <li>HOME</li>
                <li>PROJECT</li>
                <li>RESEARCH</li>
                <li>ABOUT</li>
              </ul>
            </div>

        </div>

        <div className="home-content">
            <h1><span>EXPLORING</span> <br /> <span>THE SHIFT</span> <br /> <span>OF TODAY</span></h1>
        </div>
    </div>
  )
}

export default Home