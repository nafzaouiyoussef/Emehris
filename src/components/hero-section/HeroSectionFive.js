/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { FaRegCheckCircle } from "react-icons/fa";
import HeroTitle from "../common/HeroTitle";

const HeroSectionFive = () => {
  return (
    <section
      className="hero-section ptb-120 text-white bg-dark"
      style={{
        background: "url('/hero-dot-bg.png')no-repeat center right",
      }}
    >
      <div className="container">
        <div className="row justify-content-center text-center text-lg-start align-items-center">
          <div className="col-lg-6 col-md-10">
            <div className="hero-content-wrap mt-5 mt-lg-0 mt-xl-0">
              <HeroTitle
                title="Build Better App with Quiety Software"
                desc="Proactively coordinate quality quality vectors vis-a-vis
                  supply chains. Quickly engage client-centric web services."
              />

              <div className="action-btns mt-5">
                <Link href="/request-for-demo">
                  <a className="btn btn-primary me-3">Request Demo</a>
                </Link>
                <Link href="/contact-us">
                  <a className="btn btn-outline-light">Contact Us</a>
                </Link>
              </div>
              <ul className="nav subscribe-feature-list d-flex justify-content-center justify-content-lg-start w-100 mt-3">
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

              <div className="d-flex justify-content-center justify-content-lg-start mt-5">
                <img
                  src="/awards-01.svg"
                  alt="awards"
                  className="me-4 img-fluid"
                />
                <img src="/awards-02.svg" alt="awards" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-8">
            <div
              className="hero-img-wrap position-relative app-screen-bg mt-5"
              style={{
                backgroundImage: "url(/shape/shape-bg-3.svg)",
              }}
            >
              <ul className="position-absolute animate-element parallax-element shape-service">
                <li className="layer" data-depth="0.03">
                  <img
                    src="/color-shape/image-4.svg"
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

              <img
                src="/screen/app-screen-on-hand.png"
                alt="hero"
                className="img-fluid position-relative z-5"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionFive;
