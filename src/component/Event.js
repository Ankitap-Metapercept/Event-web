import React from 'react';
import './Event.css';
import { IoSettings } from "react-icons/io5";
import { IoPeople } from "react-icons/io5";
import { FaFontAwesomeFlag } from "react-icons/fa";

export default function Event() {
  return (
    <div className='event'>
      <div className='container'>
        <div className='row'>

          <div className='col-12 col-md-6 col-lg-3 card-1 '>
            <div className="card text-center m-2 p-3 border border-0 shadow-lg p-5 w-100">
              <div className="card-body">
               <IoSettings size={50} className='icon' />
                <h3 className='pt-2'>Event Conference</h3>
                <p >This is some text within a card body.</p>
                <button type='button' className='btn bg-transparent text-danger'>Learn More</button>
              </div>
            </div>
          </div>

          <div className='col-12 col-md-6 col-lg-3 card2 '>
            <div className="card text-center m-2 p-3 border border-0 shadow-lg p-5 w-100">
              <div className="card-body">
                <IoPeople size={50} className='icon' />
                <h3>Event Conference</h3>
                <p>This is some text within a card body.</p>
                <div className='row d-flex'>
                  <button type='button' className='btn bg-transparent text-danger '>Learn More</button>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-6 col-lg-6 Head-Section pt-5 text-center'>
            <div className="m-2 p-3 ">
              
              <h1 className='text-dark'>Why You Should Join The <span>Events ?</span></h1>
              <p className='text-dark'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ip suspendisse ultrices gravida. Risus commodo</p>
              <button type="button">Join event</button>
            </div>
          </div>

          <div className='col-12 col-md-6 col-lg-3 card-3  '>
            <div className="card text-center  border border-0 shadow-lg p-5 w-100">
              <div className="card-body ">
                 <FaFontAwesomeFlag size={50} className='icon' />
                <h3>Event Conference</h3>
                <p>This is some text within a card body.</p>
                <button type='button' className='btn bg-transparent text-danger'>Learn More</button>
              </div>
            </div>
          </div>
 
        </div>
      </div>
    </div>
  );
}
