/* eslint-disable @next/next/no-img-element */
import React from "react";

const Customer = ({ gray }) => {
  return (
    <>
      {gray ? (
        <div className="customer-section pb-120 bg-dark">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-12">
                <ul className="customer-logos-grid text-center list-unstyled mb-0">
                  <li>
                    <img
                      src="/clients/client-logo-1.svg"
                      width="150"
                      alt="clients logo"
                      className="img-fluid customer-logo p-1 p-md-2 p-lg-3 m-auto"
                    />
                  </li>
                  <li>
                    <img
                      src="/clients/client-logo-2.svg"
                      width="150"
                      alt="clients logo"
                      className="img-fluid customer-logo p-1 p-md-2 p-lg-3 m-auto"
                    />
                  </li>
                  <li>
                    <img
                      src="/clients/client-logo-3.svg"
                      width="150"
                      alt="clients logo"
                      className="img-fluid customer-logo p-1 p-md-2 p-lg-3 m-auto"
                    />
                  </li>
                  <li>
                    <img
                      src="/clients/client-logo-4.svg"
                      width="150"
                      alt="clients logo"
                      className="img-fluid customer-logo p-1 p-md-2 p-lg-3 m-auto"
                    />
                  </li>
                  <li>
                    <img
                      src="/clients/client-logo-5.svg"
                      width="150"
                      alt="clients logo"
                      className="img-fluid customer-logo p-1 p-md-2 p-lg-3 m-auto"
                    />
                  </li>
                  <li>
                    <img
                      src="/clients/client-logo-6.svg"
                      width="150"
                      alt="clients logo"
                      className="img-fluid customer-logo p-1 p-md-2 p-lg-3 m-auto"
                    />
                  </li>
                  <li>
                    <img
                      src="/clients/client-logo-7.svg"
                      width="150"
                      alt="clients logo"
                      className="img-fluid customer-logo p-1 p-md-2 p-lg-3 m-auto"
                    />
                  </li>
                  <li>
                    <img
                      src="/clients/client-logo-8.svg"
                      width="150"
                      alt="clients logo"
                      className="img-fluid customer-logo p-1 p-md-2 p-lg-3 m-auto"
                    />
                  </li>
                </ul>
                <p className="text-center mt-5 mb-0">
                  Trusted More than 25,00+ Companies Around the World
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="customer-section pb-120 ">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-12">
                <ul className="customer-logos-grid text-center list-unstyled mb-0">
                  <li>
                    <img
                      src="/clients/client-logo-1.svg"
                      width="150"
                      alt="clients logo"
                      className="img-fluid
                      customer-logo-gray
                      p-1 p-md-2 p-lg-3 m-auto"
                    />
                  </li>
                  <li>
                    <img
                      src="/clients/client-logo-2.svg"
                      width="150"
                      alt="clients logo"
                      className="img-fluid customer-logo-gray p-1 p-md-2 p-lg-3 m-auto"
                    />
                  </li>
                  <li>
                    <img
                      src="/clients/client-logo-3.svg"
                      width="150"
                      alt="clients logo"
                      className="img-fluid customer-logo-gray p-1 p-md-2 p-lg-3 m-auto"
                    />
                  </li>
                  <li>
                    <img
                      src="/clients/client-logo-4.svg"
                      width="150"
                      alt="clients logo"
                      className="img-fluid customer-logo-gray p-1 p-md-2 p-lg-3 m-auto"
                    />
                  </li>
                  <li>
                    <img
                      src="/clients/client-logo-5.svg"
                      width="150"
                      alt="clients logo"
                      className="img-fluid customer-logo-gray p-1 p-md-2 p-lg-3 m-auto"
                    />
                  </li>
                  <li>
                    <img
                      src="/clients/client-logo-6.svg"
                      width="150"
                      alt="clients logo"
                      className="img-fluid customer-logo-gray p-1 p-md-2 p-lg-3 m-auto"
                    />
                  </li>
                  <li>
                    <img
                      src="/clients/client-logo-7.svg"
                      width="150"
                      alt="clients logo"
                      className="img-fluid customer-logo-gray p-1 p-md-2 p-lg-3 m-auto"
                    />
                  </li>
                  <li>
                    <img
                      src="/clients/client-logo-8.svg"
                      width="150"
                      alt="clients logo"
                      className="img-fluid customer-logo-gray p-1 p-md-2 p-lg-3 m-auto"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Customer;
