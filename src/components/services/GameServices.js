import React from "react";
import Link from "next/link";

export default function GameServices() {
  return (
    <section className="game-services ptb-100">
      <div className="game-service-bg pt-60 pb-60">
        <div className="container">
          <div className="row  align-items-center">
            <div className="col-lg-5 col-md-8">
              <div className="section-title mb-5 mb-lg-0">
                <h2 className="text-white mb-4">
                  Why Choose Quiety Popular Game Servers.
                </h2>
                <p className="m-0 text-off-white">
                  Give your Website the speed, security, and uptime it eserves &
                  become part of the fastest Web Hosting.
                </p>
                <Link href="/">
                  <a className="game-btn-mdm mt-4 text-white">Explore More</a>
                </Link>
              </div>
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="game-service-right">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="row mb--200">
                      <div className="col-lg-12 col-md-6">
                        <div className="game-service-wrapper mb-4">
                          <div className="game-service-icon mb-2">
                            <img src="/gs1.png" alt="icon" />
                          </div>
                          <h4 className="h5 text-white fw-medium m-0 py-3">
                            24/7 Fast Support
                          </h4>
                          <p className="m-0 text-off-white">
                            Give your Website the speed, deserves and become
                            part of the fastest Web Hosting
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-6">
                        <div className="game-service-wrapper mb-4">
                          <div className="game-service-icon mb-2">
                            <img src="/gs2.png" alt="icon" />
                          </div>
                          <h4 className="h5 text-white fw-medium m-0 py-3">
                            DDOS Protection
                          </h4>
                          <p className="m-0 text-off-white">
                            Give your Website the speed, deserves and become
                            part of the fastest Web Hosting
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="row mt--200">
                      <div className="col-lg-12 col-md-6">
                        <div className="game-service-wrapper mb-4">
                          <div className="game-service-icon mb-2">
                            <img src="/gs2.png" alt="icon" />
                          </div>
                          <h4 className="h5 text-white fw-medium m-0 py-3">
                            1 Click Install
                          </h4>
                          <p className="m-0 text-off-white">
                            Give your Website the speed, deserves and become
                            part of the fastest Web Hosting{" "}
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-6">
                        <div className="game-service-wrapper mb-4">
                          <div className="game-service-icon mb-2">
                            <img src="/gs4.png" alt="icon" />
                          </div>
                          <h4 className="h5 text-white fw-medium m-0 py-3">
                            Fast Game Servers
                          </h4>
                          <p className="m-0 text-off-white">
                            Give your Website the speed, deserves and become
                            part of the fastest Web Hosting{" "}
                          </p>
                        </div>
                      </div>
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
