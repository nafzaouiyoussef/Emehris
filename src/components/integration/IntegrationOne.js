/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { integrationOneLeft, integrationOneRight } from '../../utils/data';

const IntegrationOne = () => {
  return (
    <section className="integration-section ptb-120">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-3">
            <div className="integration-list-wrap">
              {integrationOneLeft.map((integration, i) => (
                  <Link href="/integration-single" key={i + 1}>
                    <a
                      className={integration.className}
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Your Brand Name"
                    >
                      <Image
                        width={40}
                        height={40}
                        src={integration.image}
                        alt="integration"
                        className="img-fluid rounded-circle"
                      />
                    </a>
                  </Link>
              ))}
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="section-heading text-center my-5 my-lg-0 my-xl-0">
              <h4 className="text-primary h5">Integration</h4>
              <h2>We Collaborate with Top Software Company</h2>
              <Link href="/integrations">
                <a className="mt-4 btn btn-primary"> View all Integration</a>
              </Link>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="col-lg-4">
              <div className="integration-list-wrap">
                {integrationOneRight.map((integration, i) => (
                    <Link href="/integration-single" key={i + 1}>
                      <a
                        className={integration.className}
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Your Brand Name"
                      >
                        <img
                          src={integration.image}
                          alt="integration"
                          className="img-fluid rounded-circle"
                        />
                      </a>
                    </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-100">
          
        </div>
      </div>
    </section>
  );
};

export default IntegrationOne;
