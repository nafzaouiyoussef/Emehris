import React from 'react';

const MarketingAbout = () => {
  return (
    <section className="mk-about-section bg-white pt-60 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-8">
            <div className="mk-title text-center">
              <span className="fw-bold mk-subtitle">Why Choose Us</span>
              <h2 className="mt-3 mb-0 mk-heading">
                Make Business Decisions that help you Grow
              </h2>
            </div>
          </div>
        </div>
        <div className="mt-5 position-relative mk-sf-bottom">
          <div className="row justify-content-center g-4">
            <div className="col-xl-4 col-lg-6">
              <div className="mk-sf-item bg-white">
                <span className="icon-wrapper d-inline-flex align-items-center justify-content-center rounded">
                  <img src="/icons/mk-1.svg" alt="icon" className="img-fluid" />
                </span>
                <h4 className="mk-heading mb-3 mt-4">Secure Integration</h4>
                <p className="mb-0">
                  Quickly fabricate customer directed synergy for client-centric
                  users. Globally repurpose granular users without highly
                  efficient solutions.{' '}
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="mk-sf-item bg-white">
                <span className="icon-wrapper d-inline-flex align-items-center justify-content-center rounded warning-bg">
                  <img src="/icons/mk-2.svg" alt="icon" className="img-fluid" />
                </span>
                <h4 className="mk-heading mb-3 mt-4">Data Security</h4>
                <p className="mb-0">
                  Quickly fabricate customer directed synergy for client-centric
                  users. Globally repurpose granular users without highly
                  efficient solutions.{' '}
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="mk-sf-item bg-white">
                <span className="icon-wrapper d-inline-flex align-items-center justify-content-center rounded mk-primary">
                  <img src="/icons/mk-3.svg" alt="icon" className="img-fluid" />
                </span>
                <h4 className="mk-heading mb-3 mt-4">No Extra Cost</h4>
                <p className="mb-0">
                  Quickly fabricate customer directed synergy for client-centric
                  users. Globally repurpose granular users without highly
                  efficient solutions.{' '}
                </p>
              </div>
            </div>
          </div>
          <img
            src="/shape/mk-wave.png"
            alt="wave"
            className="position-absolute mk-wave"
          />
        </div>
      </div>
    </section>
  );
};

export default MarketingAbout;
