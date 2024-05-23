import React from 'react';

export default function DigiContact() {
  return (
    <section className="digi-contact pt-60 pb-120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="digi-contact-left">
              <div>
                <span className="span-arrow">Best Yout website</span>
                <img src="/arro-right.svg" alt="arrow" />
              </div>
              <h2 className="mb-3">
                Get in touch <span className="text-orange">Today!</span>
              </h2>
              <p>
                Seamlessly enable best-of-breed portals and out-of-the-box core
                competencies cross-platform channels and granular infomediaries.
              </p>
              <ul className="d-flex list-unstyled d-flex flex-wrap list-two-col mb-0 mt-5">
                <li className="pe-4">
                  <div className="bg-white contact-box mb-4 mb-md-0">
                    <img src="/icons/c-i-1.svg" alt="icon" />
                    <h4 className="h5">Email Address</h4>
                    <p className="fw-bold">themetags@support.com</p>
                  </div>
                </li>
                <li>
                  <div className="bg-white contact-box">
                    <img src="/icons/c-i-2.svg" alt="icon" />
                    <h4 className="h5">Phone</h4>
                    <p className="fw-bold">+80 1789 1456 456</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="digi-contact-form-bg position-relative">
              <ul className="list-unstyled d-none d-xl-block m-0">
                <li></li>
                <li></li>
              </ul>
              <form>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Company"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <textarea
                      rows="5"
                      className="w-100 form-control"
                      placeholder="Message.."
                    ></textarea>
                  </div>
                  <div className="col-3">
                    <button className="mt-4 btn rounded-pill bg-orange">
                      Get in touch
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
