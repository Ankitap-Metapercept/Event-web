import React from 'react'
import './Upcomingworkshop.css';
import img from '../Images/1.jpg'

export default function Upcomingworkshop() {
  return (
    <>
   <div className='container section1 pt-5 ' >
   <div className='row'>
    <div className='col-12 col-md-12-col-lg-5 pt-5'>
         <h2>Event Conference Organization</h2>
    <h1>List Of Planned Events Thay Are <span>Expected</span></h1>
    </div>
   </div>
   </div>

   <div className='container pt-5 pb-5'>
   <div className='row'>
        <div className='col-12 col-md-3 col-lg-3 block-1'>
        <div className='box p-3'>
            <p className='text-white'>8:00-9:00</p>
            <h3 className='text-white'>Opening Ceremony</h3>
        </div>
        </div>      

            <div className='col-12 col-md-3 col-lg-6 block-2'>
                <h3>Introduce the Event</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div> 
          

            <div className='col-12 col-md-3 col-lg-3 block-3 d-flex'>
                <img src={img} alt='profile1' className='rounded-circle '/>
                <h3 className=''>Jessus Holland</h3>
                <p>Host & Speaker</p>
            </div>
       
</div>
</div>

</>

  )
}
