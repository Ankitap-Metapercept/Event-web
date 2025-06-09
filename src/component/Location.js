import React from "react";
import "./Location.css";
import { FaLocationPin } from "react-icons/fa6";
import { FaMagnifyingGlassLocation } from "react-icons/fa6";
import img1 from '../Images/pexels-wendy-wei-1190297.jpg';

export default function Location() {
  return (
    <>
      <section className="location bg-grey pb-8 mt-5">
        <div className="container">
          <div className="event-contact-main  ">
            <div className="row align-items-end">
              <div className="col-lg-6 pe-lg-4 mb-4">
                <div className="section-title mb-5 text-center text-lg-start">
                  <h3>Reach Us</h3>
                  <div className="d-flex justify-content-center justify-content-lg-start">
                    <h2>
                      Get Direction to The Event <span>Location</span>
                    </h2>
                  </div>
                </div>

                <div className="event-expo-item mb-4">
                  <div className="row align-items-center border m-0">
                    <div className="col-lg-3 bg-theme py-5 p-4">
                      <div className="event-icon text-center w-100">
                        <FaLocationPin size={50} className="icon1" />
                      </div>
                    </div>

                    <div className="col-lg-9 p-4 text-center text-lg-start">
                      <h5 className="mb-1">Galleria Mall Conference Center</h5>
                      <p>19 By Pass NR, Bali, Indonesia, BC 22196</p>
                    </div>
                  </div>
                </div>

                <div className="event-expo-item mb-4">
                  <div className="row align-items-center border m-0">
                    <div className="col-lg-3 bg-theme py-5 p-4">
                      <div className="event-icon text-center w-100">
                       <FaMagnifyingGlassLocation size={50} className="icon1"/>
                      </div>
                    </div>

                    <div className="col-lg-9 p-4 text-center text-lg-start">
                      <h5 className="mb-1">Galleria Mall Conference Center</h5>
                      <p>19 By Pass NR, Bali, Indonesia, BC 22196</p>
                    </div>
                  </div>
                </div>
              </div>

             <div className="col-lg-6 ps-lg-4 mb-4">
                <div className="map">
                    <div className="w-100">
                        <img src={img1} alt="map" className="w-100"/>
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
