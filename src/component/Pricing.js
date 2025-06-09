import React from "react";
import "./Pricing.css";

export default function Pricing() {
  return (
    <section className="pricing bg-grey pb-8 pt-5 mb-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-4">
            <div className="section-title text-lg-start text-center mb-5">
              <h3>Pricing tablen</h3>
              <h2>
                Explore Flexible Our Pricing <span>Plan</span>
              </h2>
            </div>
          </div>

          <div className="pricing-main justify-content-between">
            <div className="row">
              <div className="col-lg-4 mb-6">
                <div className="pricing-item text-center p-5 bg-white position-relative">
                  <div className="pricing-top"></div>
                  <h3 className="mb-0">Basic ticket</h3>
                  <p className="mb-0">stanadard package</p>
                  <div className="pricing-price py-8">
                    <h2 className="mb-0 Theme d-flex align-item-center justify-content-center">
                      <span>$</span>
                      <span>39</span>99
                    </h2>
                    <p>Person</p>
                  </div>
                  <ul className="pricing-feature-list mb-4">
                    <li className="d-block border-bottom dashed-border pb-2 mb-2">
                      second balcony seat
                    </li>

                    <li className="d-block border-bottom dashed-border pb-2 mb-2">
                      snack And softdrink
                    </li>

                    <li className="d-block border-bottom dashed-border pb-2 mb-2">
                      Certificate
                    </li>

                    <li className="d-block border-bottom dashed-border pb-2 mb-2">
                      Private Access
                    </li>
                  </ul>
                  <div className="pricing-btn mb-1">
                    <button type="button" className="p-2">Purchase</button>
                  </div>
                  <small className="pt-3">
                    *please read our team condition and before order ticket
                  </small>
                </div>
              </div>


{/* card2*/}
              <div className="col-lg-4 mb-6">
                <div className="pricing-item text-center p-5 position-relative bg-theme1">
                  <div className="pricing-top"></div>
                  <h3 className="mb-0 white">Silver Ticket</h3>
                  <p className="mb-0">Pro Package</p>
                  <div className="pricing-price py-8">
                    <h2 className="mb-0 Theme d-flex align-item-center justify-content-center">
                      <span>$</span>
                      <span>59</span>99
                    </h2>
                    <p>Person</p>
                  </div>
                  <ul className="pricing-feature-list mb-4">
                    <li className="d-block border-bottom dashed-border pb-2 mb-2 text-white">
                      second balcony seat
                    </li>

                    <li className="d-block border-bottom dashed-border pb-2 mb-2 text-white">
                      snack And softdrink
                    </li>
                     <li className="d-block border-bottom dashed-border pb-2 mb-2 text-white">
                      snack And softdrink
                    </li>

                    <li className="d-block border-bottom dashed-border pb-2 mb-2 text-white">
                      Certificate
                    </li>

                    <li className="d-block border-bottom dashed-border pb-2 mb-2 text-white">
                      Private Access
                    </li>
                  </ul>
                  <div className="pricing-btn mb-1">
                    <button type="button" className="p-2">Purchase</button>
                  </div>
                  <small className="pt-3 text-white">
                    *please read our team condition and before order ticket
                  </small>
                </div>
              </div>
{/* card2*/}
             
             {/* card3*/}

              
              
                           <div className="col-lg-4 mb-6">
                <div className="pricing-item text-center p-5 bg-white position-relative">
                  <div className="pricing-top"></div>
                  <h3 className="mb-0">Basic ticket</h3>
                  <p className="mb-0">stanadard package</p>
                  <div className="pricing-price py-8">
                    <h2 className="mb-0 Theme d-flex align-item-center justify-content-center">
                      <span>$</span>
                      <span>199</span>99
                    </h2>
                    <p>Person</p>
                  </div>
                  <ul className="pricing-feature-list mb-4">
                    <li className="d-block border-bottom dashed-border pb-2 mb-2">
                      second balcony seat
                    </li>

                    <li className="d-block border-bottom dashed-border pb-2 mb-2">
                      snack And softdrink
                    </li>

                    <li className="d-block border-bottom dashed-border pb-2 mb-2">
                      Certificate
                    </li>

                    <li className="d-block border-bottom dashed-border pb-2 mb-2">
                      Private Access
                    </li>
                  </ul>
                  <div className="pricing-btn mb-1">
                    <button type="button" className="p-2" >Purchase</button>
                  </div>
                  <small className="pt-3">
                    *please read our team condition and before order ticket
                  </small>
                </div>
              </div>





               {/* card3*/}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
