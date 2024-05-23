import React from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import {
  HiOutlineCog,
  HiOutlineDocumentReport,
  HiOutlineUsers,
} from "react-icons/hi";
import { SiSimpleanalytics } from "react-icons/si";
import { IoGitCompareOutline } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import SectionTitle from "../common/SectionTitle";

const ServiceOne = ({ bgDark }) => {
  return (
    <section
      className={`feature-section ptb-120 ${bgDark ? "bg-dark" : "bg-light"}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-12 justify-content-center">
            {bgDark ? (
              <SectionTitle
                subtitle="Services"
                title="Best Services Grow Your Business Value"
                description="Globally actualize cost effective with resource maximizing
                  leadership skills."
                centerAlign
                dark
              />
            ) : (
              <SectionTitle
                subtitle="Services"
                title="Best Services Grow Your Business Value"
                description="Globally actualize cost effective with resource maximizing
                  leadership skills."
                centerAlign
              />
            )}
            <div className="feature-grid">
              <div
                className={`shadow-sm highlight-card rounded-custom p-5 ${
                  bgDark
                    ? "bg-custom-light promo-border-hover border border-2 border-light text-white"
                    : "bg-white"
                }`}
              >
                <div className="icon-box d-inline-block rounded-circle bg-primary-soft mb-32">
                  <span className="fal">
                    <SiSimpleanalytics className="h4 text-primary" />
                  </span>
                </div>
                <div className="feature-content">
                  <h3 className="h5">Advanced analytics</h3>
                  <p>
                    Synergistically pursue accurate initiatives without
                    economically sound imperatives.
                  </p>
                  <p>
                    {" "}
                    Professionally architect unique process improvements via
                    optimal.
                  </p>
                  <h6 className="mt-4">Included with...</h6>
                  <ul className="list-unstyled mb-0">
                    <li className="py-1">
                      <FaCheckCircle
                        className={`fad fa-check-circle me-2 ${
                          bgDark ? "text-warning" : "text-primary"
                        }`}
                      />
                      High-converting
                    </li>
                    <li className="py-1">
                      <FaCheckCircle
                        className={`fad fa-check-circle me-2 ${
                          bgDark ? "text-warning" : "text-primary"
                        }`}
                      />
                      Personal branding
                    </li>
                    <li className="py-1">
                      <FaCheckCircle
                        className={`fad fa-check-circle me-2 ${
                          bgDark ? "text-warning" : "text-primary"
                        }`}
                      />
                      Modernized prospecting
                    </li>
                    <li className="py-1">
                      <FaCheckCircle
                        className={`fad fa-check-circle me-2 ${
                          bgDark ? "text-warning" : "text-primary"
                        }`}
                      />
                      Clean and modern
                    </li>
                    <li className="py-1">
                      <FaCheckCircle
                        className={`fad fa-check-circle me-2 ${
                          bgDark ? "text-warning" : "text-primary"
                        }`}
                      />
                      Showcasing success
                    </li>
                    <li className="py-1">
                      <FaCheckCircle
                        className={`fad fa-check-circle me-2 ${
                          bgDark ? "text-warning" : "text-primary"
                        }`}
                      />
                      Bootstrap latest version
                    </li>
                  </ul>
                </div>
                <Link href="/service-single">
                  <a className="link-with-icon text-decoration-none mt-3">
                    View Details{" "}
                    <i className="far mb-1">
                      <BsArrowRight />
                    </i>
                  </a>
                </Link>
              </div>
              <div
                className={`feature-card shadow-sm rounded-custom p-5 ${
                  bgDark
                    ? "bg-custom-light promo-border-hover border border-2 border-light text-white"
                    : "bg-white"
                }`}
              >
                <div className="icon-box d-inline-block rounded-circle bg-success-soft mb-32">
                  <span className="fal">
                    <HiOutlineDocumentReport className="h3 text-success" />
                  </span>
                </div>
                <div className="feature-content">
                  <h3 className="h5">Automated Reports</h3>
                  <p className="mb-0">
                    Synergistically pursue accurate initiatives without
                    economically imperatives.
                  </p>
                </div>
                <Link href="/service-single">
                  <a className="link-with-icon text-decoration-none mt-3">
                    View Details{" "}
                    <i className="far mb-1">
                      <BsArrowRight />
                    </i>
                  </a>
                </Link>
              </div>
              <div
                className={`feature-card shadow-sm rounded-custom p-5 ${
                  bgDark
                    ? "bg-custom-light promo-border-hover border border-2 border-light text-white"
                    : "bg-white"
                }`}
              >
                <div className="icon-box d-inline-block rounded-circle bg-danger-soft mb-32">
                  <span className="fal">
                    <HiOutlineUsers className="h3 text-danger" />
                  </span>
                </div>
                <div className="feature-content">
                  <h3 className="h5">User Journey Flow</h3>
                  <p className="mb-0">
                    Quickly productize prospective value before collaborative
                    benefits.
                  </p>
                </div>
                <Link href="/service-single">
                  <a className="link-with-icon text-decoration-none mt-3">
                    View Details{" "}
                    <i className="far mb-1">
                      <BsArrowRight />
                    </i>
                  </a>
                </Link>
              </div>
              <div
                className={`feature-card shadow-sm rounded-custom p-5 ${
                  bgDark
                    ? "bg-custom-light promo-border-hover border border-2 border-light text-white"
                    : "bg-white"
                }`}
              >
                <div className="icon-box d-inline-block rounded-circle bg-dark-soft mb-32">
                  <span className="fal">
                    <IoGitCompareOutline className="h3 text-dark" />
                  </span>
                </div>
                <div className="feature-content">
                  <h3 className="h5">Compare A/B Testing</h3>
                  <p className="mb-0">
                    Credibly disintermediate functional processes for team
                    driven action.
                  </p>
                </div>
                <Link href="/service-single">
                  <a className="link-with-icon text-decoration-none mt-3">
                    View Details{" "}
                    <i className="far mb-1">
                      <BsArrowRight />
                    </i>
                  </a>
                </Link>
              </div>
              <div
                className={`feature-card shadow-sm rounded-custom p-5 ${
                  bgDark
                    ? "bg-custom-light promo-border-hover border border-2 border-light text-white"
                    : "bg-white"
                }`}
              >
                <div className="icon-box d-inline-block rounded-circle bg-warning-soft mb-32">
                  <span className="fal">
                    <HiOutlineCog className="h3 text-warning" />
                  </span>
                </div>
                <div className="feature-content">
                  <h3 className="h5">Easy Customization</h3>
                  <p className="mb-0">
                    Dynamically develop ubiquitous opportunities whereas
                    relationships.
                  </p>
                </div>
                <Link href="/service-single">
                  <a className="link-with-icon text-decoration-none mt-3">
                    View Details{" "}
                    <i className="far mb-1">
                      <BsArrowRight />
                    </i>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOne;
