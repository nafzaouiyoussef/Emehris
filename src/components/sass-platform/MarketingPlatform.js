import React from 'react';

const MarketingPlatform = () => {
  return (
    <section className="mk-sass-platform bg-white pt-120 pt-xl-0">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-xl-5">
            <div className="mk-sass-content">
              <span className="mk-subtitle mb-3 fw-bold">Core Features</span>
              <h3 className="mk-heading lh-lg mb-3">
                Powerful and Easy to Use Saas Platform!
              </h3>
              <p className="mb-0">
                Use marketing automation to identify hot leads and email your
                sales team telling them to follow up. Nurture and contact leads
                at the opportune time to maximize.
              </p>
              <a href="#" className="btn btn-primary mt-40">
                Explore More
              </a>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="mk-sass-dashboard mt-4 mt-xl-0">
              <img
                src="/marketing/sass-dashboard.png"
                alt="dashboard"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingPlatform;
