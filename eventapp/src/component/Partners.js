import React from "react";
import img1 from "../Images/cl-1.png";
import img2 from "../Images/cl-2.png";
import img3 from "../Images/cl-3.png";
import img4 from "../Images/cl-4.png";

import "./Partners.css";

export default function Partners() {
  return (
    <>
      <section className="event-partners pb-8 pt-5">
        <div className="container mt-5">
          <div className="section-title mb-5 w-75 mx-auto text-center">
            <h3>Our partners</h3>
            <div className="selector4 d-flex justify-content-center">
              <h2 className="mb-0">
                Our perfect partners and <span>Sponsers</span>
              </h2>
            </div>
          </div>

          <div className="partners-inners">
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-4">
                <div className="partner-list border">
                  <img src={img1} alt="profile-image" />
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-4">
                <div className="partner-list border">
                  <img src={img2} alt="profile-image" />
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-4">
                <div className="partner-list border">
                  <img src={img3} alt="profile-image" />
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-4">
                <div className="partner-list border">
                  <img src={img4} alt="profile-image" />
                </div>
              </div>
               <div className="col-lg-3 col-md-6 mb-4">
                <div className="partner-list border">
                  <img src={img4} alt="profile-image" />
                </div>
              </div>
               <div className="col-lg-3 col-md-6 mb-4">
                <div className="partner-list border">
                  <img src={img3} alt="profile-image" />
                </div>
              </div>
               <div className="col-lg-3 col-md-6 mb-4">
                <div className="partner-list border">
                  <img src={img2} alt="profile-image" />
                </div>
              </div>
               <div className="col-lg-3 col-md-6 mb-4">
                <div className="partner-list border">
                  <img src={img1} alt="profile-image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
