import React from 'react';
import './Event.css';

export default function Event() {
  return (
    <div className='event'>
      <div className='container'>
        <div className='row'>

          <div className='col-12 col-md-6 col-lg-3 '>
            <div className="card text-center m-2 p-3 border border-3">
              <div className="card-body">
                <h3>Event Conference</h3>
                <p >This is some text within a card body.</p>
                <button type='button' className='btn bg-transparent text-danger'>Learn More</button>
              </div>
            </div>
          </div>

          <div className='col-12 col-md-6 col-lg-3 card2'>
            <div className="card text-center m-2 p-3 border border-3">
              <div className="card-body">
                <h3>Event Conference</h3>
                <p>This is some text within a card body.</p>
                <button type='button' className='btn bg-transparent text-danger '>Learn More</button>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-6 col-lg-6 Head-Section pt-5'>
            <div className="m-2 p-3">
              <h1 className='text-dark'>Why You Should Join The <span>Events</span></h1>
              <p className='text-dark'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ip suspendisse ultrices gravida. Risus commodo</p>
              <button type="button">Join event</button>
            </div>
          </div>

          <div className='col-12 col-md-6 col-lg-3 pt-1 card-3 '>
            <div className="card text-center m-2 p-3 border border-3 ">
              <div className="card-body ">
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
