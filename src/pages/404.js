/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div>
      <section
        className="error-section ptb-120 bg-dark min-vh-100 w-100 d-flex flex-column justify-content-center"
        style={{
          background: "url('/page-header-bg.svg')no-repeat bottom right",
        }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-5 col-md-6">
              <div className="error-page-content-wrap">
                <h2 className="error-404 text-warning">404</h2>
                <h1 className="display-5 fw-bold">Page Not Found</h1>
                <p className="lead">
                  Efficiently reinvent next-generation scenarios without focused
                  networks. Collaboratively productize superior technology
                  before robust potentialities.{' '}
                </p>

                <Link href="/">
                  <a className="btn btn-primary mt-4">Go Back Home</a>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-8 mt-5 d-none d-md-block d-lg-block">
              <div className="hero-img position-relative circle-shape-images">
                <ul className="position-absolute animate-element parallax-element circle-shape-list">
                  <li className="layer" data-depth="0.03">
                    <img
                      src="/shape/circle-1.svg"
                      alt="shape"
                      className="circle-shape-item type-0 hero-1"
                    />
                  </li>
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
    </div>
  );
};

export default NotFoundPage;
