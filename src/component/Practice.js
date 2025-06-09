import React from "react";
import { IoSettings } from "react-icons/io5";
import { IoPeople } from "react-icons/io5";
import { FaFontAwesomeFlag } from "react-icons/fa";
import img from '../Images/busi-1.jpg'
import img2 from '../Images/busi-2.jpg';
import img3 from '../Images/busi-3.jpg';
import './Practice.css';

export default function Practice() {
  return (
    <>
      <section className="About-us pt-5 pb-8">
        <div className="container">
          <div className="about-image-box">
            <div className=" row align-items-center justify-content-between">
              <div className="col-lg-5 ps-lg-4">
                <div className="about-content text-lg-start text-center mb-4">
                  <div className="selector4 justify-content-center">
                    <h2>
                      Why You Should Join The <span>Events?</span>
                    </h2>
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ip suspendisse ultrices gravida. Risus
                      commodo
                    </p>
                    <button type="button" className="p-2">
                      Join Event
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 pe-lg-4">
                <div className="about-feature">
                  <div className="row align-item-center">
                    <div className="col-lg-6 col-12 card1">
                      <div className="text-center">
                        <div className="pb-5">
                          <img src={img3} alt="image1"  className="img-fluid"/>
                        </div>
                        
                      </div>
                    </div>

                    <div className="col-lg-6  text-center ">
                      <div className="text-center">
                        <div className="pb-4">
                          <img src={img2} alt="image1"  className="img-fluid"/>
                        </div>
                        
                      </div>
                      <div className="text-center">
                        <div className="">
                          <img src={img} alt="image1"  className="img-fluid"/>
                        </div>
                        
                      </div>
                      
                    </div>
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
