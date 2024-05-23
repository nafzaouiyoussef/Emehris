/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import HeroTitle from '../common/HeroTitle';
import React, { useState } from 'react';
import { IoPlayCircleOutline } from 'react-icons/io5';
import ModalVideo from 'react-modal-video';

const HeroSectionSeven = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <section
        className="hero-section ptb-120 text-white bg-gradient"
        style={{
          background: "url('/hero-dot-bg.png')no-repeat center right",
        }}
      >
        <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="hAP2QF--2Dg"
        onClose={() => setOpen(false)}
      />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-10">
              <div className="hero-content-wrap mt-5">
                <HeroTitle
                  title="Business Intelligence &amp; Data Analysis"
                  desc="Proactively coordinate quality quality vectors vis-a-vis
                  supply chains. Quickly engage client-centric web services."
                />
                <div className="action-btns mt-5 align-items-center d-block d-sm-flex d-lg-flex d-md-flex">
                  <Link href="/request-demo">
                    <a className="btn btn-danger me-3">Request For Demo</a>
                  </Link>
                  <div>
                    <Link href="/#">
                      <a
                        onClick={() => setOpen(true)}
                        type="button"
                        className="text-decoration-none d-inline-flex align-items-center watch-now-btn"
                      >
                        <IoPlayCircleOutline className="me-2" /> Watch Demo
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="row justify-content-lg-start mt-60">
                  <h6 className="text-white-70 mb-2">
                    Trusted By 5000+ Worldwide Customers:
                  </h6>
                  <div className="col-4 col-sm-3 my-2 ps-lg-0">
                    <img
                      src="/clients/client-1.svg"
                      alt="client"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-4 col-sm-3 my-2">
                    <img
                      src="/clients/client-2.svg"
                      alt="client"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-4 col-sm-3 my-2">
                    <img
                      src="/clients/client-3.svg"
                      alt="client"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-8 mt-5">
              <div className="hero-img position-relative circle-shape-images">
                {/* <!--animated shape start--> */}
                <ul className="position-absolute animate-element parallax-element circle-shape-list">
                  <li className="layer" data-depth="0.02">
                    <img
                      src="/shape/circle-1.svg"
                      alt="shape"
                      className="circle-shape-item type-1 hero-1"
                    />
                  </li>
                  <li className="layer" data-depth="0.04">
                    <img
                      src="/shape/circle-1.svg"
                      alt="shape"
                      className="circle-shape-item type-2 hero-1"
                    />
                  </li>
                  <li className="layer" data-depth="0.04">
                    <img
                      src="/shape/circle-1.svg"
                      alt="shape"
                      className="circle-shape-item type-3 hero-1"
                    />
                  </li>
                  <li className="layer" data-depth="0.03">
                    <img
                      src="/shape/circle-1.svg"
                      alt="shape"
                      className="circle-shape-item type-4 hero-1"
                    />
                  </li>
                  <li className="layer" data-depth="0.03">
                    <img
                      src="/shape/circle-1.svg"
                      alt="shape"
                      className="circle-shape-item type-5 hero-1"
                    />
                  </li>
                </ul>
                {/* <!--animated shape end--> */}
                <img
                  src="/screen/animated-screen-5.svg"
                  alt="hero img"
                  className="img-fluid position-relative z-5"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSectionSeven;
