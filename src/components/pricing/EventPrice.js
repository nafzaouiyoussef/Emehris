import React from "react";
import Link from "next/link";
import { FiCheckCircle } from "react-icons/fi";

export default function EventPrice() {
  return (
    <section
      className="ev-price ptb-100"
      style={{
        background: "url('/event/price-bgg.jpg')no-repeat center center/cover",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="text-center mb-5">
              <span className="fw-bold text-dark-blue">Ticket</span>
              <h2>Explore Flexible Pricing Plans</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="ev-single-price text-center mb-4 mb-lg-0">
              <div className="ev-price-header text-center pb-4">
                <h5>Single day pass</h5>
                <h4>$180</h4>
              </div>
              <ul className="m-0 text-center list-unstyled mt-4">
                <li className="py-2">
                  <i className="me-2">
                    <FiCheckCircle />
                  </i>
                  One catered lunch
                </li>
                <li className="py-2">
                  <i className="me-2">
                    <FiCheckCircle />
                  </i>
                  Afternoon snacks
                </li>
                <li className="py-2">
                  <i className="me-2">
                    <FiCheckCircle />
                  </i>
                  Fun swag
                </li>
                <li className="py-2">
                  <i className="me-2">
                    <FiCheckCircle />
                  </i>
                  Entrance Afterparty
                </li>
                <li className="py-2">
                  <i className="me-2">
                    <FiCheckCircle />
                  </i>
                  Afternoon snacks
                </li>
              </ul>
              <Link href="/request-demo">
                <a className="ev-price-btn mt-4">Purchase Now</a>
              </Link>
              <ul className="list-unstyled ev-price-dot mb-0">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="ev-single-price text-center mb-4 mb-lg-0">
              <div className="ev-price-header text-center pb-4">
                <h5>Day Plan</h5>
                <h4>$250</h4>
              </div>
              <ul className="m-0 text-center list-unstyled mt-4">
                <li className="py-2">
                  <i className="me-2">
                    <FiCheckCircle />
                  </i>
                  One catered lunch
                </li>
                <li className="py-2">
                  <i className="me-2">
                    <FiCheckCircle />
                  </i>
                  Afternoon snacks
                </li>
                <li className="py-2">
                  <i className="me-2">
                    <FiCheckCircle />
                  </i>
                  Fun swag
                </li>
                <li className="py-2">
                  <i className="me-2">
                    <FiCheckCircle />
                  </i>
                  Entrance Afterparty
                </li>
                <li className="py-2">
                  <i className="me-2">
                    <FiCheckCircle />
                  </i>
                  Afternoon snacks
                </li>
              </ul>
              <Link href="/request-demo">
                <a className="ev-price-btn mt-4">Purchase Now</a>
              </Link>
              <ul className="list-unstyled ev-price-dot mb-0">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="ev-single-price text-center mb-4 mb-lg-0">
              <div className="ev-price-header text-center pb-4">
                <h5>VIP Seat with Food</h5>
                <h4>$180</h4>
              </div>
              <ul className="m-0 text-center list-unstyled mt-4">
                <li className="py-2">
                  <i className="me-2">
                    <FiCheckCircle />
                  </i>
                  One catered lunch
                </li>
                <li className="py-2">
                  <i className="me-2">
                    <FiCheckCircle />
                  </i>
                  Afternoon snacks
                </li>
                <li className="py-2">
                  <i className="me-2">
                    <FiCheckCircle />
                  </i>
                  Fun swag
                </li>
                <li className="py-2">
                  <i className="me-2">
                    <FiCheckCircle />
                  </i>
                  Entrance Afterparty
                </li>
                <li className="py-2">
                  <i className="me-2">
                    <FiCheckCircle />
                  </i>
                  Afternoon snacks
                </li>
              </ul>
              <Link href="/request-demo">
                <a className="ev-price-btn mt-4">Purchase Now</a>
              </Link>
              <ul className="list-unstyled ev-price-dot mb-0">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
        <p className="text-center mt-4 text-muted fs-sm">
          All prices exclude 25% VAT. For more details, view our
          <Link href="/about-us">
            <a className="text-dark">
              <b> Terms & Conditions</b>
            </a>
          </Link>
        </p>
      </div>
    </section>
  );
}
