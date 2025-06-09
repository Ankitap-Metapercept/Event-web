import React from "react";
import img from "../Images/logo-white.png";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import "./Footer.css";
import { IoIosArrowForward } from "react-icons/io";

export default function Footer() {
  return (
    <>
      <section className="footer pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 pe-lg-4">
              <div className="footer-about">
                <img src={img} alt="logo" />
                <p className="mt-3 mb-3 text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
                  suspendisse leo neque iaculis molestie sagittis maecenas
                  aenean eget molestie sagittis.
                </p>
                <div className="social-links">
                  <ul>
                    <li>
                      <a href="#" aria-label="Facebook">
                        <FaFacebookSquare />
                      </a>
                    </li>
                    <li>
                      <a href="#" aria-label="Twitter">
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="#" aria-label="Instagram">
                        <FaInstagramSquare />
                      </a>
                    </li>
                    <li>
                      <a href="#" aria-label="Facebook">
                        <FaFacebookSquare />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 mb-5">
              <div className="footerlinks">
                <h4 className="text-white">Quick Links</h4>
                   <li className="pb-2">Services</li>
                  <li className="pb-2">Speakers</li>
                  <li className="pb-2">Schedule</li>
                  <li className="pb-2">Ticket Pricing</li>
                  <li className="pb-2">Contact US</li> 
              
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-5">
              <h4 className="text-white pb-2">Get In Touch</h4>
              <p className="text-white">
                1616 Broadway NY, New York United States of America
              </p>
              <div className="sec d-flex align-items-center mb-3">
                <IoCall className="text-white" size={30} />
                <div className="footercontent ps-3">
                  <h6 className="text-white mb-0">1234567890</h6>
                  <small className="text-white">for information</small>
                </div>
              </div>
              <div className="sec d-flex align-items-center mb-3">
                
                <IoMdMail className="text-white" size={30} />
                <div className="footercontent ps-3">
                  <h6 className="text-white mb-0">info@eventiz.com</h6>
                  <small className="text-white">Email Address</small>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-5">
              <div className="footerlinks">
                <h4 className="text-white mb-4">Subscribe To Our Newsletter</h4>
                <div className="newsletter-forms">
                  <p className="mb-3 text-white">
                    New subscribers get 10% off your next order
                  </p>
                  <form>
                    <input
                      type="text"
                      placeholder="Email address"
                      className="w-100 mb-2 p-3"
                    ></input>
                    <button type="button" className=" p-3 w-100">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="footer-copy-write">
        <div className="container-fluid">
          <p className="m-0 text-white text-center py-3">
            Copyright ©2023 Eventiz. All Rights Reserved Copyright
          </p>
        </div>
      </div>
    </>
  );
}
