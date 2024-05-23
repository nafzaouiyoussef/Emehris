import React from 'react';

export default function DigiWhyChoose() {
  return (
    <section className="digi-why pt-120">
      <div className="container">
        <div className="row align-content-center justify-content-between">
          <div className="col-lg-6 col-md-12">
            <div className="digi-why-left">
              <img src="/d-girl-w-p.png" className="img-fluid" alt="Girl" />
              <ul className="list-unstyled d-none d-md-block">
                <li>
                  <img
                    src="/dg-shape-1.png"
                    className="shadow img-fluid"
                    alt="shape"
                  />
                </li>
                <li>
                  <img
                    src="/dg-shape-2.png"
                    className="shadow img-fluid"
                    alt="shape"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="digi-why-right pt-4">
              <div>
                <span className="span-arrow">Why Choose Us</span>
                <img src="/arro-right.svg" className="img-fluid" alt="arrow" />
              </div>
              <h2>Why Working With Us?</h2>
              <p>
                Compellingly orchestrate resource sucking leadership skills
                without collaborative technology. Holisticly pontificate
                resource maximizing imperatives after world-class Globally
                communicate effective schemas without low-risk materials.
                Interactively transition tactical fabricate corporate
                meta-services .
              </p>
              <div>
                <ul className="list-unstyled mb-0 mt-5">
                  <li className="d-flex p-3 align-items-center">
                    <div className="me-3">
                      <img src="/icons/dw-i-1.svg" alt="icon" />
                    </div>
                    <div>
                      <h4 className="mb-0">250+</h4>
                      <span>Happy Customer</span>
                    </div>
                  </li>
                  <li className="pe-4 d-flex p-3 align-items-center">
                    <div className="me-3">
                      <img
                        src="/icons/dw-i-2.svg"
                        className="img-fluid"
                        alt="icon"
                      />
                    </div>
                    <div>
                      <h4 className="mb-0">540+</h4>
                      <span>Succesfull Project</span>
                    </div>
                  </li>
                  <li className="pe-4 d-flex p-3 align-items-center">
                    <div className="me-3">
                      <img
                        src="/icons/dw-i-3.svg"
                        className="img-fluid"
                        alt="icon"
                      />
                    </div>
                    <div>
                      <h4 className="mb-0">80+</h4>
                      <span> Team Member</span>
                    </div>
                  </li>
                  <li className="pe-4 d-flex p-3 align-items-center">
                    <div className="me-3">
                      <img
                        src="/icons/dw-i-4.svg"
                        className="img-fluid"
                        alt="icon"
                      />
                    </div>
                    <div>
                      <h4 className="mb-0">99%</h4>
                      <span>Customer Satisfaction</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
