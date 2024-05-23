import React from "react";
import Link from 'next/link';
import Image from 'next/image';

import VideoModal from '../common/VideoModal';
import DarkModal from "@components/common/DarkModal";

const HeroSectionNine = () => {
  return (
    <section
      className="hero-it-solution hero-nine-bg ptb-120"
      style={{
        background: "url('/hero-9-img.png')no-repeat center center",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-10">
            <div className="hero-content-wrap mt-5 mt-lg-0 mt-xl-0">
              <h1 className="fw-bold display-5">
                We Care Your any IT Solution
              </h1>
              <p className="lead">
                Proactively coordinate quality quality vectors vis-a-vis supply
                chains. Quickly engage client-centric web services.
              </p>
              <div className="action-btn mt-5 align-items-center d-block d-sm-flex d-lg-flex d-md-flex">
                <Link href="/request-demo" >
                  <a  className="btn btn-primary me-3">Request For Demo</a>
                </Link>
               <DarkModal className="true"/>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-img position-relative mt-5 mt-lg-0">
              <Image
                src="/banner_image.png"
                alt="hero hero-it-solution"
                className="img-fluid"
                width={620}
                height={620}
              />
              <div className="dots">
                  <div className="dot-1">
                  <Image
                  src="/banner_dot.png"
                  alt="dot"
                  width={96}
                  height={91}
                  />
                  </div>
                <div className="dot-2">
                   <Image
                  src="/banner_dot.png"
                  alt="dot"
                  width={96}
                  height={91}
                /></div>
              </div>
              <div className="bubble">
                <span className="bubble-1"></span>
                <span className="bubble-2"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionNine;
