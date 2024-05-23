import Link from "next/link";
import React from "react";
import { FiArrowRight } from "react-icons/fi";

export default function PaymentFeature() {
  return (
    <section className="benifits-area bg-white-light pt-60 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="benifits-left position-relative mb-5">
              <div>
                <img
                  src="/smiling-girl.png"
                  className="img-fluid text-center"
                  alt="girl"
                />
              </div>
              <ul className="list-unstyled bi-right-shape">
                <li>
                  <img src="/bi-shape.png" alt="shape" />
                </li>
                <li>
                  <img src="/bi-shape-2.png" alt="shape" />
                </li>
                <li>
                  <img src="/bi-shape-3.png" alt="shape" />
                </li>
                <li>
                  <img src="/bi-pink-dot.png" alt="shape" />
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="benifits-right mt-5 mt-lg-0">
              <div className="benifits-right-content">
                <h2 className="mb-3">
                  One App with thousands of{" "}
                  <span className="gr-text">Benefits</span>
                </h2>
                <p className="m-0">
                  Globally expedite sticky platforms whereas end-to-end vortals.
                  Energistically synergize emerging . Monotonectally incubate
                  bleeding-edge e-business
                </p>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="single-benifit mb-4 mb-lg-0">
                    <div className="benifit-icon one">
                      <img src="/bi-1.png" alt="icon" />
                    </div>
                    <h5>Easy Interface Design</h5>
                    <p className="m-0">
                      Globally expedite stick Energisticall synergize emerging
                      generation go incubate bleeding-edge.
                    </p>
                    <Link href="/about-us">
                      <a className="link-with-icon text-decoration-none">
                        Explore More{" "}
                        <i>
                          <FiArrowRight />
                        </i>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="single-benifit">
                    <div className="benifit-icon two">
                      <img src="/bi-2.png" alt="icon" />
                    </div>
                    <h5>Easy Sign Up</h5>
                    <p className="m-0">
                      Globally expedite stick Energisticall synergize emerging
                      generation go incubate bleeding-edge.
                    </p>
                    <Link href="/about-us">
                      <a className="link-with-icon text-decoration-none">
                        Explore More{" "}
                        <i>
                          <FiArrowRight />
                        </i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
