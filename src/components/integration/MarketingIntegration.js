import React from 'react';
import { FaFacebookF } from 'react-icons/fa';

const MarketingIntegration = () => {
  return (
    <section className="mk-integration bg-white ptb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="mk-title text-center">
              <span className="mk-subtitle fw-bold">Core Features</span>
              <h2 className="mk-heading mb-0 mt-3">
                Integrated with 20+ Quiety Used Software
              </h2>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className="row justify-content-center g-4">
            <div className="col-xxl-3 col-xl-4 col-md-6">
              <div className="mk-app-single d-flex align-items-center p-3">
                <span className="icon-wrapper d-inline-flex align-items-center justify-content-center flex-shrink-0 rounded instagram">
                  <img
                    src="/icons/instagram.svg"
                    alt="instagram"
                    className="img-fluid"
                  />
                </span>
                <div className="ms-3">
                  <h6 className="mk-heading mb-1">Instagram</h6>
                  <p className="mb-0 fs-sm">
                    Exponent keeps all your data safe and secured.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-md-6">
              <div className="mk-app-single d-flex align-items-center p-3">
                <span className="icon-wrapper d-inline-flex align-items-center justify-content-center flex-shrink-0 rounded slack">
                  <img
                    src="/icons/slack.svg"
                    alt="slack"
                    className="img-fluid"
                  />
                </span>
                <div className="ms-3">
                  <h6 className="mk-heading mb-1">Slack</h6>
                  <p className="mb-0 fs-sm">
                    Exponent keeps all your data safe and secured.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-md-6">
              <div className="mk-app-single d-flex align-items-center p-3">
                <span className="icon-wrapper d-inline-flex align-items-center justify-content-center flex-shrink-0 rounded twitter">
                  <img
                    src="/icons/twitter.png"
                    alt="figma"
                    className="img-fluid"
                  />
                </span>
                <div className="ms-3">
                  <h6 className="mk-heading mb-1">Twitter</h6>
                  <p className="mb-0 fs-sm">
                    Exponent keeps all your data safe and secured.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-md-6">
              <div className="mk-app-single d-flex align-items-center p-3">
                <span className="icon-wrapper d-inline-flex align-items-center justify-content-center flex-shrink-0 rounded figma">
                  <img
                    src="/icons/figma.svg"
                    alt="figma"
                    className="img-fluid"
                  />
                </span>
                <div className="ms-3">
                  <h6 className="mk-heading mb-1">Figma</h6>
                  <p className="mb-0 fs-sm">
                    Exponent keeps all your data safe and secured.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-md-6">
              <div className="mk-app-single d-flex align-items-center p-3">
                <span className="icon-wrapper d-inline-flex align-items-center justify-content-center flex-shrink-0 rounded facebook">
                  {/* <i className="fab fa-facebook-f"></i> */}
                  <img
                    src="/icons/facebook.png"
                    alt="figma"
                    className="img-fluid"
                  />
                </span>
                <div className="ms-3">
                  <h6 className="mk-heading mb-1">Facebook</h6>
                  <p className="mb-0 fs-sm">
                    Exponent keeps all your data safe and secured.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-md-6">
              <div className="mk-app-single d-flex align-items-center p-3">
                <span className="icon-wrapper d-inline-flex align-items-center justify-content-center flex-shrink-0 rounded zapier">
                  <img
                    src="/icons/zapier.svg"
                    alt="zapier"
                    className="img-fluid"
                  />
                </span>
                <div className="ms-3">
                  <h6 className="mk-heading mb-1">Zapier</h6>
                  <p className="mb-0 fs-sm">
                    Exponent keeps all your data safe and secured.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-md-6">
              <div className="mk-app-single d-flex align-items-center p-3">
                <span className="icon-wrapper d-inline-flex align-items-center justify-content-center flex-shrink-0 rounded drive">
                  <img
                    src="/icons/drive.svg"
                    alt="drive"
                    className="img-fluid"
                  />
                </span>
                <div className="ms-3">
                  <h6 className="mk-heading mb-1">Google Drive</h6>
                  <p className="mb-0 fs-sm">
                    Exponent keeps all your data safe and secured.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center mb-0 mt-40">
            Do You Want to explore more{' '}
            <a href="#" className="text-mk-secondary fw-bold">
              Integration
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default MarketingIntegration;
