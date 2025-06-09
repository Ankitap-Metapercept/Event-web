import React from 'react';
import HeroImage from '../Images/man4.png';
import './HeroSection.css';

export default function HeroSection() {
  return (
   <section className='HeroSection pt-10 pb-0'>
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
    {/* <div className='container'>
      <div className='banner-in pt-6'>
        <div className='row align-items-end'>
          <div className='col-lg-7 mb-10'>
            <div className='banner-context text-lg-start text-center'>
              <h4>big events 2024</h4>
              <div className='selector4 display-content-center'></div>
            </div>
          </div>
        </div>
      </div>
    </div> */}
   </section>

  );
}
