import React from 'react';

const FeatureNine = () => {
  return (
    <section className="mk-feature-section pt-5 pt-lg-0 pb-40 bg-white">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-5">
            <div className="mk-title text-center">
              <span className="mk-subtitle fw-bold">Core Features</span>
              <h2 className="mt-3 mb-0 mk-heading">
                The Features to Boost your Productivity
              </h2>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-4 col-lg-7">
              <div className="mk-feature-content">
                <h3 className="mk-heading mb-3 lh-lg">
                  Save Time by
                  <br className="d-none d-xl-block" /> Havening Everythings in{' '}
                  <br className="d-none d-xl-block" /> one Platform
                </h3>
                <p className="mb-30">
                  Use marketing automation to identify hot leads and email your
                  sales team telling them to follow up. Nurture and contact
                  leads at the opportune time to maximize.
                </p>
                <a href="services.html" className="mk-explore-btn fw-bold">
                  Explore More
                  <span className="ms-1">
                    <svg
                      width="53"
                      height="8"
                      viewBox="0 0 53 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 4.00049L48.7939 4.00049"
                        stroke="#FF724B"
                        strokeWidth="0.995794"
                      />
                      <path
                        d="M52.7742 3.99978L46.7994 7.44931L46.7994 0.550246L52.7742 3.99978Z"
                        fill="#FF724B"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="mk-feature-dashboard position-relative mt-5 mt-xl-0">
                <img
                  src="/shape/mk-doted.png"
                  alt="doted"
                  className="position-absolute mk-feature-dot"
                />
                <img
                  src="/marketing/feature-dashboard.svg"
                  alt="dashboard"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureNine;
