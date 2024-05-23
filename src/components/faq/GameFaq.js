import React from "react";

export default function GameFaq() {
  return (
    <section className="game-faq ptb-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="text-center mb-5">
              <h2 className="mb-3 text-white">Our Most Common Question.</h2>
              <p className="m-0 text-off-white">
                Whether hosting community forums, an online store, or even a
                blog, this platform is built to meet and surpass expectations.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="game-faq-img mb-5 mb-lg-0 text-center text-lg-start">
              <img
                src="/questions.png"
                alt="illustration"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="game-accordion">
              <div
                className="accordion accordion-flush"
                id="accordionFlushExample"
              >
                {/* One */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button
                      className="accordion-button collapsed shadow-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      Are There Any Benefits Other Than Money?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <p className="text-off-white m-0">
                        Multiple layers of security firewalls ensure the safety
                        of our entire web hosting environment. Thanks to the
                        innovations in the AI field, our security services will
                        adapt to every type of malicious attack! From Opensource
                        applications to
                      </p>
                    </div>
                  </div>
                </div>
                {/* Two */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingTwo">
                    <button
                      className="accordion-button collapsed shadow-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      Test Our Amazing Control Panel?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <p className="text-off-white m-0">
                        Multiple layers of security firewalls ensure the safety
                        of our entire web hosting environment. Thanks to the
                        innovations in the AI field, our security services will
                        adapt to every type of malicious attack! From Opensource
                        applications to
                      </p>
                    </div>
                  </div>
                </div>
                {/* Three */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingThree">
                    <button
                      className="accordion-button shadow-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      What is a Challenge & How Do I Join One?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    className="accordion-collapse collapse show"
                    aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <p className="text-off-white m-0">
                        Multiple layers of security firewalls ensure the safety
                        of our entire web hosting environment. Thanks to the
                        innovations in the AI field, our security services will
                        adapt to every type of malicious attack! From Opensource
                        applications to
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingFour">
                    <button
                      className="accordion-button collapsed shadow-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFour"
                      aria-expanded="false"
                      aria-controls="flush-collapseFour"
                    >
                      Who Do I Commpelet Against in Challeges?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingFour"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <p className="text-off-white m-0">
                        Multiple layers of security firewalls ensure the safety
                        of our entire web hosting environment. Thanks to the
                        innovations in the AI field, our security services will
                        adapt to every type of malicious attack! From Opensource
                        applications to
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
}
