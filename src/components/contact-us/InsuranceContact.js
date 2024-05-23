import React from 'react';

const InsuranceContact = () => {
  return (
    <section
      className="ins-contact-section ptb-120 bg-white position-relative overflow-hidden"
      style={{
        background: "url('/insurance/contact-bg.jpg') no-repeat center right",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="ins-contact-wrapper">
              <div className="ins-title pe-4 mb-30 pb-2">
                <div className="d-flex align-items-center">
                  <span className="subtitle fw-bold">Get A Free Estimate</span>
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
                <h2 className="ins-heading mb-0">
                  Get an Insurance <mark>Quote to</mark> Get Started!
                </h2>
              </div>
              <form className="ins-contact-form">
                <div className="row g-4">
                  <div className="col-sm-6">
                    <div className="ins-input-field">
                      <label>First Name</label>
                      <input
                        type="text"
                        placeholder="Name"
                        className="border rounded w-100"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="ins-input-field">
                      <label>Last Name</label>
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="border rounded w-100"
                      />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="ins-input-field">
                      <label>Email</label>
                      <input
                        type="email"
                        placeholder="Email"
                        className="border rounded w-100"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="ins-input-field">
                      <label>Select Type</label>
                      <select className="form-select border">
                        <option>Life Insurance</option>
                        <option>Home Insurance</option>
                        <option>Car Insurance</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="ins-input-field">
                      <label>Limit Balance</label>
                      <input
                        type="text"
                        defaultValue="$649500"
                        className="border rounded w-100"
                      />
                    </div>
                  </div>
                </div>
                <button type="submit" className="ins-btn ins-primary-btn mt-5">
                  Get a Quote
                  <span>
                    <svg
                      width="22"
                      height="9"
                      viewBox="0 0 22 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.577637 4.89433L15.5145 4.89433"
                        stroke="white"
                        strokeWidth="1.49369"
                      />
                      <path
                        d="M21.4901 4.89153L15.5153 8.34106L15.5153 1.442L21.4901 4.89153Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceContact;
