import React from 'react'
import img from '../Images/img1.jpg'

export default function p() {
  return (
    <section className='speaker pt-5'>
         <div className='container text-center'>
            <div className='row'>
               <div className="col-lg-4 col-md-4 col-12 d-flex align-items-center justify-content-center">
  <img src={img} alt="example" className="img-fluid" />
</div>

              
            </div>
         </div>
    </section>
  )
}
