/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ModalVideo from "react-modal-video";

const HeroSectionOne = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <section
      className="hero-section ptb-120 text-white bg-gradient"
      style={{ background: "url('/hero-dot-bg.png')no-repeat center right" }}
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
            <div className="hero-content-wrap mt-5 mt-lg-0 mt-xl-0">
              <h1 className="fw-bold display-5">
                Get Fully Control and Visibility your Company
              </h1>
              <p className="lead">
                Proactively coordinate quality quality vectors vis-a-vis supply
                chains. Quickly engage client-centric web services.
              </p>
              <div className="action-btns mt-5 align-items-center flex d-sm-flex d-lg-flex d-md-flex">
                <Link href="/request-demo">
                  <a className="btn btn-primary me-3">Request For Demo</a>
                </Link>
                
              </div>
              <div className="row justify-content-lg-start mt-60">
                <h6 className="text-white-70 mb-2">Our Top Clients:</h6>
                <div className="col-4 col-sm-3 my-2 ps-lg-0">
                  <Image
                    width={141}
                    height={56}
                    src="/clients/client-1.svg"
                    alt="client"
                    className="img-fluid"
                  />
                </div>
                <div className="col-4 col-sm-3 my-2">
                  <Image
                    width={141}
                    height={56}
                    src="/clients/client-2.svg"
                    alt="client"
                    className="img-fluid"
                  />
                </div>
                <div className="col-4 col-sm-3 my-2">
                  <Image
                    width={141}
                    height={56}
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
              <img
                src="/hero-1.png"
                alt="hero img"
                className="img-fluid position-relative z-5"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionOne;
