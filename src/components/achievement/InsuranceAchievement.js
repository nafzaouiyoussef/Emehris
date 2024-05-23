import React from 'react';
import { FaDiscord, FaRegPaperPlane } from 'react-icons/fa';

const InsuranceAchievement = () => {
  return (
    <section className="ins-achievement-section ptb-120 overflow-hidden">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-xl-6">
            <div className="ins-achivements-box bg-white rounded position-relative overflow-hidden">
              <span className="border-hr position-absolute"></span>
              <span className="border-vr position-absolute"></span>
              <div className="row g-0">
                <div className="col-6">
                  <div className="ins-achievement-box-item text-end">
                    <img
                      src="/icons/ins-4.svg"
                      alt="icon"
                      className="img-fluid"
                    />
                    <h3 className="ins-heading mb-0 mt-2">
                      <span className="counter">5.6</span>M+
                    </h3>
                    <p className="mb-0 fw-bold ins-text">Insurance User</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="ins-achievement-box-item text-start">
                    <img
                      src="/icons/ins-5.svg"
                      alt="icon"
                      className="img-fluid"
                    />
                    <h3 className="ins-heading mb-0 mt-2">
                      <span className="counter">85</span>+
                    </h3>
                    <p className="mb-0 fw-bold ins-text">Insurance User</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="ins-achievement-box-item text-end">
                    <img
                      src="/icons/ins-6.svg"
                      alt="icon"
                      className="img-fluid"
                    />
                    <h3 className="ins-heading mb-0 mt-2">
                      <span className="counter">95</span>%
                    </h3>
                    <p className="mb-0 fw-bold ins-text">Insurance User</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="ins-achievement-box-item text-start">
                    <img
                      src="/icons/ins-7.svg"
                      alt="icon"
                      className="img-fluid"
                    />
                    <h3 className="ins-heading mb-0 mt-2">
                      <span className="counter">45</span>k+
                    </h3>
                    <p className="mb-0 fw-bold ins-text">Insurance User</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="ins-achievement-info">
              <div className="ins-title mb-30">
                <div className="d-flex align-items-center mb-3">
                  <span className="subtitle fw-bold">Achievements</span>
                  <span className="ms-1">
                    <svg
                      width="103"
                      height="13"
                      viewBox="0 0 103 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.696533 6.60583L93.3054 6.60584"
                        stroke="#0EE7C5"
                        strokeWidth="1.49369"
                      />
                      <path
                        d="M102.266 6.60263L93.3036 11.7769L93.3036 1.42833L102.266 6.60263Z"
                        fill="#0EE7C5"
                      />
                    </svg>
                  </span>
                </div>
                <h2 className="ins-heading mb-3">
                  Most Interesting Facts And Smart <mark>Communication.</mark>
                </h2>
                <p className="ins-text mb-0">
                  Denounce with righteous indignation and dislike men who are so
                  beguiled and demoralized by the charms of pleasure and
                  trouble.
                </p>
              </div>
              <ul className="ins-info-list mb-0 list-unstyled">
                <li className="d-flex align-items-start">
                  <span className="icon-wrapper d-flex align-items-center justify-content-center rounded text-white bg-telegram flex-shrink-0">
                    {/* <i className="fa-solid fa-paper-plane"></i> */}
                    <FaRegPaperPlane />
                  </span>
                  <div className="ins-info-content ms-3">
                    <h6 className="mb-1 ins-heading">Telegram Chat</h6>
                    <p className="mb-0 fs-md">
                      Denounce with righteous indignation and dislike the charms
                      of pleasure and trouble.
                    </p>
                  </div>
                </li>
                <li className="d-flex align-items-start">
                  <span className="icon-wrapper d-flex align-items-center justify-content-center rounded text-white bg-discord flex-shrink-0">
                    {/* <i className="fa-brands fa-discord"></i> */}
                    <FaDiscord />
                  </span>
                  <div className="ins-info-content ms-3">
                    <h6 className="mb-1 ins-heading">Discord Chat Chat</h6>
                    <p className="mb-0 fs-md">
                      Denounce with righteous indignation and dislike the charms
                      of pleasure and trouble.
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

export default InsuranceAchievement;
