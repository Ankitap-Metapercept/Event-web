import React from 'react'
import './Gallary.css';
import img1 from '../Images/blog1.jpg'
import img2 from '../Images/blog2.jpg'
import img3 from '../Images/blog3.jpg'
import img4 from '../Images/blog4.jpg'


export default function Gallary() {
  return (
    <>
    <section className='gallary'>
        <div className='container'>
            <div className='gallary-title text-center mb-5 w-75 mx-auto'>
                <h3>Event Gallary</h3>
                <h2 className='theme'>Beautiful Snapshot Of Recent <span>Events</span></h2>
            </div>


            <div className='eventgallary mb-minus'>
                <div className='row gallary-main'>
                    <div className='col-lg-4 col-md-6 p-2'>
                        <div className='gallary-item'>
                            <div className='gallary-image'>
                                <img src={img1} alt='img1' className='w-100'/>
                            </div>
                        </div>

                    </div>
                     <div className='col-lg-4 col-md-6 p-2 '>
                        <div className='gallary-item'>
                            <div className='gallary-image'>
                                <img src={img2} alt='img1' className='w-100'/>
                            </div>
                        </div>

                    </div>

                    <div className='col-lg-4 col-md-6 p-2 '>
                        <div className='gallary-item'>
                            <div className='gallary-image'>
                                <img src={img3} alt='img1' className='w-100'/>
                            </div>
                        </div>

                    </div>
                     <div className='col-lg-4 col-md-6 p-2 '>
                        <div className='gallary-item'>
                            <div className='gallary-image'>
                                <img src={img4} alt='img1' className='w-100'/>
                            </div>
                        </div>

                    </div>

                     <div className='col-lg-4 col-md-6 p-2 '>
                        <div className='gallary-item'>
                            <div className='gallary-image'>
                                <img src={img3} alt='img1' className='w-100'/>
                            </div>
                        </div>

                    </div>
                     <div className='col-lg-4 col-md-6 p-2 '>
                        <div className='gallary-item'>
                            <div className='gallary-image'>
                                <img src={img4} alt='img1' className='w-100'/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </section>
    </>
  )
}
