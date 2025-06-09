import React from "react";
import "./Upcomingworkshop.css";
import img from "../Images/1.jpg";
import img2 from "../Images/2.jpg";
import img3 from "../Images/3.jpg";
import { HiOutlineLocationMarker } from "react-icons/hi";

export default function Upcomingworkshop() {
  return (
    <>
      <section className="event-schedule pb-8 about-after pt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-4 text-center">
              <div className="section-title mb-5 text-center text-lg-start ">
                <h4 className="Theme pt-5">Event Conference Organization </h4>
                <div className="selector pt-3">
                  <h2>
                    List Of Planned Events They Are <span>EXPECTED</span>
                  </h2>
                </div>
              </div>
            </div>

            <div className="schedule-item">
              <div className="about-image mb-4 bg-white">
                <div className="row">
                  <div className="col-lg-3 d-flex">
                    <div className="about-content1 text-center text-lg-start py-8 p-4 bg-theme w-100">
                      <small className="text-white mb-3">
                        8:00 Am - 9:00 AM
                      </small>
                      <h4 className="text-white mb-0">Opening Ceremony</h4>
                    </div>
                  </div>

                  <div className="col-lg-6 d-flex">
                    <div className="schedual-content text-lg-start text-center py-8">
                      <h4>Introduce the events</h4>
                      <p>
                        {" "}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                        dapibus leo.
                      </p>
                      <div className="d-flex gap-3">
                        <div className="d-flex gap-1">
                          <div className="">
                            <HiOutlineLocationMarker
                              size={25}
                              className="Theme1"
                            />
                          </div>
                          <div className="">
                            <p>Exploration Hall</p>
                          </div>
                        </div>
                        <div className="d-flex">
                          <div className="gap-1">
                            <HiOutlineLocationMarker
                              size={25}
                              className="Theme1"
                            />
                          </div>
                          <div className="">
                            <p>hall 01</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 d-flex">
                    <div className="schedual-speaker d-flex p-4 align-items-center text-center text-lg-start w-100 border-start">
                      <img src={img} alt="profile" className="rounded-circle" />
                      <div className=" speaker-content ms-3 ">
                        <h6 className="theme mb-0">Jessus Holland</h6>
                        <small>Host & speaker</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="about-image mb-4 bg-white">
                <div className="row">
                  <div className="col-lg-3 d-flex mt-3">
                    <div className="about-content text-center text-lg-start py-8 p-4 bg-theme w-100">
                      <small className="text-white mb-3">
                        8:00 Am - 9:00 AM
                      </small>
                      <h4 className="text-white mb-0">Opening Ceremony</h4>
                    </div>
                  </div>

                  <div className="col-lg-6 d-flex">
                    <div className="schedual-content text-lg-start text-center py-8">
                      <h4>Introduce the events</h4>
                      <p>
                        {" "}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                        dapibus leo.
                      </p>
                      <div className="d-flex gap-3">
                        <div className="d-flex gap-1">
                          <div className="">
                            <HiOutlineLocationMarker
                              size={25}
                              className="Theme1"
                            />
                          </div>
                          <div className="">
                            <p>Exploration Hall</p>
                          </div>
                        </div>
                        <div className="d-flex">
                          <div className="">
                            <HiOutlineLocationMarker
                              size={25}
                              className="Theme1"
                            />
                          </div>
                          <div className="">
                            <p>hall 01</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 d-flex">
                    <div className="schedual-speaker d-flex p-4 align-items-center text-center text-lg-start w-100 border-start">
                      <img
                        src={img2}
                        alt="profile"
                        className="rounded-circle"
                      />
                      <div className=" speaker-content ms-3 ">
                        <h6 className="theme mb-0">Ricky Malone</h6>
                        <small>Host & speaker</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="about-image mb-4 bg-white">
                <div className="row">
                  <div className="col-lg-3 d-flex">
                    <div className="about-content1 text-center text-lg-start py-8 p-4 bg-theme w-100">
                      <small className="text-white mb-3">
                        8:00 Am - 9:00 AM
                      </small>
                      <h4 className="text-white mb-0">Opening Ceremony</h4>
                    </div>
                  </div>

                  <div className="col-lg-6 d-flex">
                    <div className="schedual-content text-lg-start text-center py-8">
                      <h4>Introduce the events</h4>
                      <p>
                        {" "}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                        dapibus leo.
                      </p>
                     <div className="d-flex gap-3">
                        <div className="d-flex gap-1">
                          <div className="">
                            <HiOutlineLocationMarker
                              size={25}
                              className="Theme1"
                            />
                          </div>
                          <div className="">
                            <p>Exploration Hall</p>
                          </div>
                        </div>
                        <div className="d-flex">
                          <div className="">
                            <HiOutlineLocationMarker
                              size={25}
                              className="Theme1"
                            />
                          </div>
                          <div className="">
                            <p>hall 01</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 d-flex">
                    <div className="schedual-speaker d-flex p-4 align-items-center text-center text-lg-start w-100 border-start">
                      <img src={img} alt="profile" className="rounded-circle" />
                      <div className=" speaker-content ms-3 ">
                        <h6 className="theme mb-0">Jassus Holland</h6>
                        <small>Host & speaker</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="about-image mb-4 bg-white">
                <div className="row">
                  <div className="col-lg-3 d-flex">
                    <div className="about-content text-center text-lg-start py-8 p-4 bg-theme w-100">
                      <small className="text-white mb-3">
                        8:00 Am - 9:00 AM
                      </small>
                      <h4 className="text-white mb-0">Opening Ceremony</h4>
                    </div>
                  </div>

                  <div className="col-lg-6 d-flex">
                    <div className="schedual-content text-lg-start text-center py-8">
                      <h4>Introduce the events</h4>
                      <p>
                        {" "}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                        dapibus leo.
                      </p>
                      <div className="d-flex gap-3">
                        <div className="d-flex gap-1">
                          <div className="">
                            <HiOutlineLocationMarker
                              size={25}
                              className="Theme1"
                            />
                          </div>
                          <div className="">
                            <p>Exploration Hall</p>
                          </div>
                        </div>
                        <div className="d-flex">
                          <div className="">
                            <HiOutlineLocationMarker
                              size={25}
                              className="Theme1"
                            />
                          </div>
                          <div className="">
                            <p>hall 01</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 d-flex">
                    <div className="schedual-speaker d-flex p-4 align-items-center text-center text-lg-start w-100 border-start">
                      <img
                        src={img3}
                        alt="profile"
                        className="rounded-circle"
                      />
                      <div className=" speaker-content ms-3 ">
                        <h6 className="theme mb-0">Nelly Bell</h6>
                        <small>Host & speaker</small>
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
