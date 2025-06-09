import React from 'react';
import HeroImage from '../Images/man4.png';
import './HeroSection.css';

export default function HeroSection() {
  return (
   <>
<section className='banner pb-5 sm:overflow-hidden'>
    <div className='container '>
      <div className='banner-inner'>
        <div className='row '>
          <div className='banner-content col-lg-7'>
            <div className=' text-lg-start text-align-center text-center'>
              <h4 className='theme text-white'>Big Events 2022</h4>
              <div className='selector4 '>
                <h1  className='text-white'><span className='text-white'>Big Events 2023</span></h1>

              </div>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
          </div>

          <div className='col-lg-5'>
            <div className='banner-image w-100'>
              <img src={HeroImage} alt='heroimage' className='img-fluid w-100'/>
            </div>
          </div>
        </div>

      </div>
    </div>

   </section>
   </>

  );
}
