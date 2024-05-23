import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from 'react-icons/fa';

const InsuranceTeam = () => {
  return (
    <section className="ins-team-section ptb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-5">
            <div className="ins-title text-center">
              <div className="d-flex align-items-center justify-content-center">
                <span className="subtitle fw-bold">Expertise Area</span>
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
              <h2 className="ins-heading mb-0 mt-2">
                Meet our <mark>Experienced</mark> Team Member
              </h2>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className="row justify-content-center g-4">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="ins-team-card text-center bg-white rounded">
                <img
                  src="/insurance/team-1.jpg"
                  className="img-fluid rounded-circle"
                  alt="team"
                />
                <h6 className="ins-heading mt-4 mb-0">Joshua Woodman</h6>
                <span className="designation fs-sm ins-text">
                  Creative Manager
                </span>
                <p className="mt-3 mb-4">
                  Team component built to improve trust and culture business.{' '}
                </p>
                <div className="ins-team-social d-flex align-items-center flex-wrap justify-content-center">
                  <a href="#">
                    {/* <i className="fab fa-facebook-f"></i> */}
                    <FaFacebookF />
                  </a>
                  <a href="#">
                    {/* <i className="fab fa-instagram"></i> */}
                    <FaInstagram />
                  </a>
                  <a href="#">
                    {/* <i className="fab fa-twitter"></i> */}
                    <FaTwitter />
                  </a>
                  <a href="#">
                    {/* <i className="fab fa-pinterest"></i> */}
                    <FaPinterest />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="ins-team-card text-center bg-white rounded">
                <img
                  alt="team"
                  src="/insurance/team-2.jpg"
                  className="img-fluid rounded-circle"
                />
                <h6 className="ins-heading mt-4 mb-0">Richard Cloutier</h6>
                <span className="designation fs-sm ins-text">
                  Creative Manager
                </span>
                <p className="mt-3 mb-4">
                  Team component built to improve trust and culture business.{' '}
                </p>
                <div className="ins-team-social d-flex align-items-center flex-wrap justify-content-center">
                  <a href="#">
                    {/* <i className="fab fa-facebook-f"></i> */}
                    <FaFacebookF />
                  </a>
                  <a href="#">
                    {/* <i className="fab fa-instagram"></i> */}
                    <FaInstagram />
                  </a>
                  <a href="#">
                    {/* <i className="fab fa-twitter"></i> */}
                    <FaTwitter />
                  </a>
                  <a href="#">
                    {/* <i className="fab fa-pinterest"></i> */}
                    <FaPinterest />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="ins-team-card text-center bg-white rounded">
                <img
                  alt="team"
                  src="/insurance/team-3.jpg"
                  className="img-fluid rounded-circle"
                />
                <h6 className="ins-heading mt-4 mb-0">Daniel Smith</h6>
                <span className="designation fs-sm ins-text">
                  Creative Manager
                </span>
                <p className="mt-3 mb-4">
                  Team component built to improve trust and culture business.{' '}
                </p>
                <div className="ins-team-social d-flex align-items-center flex-wrap justify-content-center">
                  <a href="#">
                    {/* <i className="fab fa-facebook-f"></i> */}
                    <FaFacebookF />
                  </a>
                  <a href="#">
                    {/* <i className="fab fa-instagram"></i> */}
                    <FaInstagram />
                  </a>
                  <a href="#">
                    {/* <i className="fab fa-twitter"></i> */}
                    <FaTwitter />
                  </a>
                  <a href="#">
                    {/* <i className="fab fa-pinterest"></i> */}
                    <FaPinterest />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="ins-team-card text-center bg-white rounded">
                <img
                  alt="team"
                  src="/insurance/team-4.jpg"
                  className="img-fluid rounded-circle"
                />
                <h6 className="ins-heading mt-4 mb-0">Jesse Andrews</h6>
                <span className="designation fs-sm ins-text">
                  Creative Manager
                </span>
                <p className="mt-3 mb-4">
                  Team component built to improve trust and culture business.{' '}
                </p>
                <div className="ins-team-social d-flex align-items-center flex-wrap justify-content-center">
                  <a href="#">
                    {/* <i className="fab fa-facebook-f"></i> */}
                    <FaFacebookF />
                  </a>
                  <a href="#">
                    {/* <i className="fab fa-instagram"></i> */}
                    <FaInstagram />
                  </a>
                  <a href="#">
                    {/* <i className="fab fa-twitter"></i> */}
                    <FaTwitter />
                  </a>
                  <a href="#">
                    {/* <i className="fab fa-pinterest"></i> */}
                    <FaPinterest />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <p className="mb-0 mt-5 ins-center-explore ins-text text-center">
            Do You Want To explore more Member.{' '}
            <a href="#" className="fw-semibold text-decoration-underline">
              just click here
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default InsuranceTeam;
