import React from 'react';

const FaqFive = () => {
  return (
    <section className="mk-faq bg-white pt-60 pb-60 overflow-hidden">
      <div className="container">
        <div className="row align-items-center justify-content-between g-5">
          <div className="col-xl-7">
            <div className="mk-faq-feature">
              <img
                src="/marketing/faq.png"
                alt="not found"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-xl-5">
            <div className="mk-faq-content">
              <div className="mk-title mb-30">
                <span className="mk-subtitle fw-bold mb-3">
                  Frequently Asked Question
                </span>
                <h2 className="mk-heading mb-3">Freely Asked Questions</h2>
                <p className="mb-0">
                  Globally whiteboard global web-readiness rather than holistic
                  action items. Uniquely communicate synergistic markets.
                </p>
              </div>
              <div className="mk-accordion accordion" id="mk-accordion">
                <div className="accordion-item active">
                  <div className="accordion-header">
                    <a
                      href="#acc_1"
                      className="accordion-button"
                      data-bs-toggle="collapse"
                    >
                      Can I request a new feature for Quiety
                    </a>
                  </div>
                  <div
                    className="accordion-collapse collapse show"
                    id="acc_1"
                    data-bs-parent="#mk-accordion"
                  >
                    <div className="accordion-body">
                      <p className="mb-0">
                        Globally whiteboard global web-readiness rather than
                        holistic action items. Uniquely communicate synergistic
                        markets .
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-header">
                    <a
                      href="#acc_2"
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                    >
                      How do I create an account?
                    </a>
                  </div>
                  <div
                    className="accordion-collapse collapse"
                    id="acc_2"
                    data-bs-parent="#mk-accordion"
                  >
                    <div className="accordion-body">
                      <p className="mb-0">
                        Globally whiteboard global web-readiness rather than
                        holistic action items. Uniquely communicate synergistic
                        markets .
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-header">
                    <a
                      href="#acc_3"
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                    >
                      Do you offer team accounts?
                    </a>
                  </div>
                  <div
                    className="accordion-collapse collapse"
                    id="acc_3"
                    data-bs-parent="#mk-accordion"
                  >
                    <div className="accordion-body">
                      <p className="mb-0">
                        Globally whiteboard global web-readiness rather than
                        holistic action items. Uniquely communicate synergistic
                        markets .
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqFive;
