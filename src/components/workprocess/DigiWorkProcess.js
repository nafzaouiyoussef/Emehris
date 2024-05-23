import React from 'react';
import Link from 'next/link';

export default function DigiWorkProcess() {
  return (
    <section className="digi-how-works ptb-120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="digi-how-works-left">
              <div>
                <span className="span-arrow">How It Works</span>
                <img src="/arro-right.svg" className="img-fluid" alt="arrow" />
              </div>
              <h2>
                Our Bulletproof Prcess to win on
                <span className="text-orange">Social Media</span>
              </h2>
              <p>
                Compellingly orchestrate resource sucking leadership skills
                without collaborative technology. Holisticly pontificate
                resource maximizing imperatives after world-class Globally
                communicate effective schemas without low-risk materials.
                Interactively transition tactical fabricate corporate
                meta-services.
              </p>
              <Link href="/request-for-demo">
                <a className="btn rounded-pill bg-orange mt-3">
                  {' '}
                  Request a Quoate
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="digi-how-works-right mt-5 mt-lg-0">
              <div className="dig-how-steps">
                <ul className="list-unstyled mb-0">
                  <li className="d-md-flex justify-content-between align-items-center mb-3">
                    <div className="me-3">
                      <img
                        src="/icons/st-1.png"
                        className="img-fluid mb-3 mb-md-0"
                        alt="icons"
                      />
                    </div>
                    <div>
                      <span className="text-orange fw-bold">Step 1</span>
                      <h6>Social Media Content Plan</h6>
                      <p className="m-0">
                        Compellingly orchestrate resource sucking leadership
                        skills without collaborative technology.
                      </p>
                    </div>
                  </li>
                  <li className="d-md-flex justify-content-between align-items-center mb-3">
                    <div className="me-3">
                      <img
                        src="/icons/st-2.png"
                        className="img-fluid mb-3 mb-md-0"
                        alt="icons"
                      />
                    </div>
                    <div>
                      <span className="text-orange fw-bold">Step 2</span>
                      <h6>Publishing & Execution</h6>
                      <p className="m-0">
                        Compellingly orchestrate resource sucking leadership
                        skills without collaborative technology.
                      </p>
                    </div>
                  </li>
                  <li className="d-md-flex justify-content-between align-items-center">
                    <div className="me-3">
                      <img
                        src="/icons/st-3.png"
                        className="img-fluid mb-3 mb-md-0"
                        alt="icons"
                      />
                    </div>
                    <div>
                      <span className="text-orange fw-bold">Step 3</span>
                      <h6>Measure & Scale</h6>
                      <p className="m-0">
                        Compellingly orchestrate resource sucking leadership
                        skills without collaborative technology.
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="shape">
                  <ul className="list-unstyled mb-0">
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
