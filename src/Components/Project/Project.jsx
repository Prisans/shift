import React from 'react'
import './Project.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Project = () => {

  const tl = gsap.timeline({repeat:-1})

  useGSAP(()=>{
    tl.to(".up-txt" , {
      x:1000,
      duration:1
    })
  })

  return (
    <div className="project-container">

        <div className="project-upper-container">
            <p>OUR TERRITORY <br /> AND FIELDS</p>
            <button>ABOUT US</button>
        </div>

        <div className="project-lower-container">
            <div className="project-lower-text">
            <h2 className='up-txt'>Lorem, ipsum dolor sit amet consec</h2>
            <h2 className='low-txt'>Lorem, ipsum dolor sit amet consec</h2>
            </div>
        </div>

    </div>
  )
}

export default Project