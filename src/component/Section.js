import React from "react";
import { IoSettings } from "react-icons/io5";
import { IoPeople } from "react-icons/io5";
import { FaFontAwesomeFlag } from "react-icons/fa";
import './Section.css';

export default function Section() {
  return (
    <>
      <section className="About-us pt-5 pb-8">
        <div className="container">
          <div className="about-image-box">
            <div className=" row align-items-center justify-content-between">
              <div className="col-lg-7 pe-lg-4">
                <div className="about-feature">
                  <div className="row align-item-center">
                    <div className="col-lg-6 col-12">
                      <div className="card text-center m-2 p-3 border border-0 shadow-lg p-5 w-100">
                        <div className="card-body">
                          <IoPeople size={50} className="icon" />
                          <h3 className="pt-2">Event Conference</h3>
                          <p>Duis aute irure dolor in reprehenderit.</p>
                          <div className="row d-flex">
                            <button
                              type="button"
                              className="btn bg-transparent text-danger "
                            >
                              Learn More
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="card text-center m-2 border border-0 shadow-lg mt-5 p-5 w-100 ">
                        <div className="card-body">
                          <IoSettings size={50} className="icon" />
                          <h3 className="pt-2">Culture Leadership</h3>
                          <p>This is some text within a card body.</p>
                          <div className="row d-flex">
                            <button
                              type="button"
                              className="btn bg-transparent text-danger "
                            >
                              Learn More
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>


                    <div className="col-lg-6  text-center  card3">

                     <div className="card text-center m-2 p-5 border-0 shadow-lg w-100">

                        <div className="card-body">
                          <FaFontAwesomeFlag size={50} className="icon" />
                          <h3 className="pt-2">Digital Marketing</h3>
                          <p>This is some text within a card body.</p>
                          <div className="row d-flex">
                            <button
                              type="button"
                              className="btn bg-transparent text-danger">
                              Learn More
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 ps-lg-4">
                <div className="about-content text-lg-start text-center mb-4">
                  <div className="selector4 justify-content-center">
                    <h2>Why You Should Join The <span>Events?</span></h2>
                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ip suspendisse ultrices gravida. Risus commodo</p>
                    <button type="button" className="p-2">Join Event</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
