import React from "react";
import img1 from "../Images/blog1.jpg";
import img2 from "../Images/blog2.jpg";
import img3 from "../Images/blog3.jpg";
import "./Articles.css";
export default function Articles() {
  return (
    <>
      <section className="event-partners pb-8 pt-5">
        <div className="container mt-5">
          <div className="section-title mb-5 w-75 mx-auto text-center">
            <h3>Our News & Articles</h3>
            <div className="selector4 d-flex justify-content-center">
              <h2>
                Our News & <span>Article</span>
              </h2>
            </div>
          </div>

          <div className="recent-articles-inners">
            <div className="row">
              <div className="col-lg-4 mb-4">
                <div class="card">
                  <img src={img1} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h4 class="card-text pt-3">
                      How To Optimize Your Blog For High Ranking
                    </h4>
                    <h3 className="pt-2"> CONTINUE LEARNING</h3>
                    <ul className="border-top w-100 d-block p-4 py-2">
                        <li>24 August</li>
                        <li>No comments</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div class="card">
                  <img src={img2} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h4 class="card-text pt-3">
                      How To Optimize Your Blog For High Ranking
                    </h4>
                    <h3 className="pt-2"> CONTINUE LEARNING</h3>
                    <ul className="border-top w-100 d-block p-4 py-2 ">
                        <li>24 August</li>
                        <li>No comments</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div class="card">
                  <img src={img3} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h4 class="card-text pt-3">
                      How To Optimize Your Blog For High Ranking
                    </h4>
                    <h3 className="pt-2"> CONTINUE LEARNING</h3>
                    <ul className="border-top w-100 d-block p-4 py-2">
                        <li>24 August</li>
                        <li>No comments</li>
                    </ul>
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
