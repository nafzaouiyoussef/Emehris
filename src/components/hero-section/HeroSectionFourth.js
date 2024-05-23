/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import HeroTitle from "../common/HeroTitle";

const HeroSectionFourth = ({ bgDark }) => {
  return (
    <section
      className={`hero-section ptb-120 ${bgDark ? "bg-dark" : "bg-white"}`}
      style={{
        background:
          "url('/shape/dot-dot-wave-shape.svg')no-repeat bottom center",
      }}
    >
      <div className="container">
        <div className="row align-items-center justify-content-lg-between">
          <div className="col-xl-5 col-lg-5">
            <div className="hero-content-wrap mt-5 text-center text-xl-start text-lg-start">
              <HeroTitle
                title="Advanced Solutions for Your Business"
                desc="Proactively coordinate quality quality vectors vis-a-vis
                  supply chains client-centric web services."
              />
              <div className="hero-subscribe-form-wrap pt-4 position-relative m-auto m-xl-0 d-none d-md-block d-lg-block d-xl-block">
                <form
                  id="subscribe-form"
                  name="email-form"
                  className="hero-subscribe-form d-block d-lg-flex d-md-flex"
                >
                  <input
                    type="email"
                    className="form-control me-2"
                    name="Email"
                    data-name="Email"
                    placeholder="Enter Your Email Address"
                    id="email-address"
                    required=""
                  />
                  <input
                    type="button"
                    value="Subscribe"
                    data-wait="Please wait..."
                    className="btn btn-primary mt-3 mt-lg-0 mt-md-0"
                  />
                </form>
                <ul className="nav subscribe-feature-list mt-3">
                  <li className="nav-item">
                    <span className="ms-0">
                      <FaRegCheckCircle className="far me-2 text-primary" />
                      Free 14-day trial
                    </span>
                  </li>
                  <li className="nav-item">
                    <span>
                      <FaRegCheckCircle className="far me-2 text-primary" />
                      No credit card required
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 mt-4 mt-xl-0">
            <div className="hero-img-wrap position-relative">
              {!bgDark && (
                <ul className="position-absolute animate-element parallax-element shape-service hide-medium">
                  <li className="layer" data-depth="0.03">
                    <img
                      src="/color-shape/image-1.svg"
                      alt="shape"
                      className="img-fluid position-absolute color-shape-1"
                    />
                  </li>
                  <li className="layer" data-depth="0.02">
                    <img
                      src="/color-shape/feature-2.svg"
                      alt="shape"
                      className="img-fluid position-absolute color-shape-2 z-5"
                    />
                  </li>
                  <li className="layer" data-depth="0.03">
                    <img
                      src="/color-shape/feature-3.svg"
                      alt="shape"
                      className="img-fluid position-absolute color-shape-3"
                    />
                  </li>
                </ul>
              )}
              <div className="hero-img-wrap position-relative">
                <div className="hero-screen-wrap">
                  <div className="phone-screen">
                    <img
                      src="/screen/phone-screen.png"
                      alt="hero"
                      className="position-relative img-fluid"
                    />
                  </div>
                  <div className="mac-screen">
                    <img
                      src="/screen/mac-screen.png"
                      alt="hero "
                      className="position-relative img-fluid rounded-custom"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionFourth;
