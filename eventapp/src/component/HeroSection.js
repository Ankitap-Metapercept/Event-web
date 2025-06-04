import React from 'react';
import HeroImage from '../Images/man4.png';
import './HeroSection.css';

export default function HeroSection() {
  return (
   <div className='HeroSection'>
    <div className='container py-5 '>
    <div className='row'>
    <div className='col-12 col-md-6 '>
      <div className='Heading'>
        
        <h1>World's Biggest 2023 Conference </h1>
        <p className='text-white'>
          Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>
    </div>
    <div className='col-12 col-md-6 text-center Image-Section'>
      <img src={HeroImage} alt="Hero" className='img-fluid Hero-image' />
    </div>
  </div>
</div>
   </div>

  );
}
