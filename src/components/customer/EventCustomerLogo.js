import React from 'react';

export default function EventCustomerLogo() {
  return (
    <section className="sponsor bg-light-blue">
      <div className="container">
        <div className="sponsor-logo-bg ptb-60 rounded-top shadow-lg">
          <div className="row justify-content-center">
            <div className="col-lg-4">
              <div className="text-center mb-5">
                <span className="text-uppercase fw-bold text-dark">
                  Sponsor
                </span>
                <h2>
                  The Partners <span className="text-pink">.</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row px-4">
            <div className="col-lg-3 col-md-6">
              <div className="logo text-center py-3 mb-3">
                <img src="/event/brand/lg-1.svg" width="100" alt="Logo" />
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="logo text-center py-3 mb-3">
                <img src="/event/brand/lg-2.svg" width="100" alt="Logo" />
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="logo text-center py-3 mb-3">
                <img src="/event/brand/lg-3.svg" width="100" alt="Logo" />
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="logo text-center py-3 mb-3">
                <img src="/event/brand/lg-4.svg" width="100" alt="Logo" />
              </div>
            </div>
          </div>
          <div className="row justify-content-center px-4">
            <div className="col-lg-10">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6">
                  <div className="logo text-center py-3 mb-3">
                    <img
                      src="/event/brand/lg-5.svg"
                      width="100"
                      alt="Logo"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="logo text-center py-3 mb-3">
                    <img src="/event/brand/lg-6.svg" width="100" alt="Logo" />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="logo text-center py-3 mb-3">
                    <img src="/event/brand/lg-7.svg" width="100" alt="Logo" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
