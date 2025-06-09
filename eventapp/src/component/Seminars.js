import React from 'react'
import './Seminars.css';
import img from '../Images/busi-3.jpg';
import img2 from '../Images/busi-2.jpg';
import img3 from '../Images/busi-1.jpg';
export default function Seminars() {
  return (
    <>
   <div className='pt-5'>
     <div className='container'>
        <div className='row'>
            <div className='col-12 col-md-6 col-lg-4 head-section text-center'>
                <h3>Conference, Seminars & <span>Events</span></h3>
                <p className>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ip suspendisse ultrices gravida. Risus commodo</p>
                <button type='button'>Discover Now</button>
            </div>
            <div className='col-12 col-md-6 col-lg-4 pb-5'>
                <div className='img-sec'>
                    <img src={img} alt='img' className='seminar-img'/>
                </div>
            </div>

            <div className='col-12 col-md-6 col-lg-4'>
                <div className='img-sec2'>
                    <img src={img2} alt='img' className='busi2'/>
                </div>
                <div className='img-sec2 pb-5'>
                    <img src={img3} alt='img'className='busi2'></img>
                </div>
            </div>
        </div>
     </div>
   </div>

   <div className='sub-section pt-5 pb-5'>
    <div className='container'>
        <div className='row'>
            <div className='col-12 col-md-4 col-lg-3 text-center'>
                <h1>25</h1>
                <h2>Daily Visitors</h2>
            </div>
            <div className='col-12 col-md-4 col-lg-3 text-center'>
                <h1>6</h1>
                <h2>Delivery Monthly</h2>
            </div>
            <div className='col-12 col-md-4 col-lg-3 text-center'>
                <h1>5</h1>
                <h2>Positive feedback</h2>
            </div>
            <div className='col-12 col-md-4 col-lg-3 text-center'>
                <h1>11</h1>
                <h2>Award winning</h2>
            </div>
        </div>
    </div>
   </div>
    </>
  )
}
