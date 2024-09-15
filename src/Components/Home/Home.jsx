import React from 'react'
import './Home.css'
import gsap from 'gsap'

const Home = () => {

  

  const handleMouseEnter = ()=>{
    gsap.to(".dot",{
      scale:9,
      duration:0.5,
      background : "rgba(255, 255, 255, 0.1)",
      backdropFilter:"blur(5px)",
      webkitBackdropFilter: "blur(10px)",
      borderRadius:"15px",
      // border: "1px solid rgba(255, 255, 255, 0.2)"
    })

  }

  const handleMouseLeave = ()=>{
    gsap.to(".dot",{
      scale:1,
      duration:0.5,
      background : "red",
    })
  }

  return (
   <> 
    <div className="home-container">
      

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

        <div className="home-content" >
            <h1 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='h1-text'><span>EXPLORING</span> <br /> <span>THE SHIFT</span> <br /> <span>OF TODAY</span></h1>
        </div>
    </div>
    </>
  )
}

export default Home