import React, { useState } from "react";
import Link from "next/link";
import { FiPlay } from "react-icons/fi";
import ModalVideo from "react-modal-video";

export default function HeroFourteen() {
  const [isOpen, setOpen] = useState(false);
  return (
    <section className="digi-hero ptb-120">
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="hAP2QF--2Dg"
        onClose={() => setOpen(false)}
      />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-6">
            <div className="digi-hero-text mt-5 mt-lg-0">
              <div>
                <span className="span-arrow">Best Digital Agency</span>
                <img src="/arro-right.svg" alt="arrow" />
              </div>
              <h1 className="display-5 fw-bold mb-3">
                We Are the
                <span className="text-orange fw-bold"> Brilliants </span>
                in Terms of digital Marketing
              </h1>
              <p className="m-0">
                End-to-end payments and financial management in a single
                solution. Meet the right platform to help realize.
              </p>
              <div className="action-btns mt-4 align-items-center d-block d-sm-flex d-lg-flex d-md-flex">
                <Link href="/contact-us">
                  <a className="btn rounded-pill bg-orange me-3">
                    Download Now
                  </a>
                </Link>
                <a
                  href="#!"
                  onClick={() => setOpen(true)}
                  type="button"
                  className="text-decoration-none popup-youtube d-inline-flex align-items-center watch-now-btn mt-3 mt-lg-0 mt-md-0"
                >
                  <FiPlay className="me-2 text-dark fs-xl" /> How It Works
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-7 cool-md-6">
            <div className="digi-hero-img text-center position-relative mt-5">
              <img src="/digi-h-girl.jpg" className="img-fluid" alt="girl" />
              <ul className="list-unstyled d-none d-xl-block">
                <li>
                  <img
                    src="/digital-marketing/hero-shape-1.png"
                    alt="shape"
                    className=""
                  />
                </li>
                <li>
                  <img src="/digital-marketing/hero-shape-2.png" alt="shape" />
                </li>
                <li>
                  <img src="/digital-marketing/hero-shape-3.png" alt="shape" />
                </li>
                <li>
                  <img src="/digital-marketing/hero-shape-4.png" alt="shape" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
