import Link from "next/link";
import React from "react";
import { FaHeart, FaPlay } from "react-icons/fa";

const HeroSixteen = () => {
  return (
    <section className="ins-hero-section position-relative overflow-hidden">
      <img
        src="/shape/gradient-rectangle-1.png"
        alt="shape"
        className="position-absolute rectangle-shape start-0 top-0"
      />
      <img
        src="/shape/gradient-rectangle-2.png"
        alt="shape"
        className="position-absolute rectangle-shape end-0 top-0"
      />
      <img
        src="/shape/ins-primary-circle.png"
        alt="not found"
        className="position-absolute start-50 bottom-0 translate-middle-x"
      />
      <img
        src="/shape/hero-curve.png"
        alt="not found"
        className="position-absolute start-0 bottom-0 ins-hero-curve w-100"
      />
      <img
        src="/shape/arrow-shape.png"
        alt="not found"
        className="position-absolute arrow-shape d-none d-sm-block"
      />
      <span className="heart-sign bg-white position-absolute d-inline-flex align-items-center justify-content-center text-danger rounded-circle">
        <FaHeart />
      </span>
      <a
        href="http://www.youtube.com/watch?v=hAP2QF--2Dg"
        className="hero-play video-icon popup-youtube bg-white rounded-circle d-inline-flex align-items-center justify-content-center position-absolute"
      >
        <FaPlay />
      </a>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="ins-hero-content text-center">
              <div className="ins-title text-center">
                <h1 className="display-3 ins-heading mb-20 fw-semibold">
                  Insurance for the <mark>Better</mark> Your Family Life.
                </h1>
                <p className="mb-5">
                  White Board sustainable products with premier total linkage
                  Energistically Monetize.
                </p>
                <Link href="/request-demo">
                  <a className="ins-btn ins-primary-btn ins-primary-btn-shadow">
                    Let&apos;s Get Started
                  </a>
                </Link>
              </div>
              <img
                src="/insurance/hero-1.png"
                alt="not found"
                className="img-fluid mt-4 position-relative"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSixteen;
