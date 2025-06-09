import React from "react";
import img1 from "../Images/1.jpg";
import img2 from "../Images/testi-image.png";

export default function Testimonials() {
  return (
    <>
      <section className="testimonials pt-18 pb-7 bg-grey mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="section-title text-center text-lg-start">
                <h3>Our Testimonials</h3>
                <div className="selector4">
                  <h2>
                    What People Say About <span>Eventiz</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="row align-items-center mt-5">
            {/* Left Side: Testimonial Text */}
            <div className="col-12 col-md-12 col-lg-7 pe-lg-5 bg-white">
              <div className="shadow-lg p-5">
                <h1 className="fw-bold display-6 text-muted">“”</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text. Dignissimos maxime velit unde inventore
                  quasi vero dolorem.
                </p>

                <div className="schedual-speaker d-flex p-4 align-items-center text-center text-lg-start w-100">
                  <img
                    src={img1}
                    alt="Jessus Holland"
                    className="rounded-circle"
                    width="60"
                    height="60"
                  />
                  <div className="speaker-content ms-3 text-start">
                    <h6 className="theme mb-0">Jessus Holland</h6>
                    <small>Host & Speaker</small>
                  </div>
                </div>
              </div>
            </div>

          
            <div className="col-12 col-lg-5 mt-4 mt-lg-0">
              <img src={img2} alt="testimonial" className="w-100 rounded" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
