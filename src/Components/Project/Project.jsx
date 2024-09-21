import React from 'react';
import './Project.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Project = () => {
  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1, ease: 'none' });

    // Move the two duplicated texts seamlessly
    tl.fromTo(
      '.text-wrapper',
      { x: '0%' }, // Start position
      {
        x: '-100%', // Move it to the left by 100% of the container width
        duration: 47, // Control the speed
        ease: 'linear', // Consistent scrolling speed
        repeat: -1, // Repeat indefinitely
      }
    );
  });

  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1, ease: 'none' });

    // Move the two duplicated texts seamlessly
    tl.fromTo(
      '.text-wrapper-two',
      { x: '-100%' }, // Start position
      {
        x: '0%', // Move it to the left by 100% of the container width
        duration: 47, // Control the speed
        ease: 'linear', // Consistent scrolling speed
        repeat: -1, // Repeat indefinitely
      }
    );
  });

  return (
    <div className="project-container">
      <div className="project-upper-container">
        <p>OUR TERRITORY <br /> AND FIELDS</p>
        <button>ABOUT US</button>
      </div>

      <div className="project-lower-container">


        <div className="project-lower-text">
          <div className="text-wrapper">
            <h2 className="up-txt">
              SHIFT PRODUCE DIRECTION DESIGN TECHNOLOGY CONSULTING BRANDING STRATEGY
            </h2>
            <h2 className="up-txt">
              SHIFT PRODUCE DIRECTION DESIGN TECHNOLOGY CONSULTING BRANDING STRATEGY
            </h2>
          </div>
        </div>


        <div className="project-lower-text-two">
          <div className="text-wrapper-two">
            <h2 className="low-txt">
            SPORTS EVENT PRODUCT ENTERTAINTMENT FASHION MUSIC FOOD EDUCATION SPACE
            </h2>
            <h2 className="low-txt">
              SPORTS EVENT PRODUCT ENTERTAINTMENT FASHION MUSIC FOOD EDUCATION SPACE
            </h2>
          </div>
        </div>




      </div>
    </div>
  );
};

export default Project;
