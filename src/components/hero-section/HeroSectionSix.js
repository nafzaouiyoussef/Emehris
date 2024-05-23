/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HeroTitle from '../common/HeroTitle';

const HeroSectionSix = () => {
  return (
    <section
      className="hero-section ptb-120 min-vh-100 d-flex align-items-center bg-dark text-white position-relative overflow-hidden"
      style={{
        background: "url('/page-header-bg.svg')no-repeat bottom right",
      }}
    >
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-6">
            <div className="hero-content-wrap">
              <HeroTitle
                subtitle="#1 Software Company In World"
                title="Advanced Feature to Grow Your Business"
                desc="Proactively coordinate quality quality vectors vis-a-vis supply chains engage client-centric web services."
              />
              <div className="action-btns mt-5">
                <Link href="/request-demo">
                  <a className="btn btn-primary me-3">Request Demo</a>
                </Link>
                <Link href="/about-us">
                  <a className="btn btn-outline-light">Learn More</a>
                </Link>
              </div>
            </div>
            <div className="row justify-content-lg-start mt-60">
              <h6 className="text-white-70 mb-2">Our Top Clients:</h6>
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
          <div className="col-lg-6 col-md-8 mt-5 mt-lg-0">
            <div className="animated-img-wrap">
              {/* <!--animated shape start--> */}
              <ul className="animate-element parallax-element animated-hero-1">
                <li className="layer" data-depth="0.02">
                  <img
                    src="/screen/animated-screen-2.svg"
                    alt="shape"
                    className="img-fluid position-absolute type-0"
                  />
                </li>
              </ul>
              {/* <!--animated shape end--> */}
              <Image
                width={636}
                height={452}
                src="/screen/animated-screen-1.svg"
                alt="shape"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionSix;
