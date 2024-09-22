import React from 'react'
import Home from './Components/Home/Home'
import './App.css'
import HomeContent from './Components/HomeContent/HomeContent'
import gsap from 'gsap'
import Project from './Components/Project/Project'
import Footer from './Components/Footer/Footer'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const App = () => {

  useGSAP(()=>{
    const tl = gsap.timeline()

    tl.from(".h1-text span" , {
      duration: 5,
      // rotation: 15,     // Rotation degree
      ease: "back-out", // Smooth easing
      opacity: 0,         // Fades in from 0 opacity
      // y: 50,               // Moves slightly upwards from bottom
      // stagger:1
    })

    

  })

  useGSAP(()=>{
    gsap.from(".home-lower-content p" , {
      y:60,
      opacity:0,
      duration:0.5,
      ease:"linear",
      scrollTrigger: {
        trigger: ".home-upper-content",  // Element that triggers the animation
        start: "top 50%",                    // When the top of the element reaches 80% of the viewport
        end: "bottom 20%",                   // End when the bottom of the element reaches 20% of the viewport
        toggleActions: "play none none none", // Controls what happens on enter/leave
        scrub: true,
      }
    })

    gsap.from(".home-lower-content button" , {
      y:60,
      opacity:0,
      duration:0.5,
      ease:"linear",
      scrollTrigger: {
        trigger: ".home-upper-content",  // Element that triggers the animation
        start: "top 70%",                    // When the top of the element reaches 80% of the viewport
        end: "bottom 10%",                   // End when the bottom of the element reaches 20% of the viewport
        toggleActions: "play none none none", // Controls what happens on enter/leave
        scrub: true,
      }
    })

    gsap.fromTo(".footer-container-middle h1", 
      { rotationX: 180, opacity: 0 , duration : 0.5,
        scrollTrigger: {
          trigger: ".footer-container",  // Element that triggers the animation
          start: "top 0%",                    // When the top of the element reaches 80% of the viewport
          end: "bottom 20%",                   // End when the bottom of the element reaches 20% of the viewport
          toggleActions: "play none none none", // Controls what happens on enter/leave
          scrub: true,
        }
      },  // Starting state: rotated by 90 degrees on z-axis and hidden
      { rotationX: 0, opacity: 1, duration: 1.5, ease: "power3.out" , duration : 1,
      scrollTrigger: {
        trigger: ".footer-container",  // Element that triggers the animation
        start: "top 50%",                    // When the top of the element reaches 80% of the viewport
        end: "bottom 20%",                   // End when the bottom of the element reaches 20% of the viewport
        toggleActions: "play none none none", // Controls what happens on enter/leave
        scrub: true,
      } } // End state: normal rotation and fully visible
    )

    
  })

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
      <Project/>
      <Footer/>
    </div>
    </>
  )
}

export default App