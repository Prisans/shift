import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">

      <div className="footer-container">

        <div className="footer-container-top">
          <p>BASED IN TOKYO</p>
          <p>WORKING WORLDWIDE</p>
        </div>

        <div className="footer-container-middle">
          <h1>GET <span>IN</span> TOUCH</h1>
          <button>CONTACT</button>
        </div>

        <div className="footer-container-bottom">
          <p>Copyright @2024</p>
        </div>

      </div>

    </div>
  )
}

export default Footer