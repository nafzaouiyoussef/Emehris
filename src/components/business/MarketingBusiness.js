import React from 'react';

const MarketingBusiness = () => {
  return (
    <section className="mk-business bg-white">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-xl-7">
            <div className="mk-business-pr position-relative">
              <img
                src="/shape/mk-doted-lg.png"
                alt="not found"
                className="position-absolute mk-doted-lg"
              />
              <img
                src="/marketing/laptop.png"
                alt="laptop"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-xl-5">
            <div className="mk-business-content">
              <h3 className="mk-heading mb-3">
                Actionable Reports to Grow
                <br className="d-none d-sm-block" /> Your Business
              </h3>
              <p className="mb-30">
                Use marketing automation to identify hot leads and email your
                sales Nurture and contact leads at the opportune time to
                maximize.
              </p>
              <ul className="mk-business-reports p-0">
                <li className="d-flex align-items-start mk-bg-secondary">
                  <span className="icon-wrapper d-inline-flex align-items-center justify-content-center rounded flex-shrink-0">
                    <svg
                      width="24"
                      height="32"
                      viewBox="0 0 24 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16 0V8H24L16 0Z" fill="#FF724B" />
                      <path
                        d="M16 10C14.898 10 14 9.102 14 8V0H2C0.898 0 0 0.898 0 2V30C0 31.104 0.898 32 2 32H22C23.104 32 24 31.104 24 30V10H16ZM8 28H4V22H8V28ZM14 28H10V18H14V28ZM20 28H16V14H20V28Z"
                        fill="#FF724B"
                      />
                    </svg>
                  </span>
                  <div className="ms-4">
                    <h6 className="mk-heading mb-2">Daily Reporters</h6>
                    <p className="mb-0">
                      Use marketing automation to identify hot leads leads at
                      the opportune time to maximize.
                    </p>
                  </div>
                </li>
                <li className="d-flex align-items-start mk-bg-primary">
                  <span className="icon-wrapper d-inline-flex align-items-center justify-content-center rounded flex-shrink-0 bg-mk-primary">
                    <svg
                      width="20"
                      height="33"
                      viewBox="0 0 20 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.5296 0H4.07697C1.81611 0 0 1.81611 0 4.07697V28.5388C0 30.7997 1.85317 32.6158 4.07697 32.6158H15.5296C17.7904 32.6158 19.6065 30.7997 19.6065 28.5388V4.07697C19.6065 1.81611 17.7904 0 15.5296 0ZM9.8218 29.9843C8.78403 29.9843 7.96863 29.1689 7.96863 28.1311C7.96863 27.0934 8.78403 26.278 9.8218 26.278C10.8596 26.278 11.675 27.0934 11.675 28.1311C11.675 29.1689 10.8596 29.9843 9.8218 29.9843ZM17.7534 24.3136H1.85317V5.44832H17.7534V24.3136Z"
                        fill="#5F2CF2"
                      />
                    </svg>
                  </span>
                  <div className="ms-4">
                    <h6 className="mk-heading mb-2">Daily Reporters</h6>
                    <p className="mb-0">
                      Use marketing automation to identify hot leads leads at
                      the opportune time to maximize.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingBusiness;
