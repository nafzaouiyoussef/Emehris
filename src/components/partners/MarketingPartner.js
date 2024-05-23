import React from 'react';

const MarketingPartner = () => {
  return (
    <section className="mk-partners bg-white pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7">
            <div className="mk-title text-center">
              <h4 className="mb-0">
                Trusted by the best companies in the world
              </h4>
            </div>
          </div>
        </div>
        <div className="mk-partners-list mt-5">
          <div className="mk-partner-item">
            <img
              src="/icons/google-text.svg"
              alt="google"
              className="img-fluid"
            />
          </div>
          <div className="mk-partner-item">
            <img
              src="/icons/facebook-text.svg"
              alt="facebook"
              className="img-fluid"
            />
          </div>
          <div className="mk-partner-item">
            <img src="/icons/youtube.svg" alt="youtube" className="img-fluid" />
          </div>
          <div className="mk-partner-item">
            <img src="/icons/webflow.svg" alt="webflow" className="img-fluid" />
          </div>
          <div className="mk-partner-item">
            <img src="/icons/company.svg" alt="company" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingPartner;
