import Link from 'next/link';
import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import ModalVideo from 'react-modal-video';

const HeroSeventeen = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section
      className="mk-hero-section bg-white position-relative overflow-hidden"
      style={{
        backgroundImage: "url('/shape/mk-hero-curve.svg')",
      }}
    >
      <span className="mk-hero-rectangle-shape position-absolute"></span>
      <img
        src="/shape/mk-hero-circle-line.png"
        alt="circle line"
        className="position-absolute start-0 w-100 mk-hero-circle-line"
      />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-7">
            <div className="mk-title">
              <h1 className="display-4 fw-bold mk-title text-white">
                Make Digital{' '}
                <mark className="bg-transparent p-0">Business</mark> Very Easy
                way!
              </h1>
            </div>
          </div>
          <div className="col-xl-5">
            <div className="mk-hero-content">
              <p className="mb-4 text-white">
                Make your work easier with an integrated ecosystem that lets all
                departments work properly together.
              </p>
              <div className="d-flex align-items-center mk-btn-group flex-wrap">
                <Link href="#">
                  <a className="ins-btn mk-white-btn">Get Started</a>
                </Link>
                <ModalVideo
                  channel="youtube"
                  isOpen={isOpen}
                  videoId="hAP2QF--2Dg"
                  onClose={() => setOpen(false)}
                />
                <a
                  href="!#"
                  onClick={() => setOpen(true)}
                  className="mk-hero-play fw-bold"
                >
                  <span className="d-inline-flex align-items-center justify-content-center rounded-circle text-white me-2">
                    {/* <i className="fas fa-play"></i> */}

                    {/* <i className="fas fa-play"></i> */}
                    <FaPlay />
                  </span>{' '}
                  How it Work
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="mk-hero-dashboard text-md-center position-relative mt-60 position-relative">
              <span className="mk-gradient-hero-shape position-absolute rounded-circle"></span>
              <span className="mk-secondary-gradient-shape position-absolute rounded-circle"></span>
              <img
                src="/shape/mk-doted.png"
                alt="doted"
                className="mk-hero-doted position-absolute"
              />
              <img
                src="/marketing/dashboard.png"
                alt="not found"
                className="img-fluid"
              />
              <img
                src="/marketing/dashboard-sm.png"
                alt="dashboard"
                className="dashboard-sm d-none d-sm-block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSeventeen;
